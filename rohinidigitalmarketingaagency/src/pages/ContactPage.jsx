import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

const handleSubmit = async (e) => {
    e.preventDefault(); // 1. Stop the page refresh

    try {
      // 2. Send the 'form' state to your Node.js backend
      const response = await fetch('http://localhost:5000/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form), // Your state is named 'form'
      });

      // 3. If the backend says "Success (201)", show the beautiful success UI
      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("Backend received it, but there was an error saving to the database.");
      }
      
    } catch (error) {
      // 4. If the backend is turned off or unreachable
      console.error("Connection failed:", error);
      alert("Could not connect to the backend. Is your Node server running?");
    }
  };

  return (
    <div className="pt-20 bg-pageBg min-h-screen">
      {/* Header */}
      <div className="py-16 md:py-20 text-center" style={{ background: '#f0f7ff' }}>
        <div className="max-w-3xl mx-auto px-6">
          <div className="section-label mx-auto mb-4">GET IN TOUCH</div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-textPrimary mb-4">
            Let's <span className="gradient-text">Grow Together</span>
          </h1>
          <p className="text-textSecondary text-lg leading-relaxed">
            Book a growth audit. We'll review your current marketing and give you a clear, no-obligation roadmap.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 py-20">
        <div className="grid lg:grid-cols-5 gap-12">

          {/* Contact Info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div>
              <h2 className="text-2xl font-bold text-textPrimary mb-2">Contact Details</h2>
              <p className="text-textSecondary text-sm leading-relaxed">
                Reach out via the form or contact us directly. We typically respond within 2 business hours.
              </p>
            </div>

            {[
              { Icon: Mail,    label: 'Email',    value: 'rohinidigitalmarketingaagency@gmail.com' },
              { Icon: Phone,   label: 'Phone',    value: '+91 98765 43210' },
              { Icon: MapPin,  label: 'Location', value: 'Lucknow, India' },
            ].map(({ Icon, label, value }, i) => (
              <div key={i} className="corp-card flex items-center gap-4 p-5">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(14,165,233,0.08)', border: '1px solid rgba(14,165,233,0.15)' }}>
                  <Icon className="w-5 h-5 text-accent" strokeWidth={1.75} />
                </div>
                <div>
                  <div className="text-xs font-bold text-textMuted uppercase tracking-wider mb-0.5">{label}</div>
                  <div className="font-semibold text-textPrimary text-sm">{value}</div>
                </div>
              </div>
            ))}

            <div className="corp-card p-5">
              <div className="text-xs font-bold text-textMuted uppercase tracking-wider mb-3">What's Included</div>
              {['Full marketing audit', 'Competitor gap analysis', 'Custom growth roadmap', 'No obligation, no pressure'].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-textSecondary mb-2">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="corp-card p-12 text-center h-full flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                  style={{ background: 'rgba(14,165,233,0.1)', border: '1px solid rgba(14,165,233,0.2)' }}>
                  <CheckCircle className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-textPrimary mb-2">Message Received!</h3>
                <p className="text-textSecondary text-sm leading-relaxed max-w-sm">
                  Thank you for reaching out. A member of our team will contact you within 2 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="corp-card p-8 space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  {[
                    { name: 'name',  label: 'Full Name',    type: 'text',  placeholder: 'Your name' },
                    { name: 'email', label: 'Email Address', type: 'email', placeholder: 'you@company.com' },
                  ].map((f) => (
                    <div key={f.name}>
                      <label className="block text-xs font-bold text-textMuted uppercase tracking-wider mb-1.5">{f.label}</label>
                      <input type={f.type} name={f.name} value={form[f.name]} onChange={handleChange} required
                        placeholder={f.placeholder}
                        className="w-full px-4 py-3 rounded-xl text-sm text-textPrimary border border-borderClr bg-sectionAlt focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="block text-xs font-bold text-textMuted uppercase tracking-wider mb-1.5">Phone Number</label>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl text-sm text-textPrimary border border-borderClr bg-sectionAlt focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                  />
                </div>



                <div>
                  <label className="block text-xs font-bold text-textMuted uppercase tracking-wider mb-1.5">Tell Us About Your Goals</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={4} required
                    placeholder="Describe your business, current challenges, and what you're hoping to achieve..."
                    className="w-full px-4 py-3 rounded-xl text-sm text-textPrimary border border-borderClr bg-sectionAlt focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all resize-none"
                  />
                </div>

                <button type="submit"
                  className="btn-shine w-full py-4 rounded-xl text-white font-bold flex items-center justify-center gap-2 transition-all duration-300 hover:-translate-y-0.5"
                  style={{ background: 'linear-gradient(135deg, #0ea5e9, #0284c7)', boxShadow: '0 4px 18px rgba(14,165,233,0.35)' }}>
                  <Send className="w-4 h-4" /> Book My Free Audit
                </button>

                <p className="text-center text-xs text-textMuted">
                  No spam, no pressure. We respect your privacy.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
