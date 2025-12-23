import React, { useState, useEffect } from 'react';
import { Comment } from '../types';
import { MessageSquare, Send, Database, WifiOff } from 'lucide-react';
import { motion } from 'framer-motion';
import { commentService } from '../services/commentService';
import { isSupabaseConnected } from '../lib/supabase';

const CommentsSection: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isConfigured, setIsConfigured] = useState(false);

  useEffect(() => {
    setIsConfigured(isSupabaseConnected());
    loadComments();

    const handleStorageChange = () => loadComments();
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const loadComments = async () => {
    setIsLoading(true);
    try {
      const data = await commentService.getComments();
      setComments(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim() || !authorName.trim()) return;

    setIsLoading(true);
    try {
      const savedComment = await commentService.addComment(authorName, newComment);
      
      setComments(prev => {
        if (prev.some(c => c.id === savedComment.id)) return prev;
        return [savedComment, ...prev];
      });
      
      setNewComment('');
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="border border-neon-blue/20 bg-neon-bg p-6 rounded-lg relative overflow-hidden group shadow-[0_0_20px_rgba(0,243,255,0.05)] hover:shadow-[0_0_25px_rgba(0,243,255,0.1)] transition-shadow duration-500">
      
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center gap-3">
          <MessageSquare className="text-neon-blue w-6 h-6" />
          <h3 className="text-2xl font-display font-bold text-white tracking-wider">
            Guestbook
          </h3>
        </div>
        
        <div className={`flex items-center gap-2 text-[10px] font-mono border px-2 py-1 rounded-full ${isConfigured ? 'border-neon-blue/30 text-neon-blue bg-neon-blue/5' : 'border-gray-500/30 text-gray-500 bg-gray-500/5'}`}>
          {isConfigured ? (
            <>
              <Database className="w-3 h-3" />
              <span>CONNECTED</span>
            </>
          ) : (
            <>
              <WifiOff className="w-3 h-3" />
              <span>LOCAL</span>
            </>
          )}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mb-8 space-y-4">
        <div>
          <input
            type="text"
            placeholder="Name"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            disabled={isLoading}
            className="w-full bg-neon-dark border border-gray-800 text-white p-3 rounded focus:outline-none focus:border-neon-blue/50 focus:shadow-[0_0_10px_rgba(0,243,255,0.1)] transition-all font-sans disabled:opacity-50"
          />
        </div>
        <div>
          <textarea
            placeholder="Write a message..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            disabled={isLoading}
            rows={3}
            className="w-full bg-neon-dark border border-gray-800 text-white p-3 rounded focus:outline-none focus:border-neon-blue/50 focus:shadow-[0_0_10px_rgba(0,243,255,0.1)] transition-all font-sans resize-none disabled:opacity-50"
          />
        </div>
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={isLoading}
          className="flex items-center gap-2 bg-neon-blue text-black px-8 py-2 rounded font-display font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(0,243,255,0.3)] hover:bg-white transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
          ) : (
            <Send className="w-4 h-4" />
          )}
          {isLoading ? 'Posting...' : 'Sign Guestbook'}
        </motion.button>
      </form>

      <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
        {comments.length === 0 && !isLoading && (
          <div className="text-gray-500 text-center italic text-sm py-4">No signatures yet. Be the first.</div>
        )}
        {comments.map((comment) => (
          <motion.div 
            key={comment.id} 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-[#0a1018] p-4 rounded border border-gray-800"
          >
            <div className="flex justify-between items-start mb-2">
              <span className="font-bold text-neon-blue font-display text-sm">{comment.author}</span>
              <span className="text-[10px] text-gray-600 font-mono">{comment.date}</span>
            </div>
            <p className="text-gray-300 text-sm font-light leading-relaxed">{comment.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CommentsSection;