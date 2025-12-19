import { supabase } from '../lib/supabase';
import { Comment } from '../types';

const STORAGE_KEY = 'portfolio_comments';

// --- Local Storage Helpers (Fallback) ---

const getLocalComments = (): Comment[] => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch (e) {
    console.warn("Local storage error:", e);
    return [];
  }
};

const saveLocalComment = (comment: Comment) => {
  try {
    const saved = getLocalComments();
    const updated = [comment, ...saved];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    // Dispatch event so other tabs/components update
    window.dispatchEvent(new Event('storage'));
  } catch (e) {
    console.warn("Local storage save error:", e);
  }
};

// --- Main Service ---

export const commentService = {
  
  async getComments(): Promise<Comment[]> {
    // 1. Try Supabase
    if (supabase) {
      try {
        const { data, error } = await supabase
          .from('comments')
          .select('*')
          .order('created_at', { ascending: false });
        
        if (error) {
          // Log the actual error message for debugging
          console.warn('Supabase fetch failed (falling back to local):', error.message || error);
          throw error; 
        }
        
        if (data) {
          return data.map((item: any) => ({
            id: item.id.toString(),
            author: item.author,
            text: item.text,
            date: new Date(item.created_at).toLocaleDateString()
          }));
        }
      } catch (err) {
        // Fallthrough to local storage on any API error
      }
    }

    // 2. Fallback to Local Storage
    return getLocalComments();
  },

  async addComment(author: string, text: string): Promise<Comment> {
    const tempId = Date.now().toString();
    const newComment: Comment = {
      id: tempId,
      author,
      text,
      date: new Date().toLocaleDateString()
    };

    if (supabase) {
      try {
        const { data, error } = await supabase
          .from('comments')
          .insert([{ author, text }])
          .select()
          .single();

        if (error) {
           console.warn('Supabase insert failed (falling back to local):', error.message || error);
           throw error;
        }
        
        if (data) {
          return {
            id: data.id.toString(),
            author: data.author,
            text: data.text,
            date: new Date(data.created_at).toLocaleDateString()
          };
        }

      } catch (err) {
        // Fallthrough to local storage on any API error
      }
    }

    // Fallback: Save locally
    saveLocalComment(newComment);
    return newComment;
  }
};