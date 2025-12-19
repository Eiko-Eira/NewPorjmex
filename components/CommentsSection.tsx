import React, { useState, useEffect } from 'react';
import { Comment } from '../types';
import { MessageSquare, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const CommentsSection: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [authorName, setAuthorName] = useState('');

  useEffect(() => {
    const loadComments = () => {
      const savedComments = localStorage.getItem('portfolio_comments');
      if (savedComments) {
        setComments(JSON.parse(savedComments));
      }
    };

    loadComments();

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'portfolio_comments') {
        loadComments();
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim() || !authorName.trim()) return;

    const comment: Comment = {
      id: Date.now().toString(),
      author: authorName,
      text: newComment,
      date: new Date().toLocaleDateString()
    };

    const updated = [comment, ...comments];
    setComments(updated);
    localStorage.setItem('portfolio_comments', JSON.stringify(updated));
    setNewComment('');
  };

  return (
    <div className="border border-neon-green/20 bg-[#050a10] p-6 rounded-lg relative overflow-hidden group shadow-[0_0_20px_rgba(0,255,65,0.05)] hover:shadow-[0_0_25px_rgba(0,255,65,0.1)] transition-shadow duration-500">
      
      <div className="flex items-center gap-3 mb-6">
        <MessageSquare className="text-neon-green w-6 h-6" />
        <h3 className="text-2xl font-display font-bold text-white tracking-wider">
          Comments
        </h3>
      </div>

      <form onSubmit={handleSubmit} className="mb-8 space-y-4">
        <div>
          <input
            type="text"
            placeholder="Name"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            className="w-full bg-neon-dark border border-gray-800 text-white p-3 rounded focus:outline-none focus:border-neon-green/50 focus:shadow-[0_0_10px_rgba(0,255,65,0.1)] transition-all font-sans"
          />
        </div>
        <div>
          <textarea
            placeholder="Write a message..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            rows={3}
            className="w-full bg-neon-dark border border-gray-800 text-white p-3 rounded focus:outline-none focus:border-neon-green/50 focus:shadow-[0_0_10px_rgba(0,255,65,0.1)] transition-all font-sans resize-none"
          />
        </div>
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 bg-neon-green text-black px-8 py-2 rounded font-display font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(0,255,65,0.3)] hover:bg-white transition-colors duration-300"
        >
          <Send className="w-4 h-4" />
          Send
        </motion.button>
      </form>

      <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
        {comments.length === 0 && (
          <div className="text-gray-500 text-center italic text-sm py-4">No comments yet. Be the first to verify this sector.</div>
        )}
        {comments.map((comment) => (
          <div key={comment.id} className="border-l-2 border-gray-800 pl-4 py-2 hover:border-neon-green transition-colors">
            <div className="flex justify-between items-baseline mb-1">
              <span className="font-display font-bold text-neon-green text-sm">{comment.author}</span>
              <span className="text-gray-500 text-xs font-mono">{comment.date}</span>
            </div>
            <p className="text-gray-300 font-light text-sm leading-relaxed">{comment.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentsSection;