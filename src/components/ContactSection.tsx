import { useState, FormEvent } from 'react';
import { Send } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

export default function ContactSection() {
  const { contact } = siteContent;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    details: '',
    timeline: '',
    budget: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`New Project Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Company: ${formData.company || 'N/A'}\n` +
      `Timeline: ${formData.timeline}\n` +
      `Budget: ${formData.budget}\n\n` +
      `Project Details:\n${formData.details}`
    );
    
    // Open email client
    window.location.href = `mailto:kamaleshkabirdas@gmail.com?subject=${subject}&body=${body}`;
    
    // Show confirmation
    alert('Thank you for your inquiry! I\'ll get back to you within 48 hours.');
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-gradient-to-br from-primary to-secondary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-sky-400 rounded-full blur-3xl" />
      </div>

      <div className="max-w-2xl mx-auto px-4 md:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {contact.heading}
          </h2>
          <p className="text-xl text-slate-300">
            {contact.subtext}
          </p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 md:p-10 shadow-2xl">
          <div className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-primary mb-2">
                {contact.form.fields.name.label}
                {contact.form.fields.name.required && <span className="text-accent ml-1">*</span>}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required={contact.form.fields.name.required}
                value={formData.name}
                onChange={handleChange}
                placeholder={contact.form.fields.name.placeholder}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-primary mb-2">
                {contact.form.fields.email.label}
                {contact.form.fields.email.required && <span className="text-accent ml-1">*</span>}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required={contact.form.fields.email.required}
                value={formData.email}
                onChange={handleChange}
                placeholder={contact.form.fields.email.placeholder}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
              />
            </div>

            {/* Company */}
            <div>
              <label htmlFor="company" className="block text-sm font-semibold text-primary mb-2">
                {contact.form.fields.company.label}
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder={contact.form.fields.company.placeholder}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
              />
            </div>

            {/* Project Details */}
            <div>
              <label htmlFor="details" className="block text-sm font-semibold text-primary mb-2">
                {contact.form.fields.details.label}
                {contact.form.fields.details.required && <span className="text-accent ml-1">*</span>}
              </label>
              <textarea
                id="details"
                name="details"
                required={contact.form.fields.details.required}
                value={formData.details}
                onChange={handleChange}
                placeholder={contact.form.fields.details.placeholder}
                rows={5}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-none"
              />
            </div>

            {/* Timeline & Budget Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {/* Timeline */}
              <div>
                <label htmlFor="timeline" className="block text-sm font-semibold text-primary mb-2">
                  {contact.form.fields.timeline.label}
                  {contact.form.fields.timeline.required && <span className="text-accent ml-1">*</span>}
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  required={contact.form.fields.timeline.required}
                  value={formData.timeline}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all bg-white"
                >
                  <option value="">Select...</option>
                  {contact.form.fields.timeline.options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {/* Budget */}
              <div>
                <label htmlFor="budget" className="block text-sm font-semibold text-primary mb-2">
                  {contact.form.fields.budget.label}
                  {contact.form.fields.budget.required && <span className="text-accent ml-1">*</span>}
                </label>
                <select
                  id="budget"
                  name="budget"
                  required={contact.form.fields.budget.required}
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all bg-white"
                >
                  <option value="">Select...</option>
                  {contact.form.fields.budget.options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-accent text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-accent/90 hover:shadow-xl transition-all flex items-center justify-center gap-2 mt-8"
            >
              {contact.form.submitText}
              <Send size={20} />
            </button>
          </div>
        </form>

        {/* Additional Contact Info */}
        <div className="mt-8 text-center">
          <p className="text-slate-300 text-sm">
            Prefer email? Reach out directly at{' '}
            <a href="mailto:kamaleshkabirdas@gmail.com" className="text-white font-semibold hover:text-accent transition-colors">
              kamaleshkabirdas@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
