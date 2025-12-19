import { supabase } from '../lib/supabase';
import { Comment } from '../types';

const STORAGE_KEY = 'portfolio_comments';

const getLocalComments = (): Comment[] => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch (e) {
    return [];
  }
};

const saveLocalComment = (comment: Comment) => {
  try {
    const saved = getLocalComments();
    const updated = [comment, ...saved];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new Event('storage'));
  } catch (e) {
    console.error(e);
  }
};

export const commentService = {
  
  async getComments(): Promise<Comment[]> {
    if (supabase) {
      try {
        const { data, error } = await supabase
          .from('comments')
          .select('*')
          .order('created_at', { ascending: false });
        
        if (error) throw error;
        
        if (data) {
          return data.map((item: any) => ({
            id: item.id.toString(),
            author: item.author,
            text: item.text,
            date: new Date(item.created_at).toLocaleDateString()
          }));
        }
      } catch (err) {
        // Silent fail
      }
    }

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

        if (error) throw error;
        
        if (data) {
          return {
            id: data.id.toString(),
            author: data.author,
            text: data.text,
            date: new Date(data.created_at).toLocaleDateString()
          };
        }

      } catch (err) {
        // Silent fail
      }
    }

    saveLocalComment(newComment);
    return newComment;
  }
};