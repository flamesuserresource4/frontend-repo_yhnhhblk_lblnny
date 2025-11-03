import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Shield } from 'lucide-react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-pink-100 flex items-center justify-center">
                <Mail className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Contact & Support</h3>
            </div>
            {!submitted ? (
              <form onSubmit={onSubmit} className="mt-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    className="w-full rounded-md border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={onChange}
                    className="w-full rounded-md border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
                    placeholder="you@example.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    rows={4}
                    className="w-full rounded-md border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
                    placeholder="How can we help?"
                    required
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-xs text-slate-500">We typically respond within 1–2 business days.</div>
                  <button type="submit" className="px-5 py-2.5 rounded-md text-white bg-gradient-to-r from-pink-500 to-blue-500 shadow hover:shadow-lg transition-shadow">Send</button>
                </div>
              </form>
            ) : (
              <div className="mt-6 text-slate-700">
                Thank you for your message. This demo does not send emails, but your feedback is appreciated.
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="rounded-2xl border border-pink-200 bg-gradient-to-br from-white to-pink-50 p-6 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Important Disclaimer</h3>
            </div>
            <p className="mt-3 text-slate-700">
              This tool is designed for educational and research purposes only. It is not intended to provide
              medical advice, diagnosis, or treatment. Always consult qualified healthcare professionals for
              medical concerns, screening, or treatment decisions.
            </p>
            <ul className="mt-4 list-disc list-inside text-slate-700 space-y-1">
              <li>Predictions are estimates based on simplified modeling.</li>
              <li>No personal data is stored by this demo.</li>
              <li>Results should not guide clinical actions.</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
