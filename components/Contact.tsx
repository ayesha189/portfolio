
import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);
    try {
      const response = await fetch('http://localhost:5000/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.success) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send message.');
      }
    } catch (error) {
      setStatus('Error sending message.');
    }
  };

  return (
    <div className="space-y-12">
      <h2 className="text-5xl font-extrabold tracking-tighter dark:text-white">Get in Touch</h2>

      <div className="grid lg:grid-cols-2 gap-16">
        <div className="space-y-8">
          <p className="text-xl text-gray-500 dark:text-gray-400 leading-relaxed">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="space-y-4">
            <a
              href="mailto:ayesharauf.189@gmail.com"
              className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-[#1e293b] hover:border-blue-200 dark:hover:border-blue-900 transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <Mail size={24} />
              </div>
              <div>
                <div className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">Email Me</div>
                <div className="font-bold dark:text-white">ayesharauf.189@gmail.com</div>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/ayesha-rauf-44432336b/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-[#1e293b] hover:border-blue-200 dark:hover:border-blue-900 transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <Linkedin size={24} />
              </div>
              <div>
                <div className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">LinkedIn</div>
                <div className="font-bold dark:text-white">Ayesha Rauf</div>
              </div>
            </a>

            <a
              href="https://github.com/ayesha189"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-[#1e293b] hover:border-blue-200 dark:hover:border-blue-900 transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <Github size={24} />
              </div>
              <div>
                <div className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">GitHub</div>
                <div className="font-bold dark:text-white">ayesha189</div>
              </div>
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white dark:bg-[#1e293b] border border-gray-100 dark:border-gray-800 rounded-2xl p-8 card-shadow space-y-4">
          {status && (
            <div className="mb-4 text-center text-sm font-semibold text-blue-600 dark:text-blue-400">
              {status}
            </div>
          )}
          <div>
            <label className="block text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-2">Name</label>
            <input
              type="text"
              required
              className="w-full bg-gray-50 dark:bg-[#0f172a] border border-gray-100 dark:border-gray-800 rounded-lg p-3 outline-none focus:border-blue-300 dark:focus:border-blue-500 transition-colors dark:text-white"
              placeholder="Your Name"
              value={formData.name}
              onChange={e => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-2">Email</label>
            <input
              type="email"
              required
              className="w-full bg-gray-50 dark:bg-[#0f172a] border border-gray-100 dark:border-gray-800 rounded-lg p-3 outline-none focus:border-blue-300 dark:focus:border-blue-500 transition-colors dark:text-white"
              placeholder="Your Email"
              value={formData.email}
              onChange={e => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-2">Message</label>
            <textarea
              required
              rows={4}
              className="w-full bg-gray-50 dark:bg-[#0f172a] border border-gray-100 dark:border-gray-800 rounded-lg p-3 outline-none focus:border-blue-300 dark:focus:border-blue-500 transition-colors resize-none dark:text-white"
              placeholder="Your Message"
              value={formData.message}
              onChange={e => setFormData({ ...formData, message: e.target.value })}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20"
          >
            <Send size={18} />
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
