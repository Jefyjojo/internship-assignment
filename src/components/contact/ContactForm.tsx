import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { CONTACT_CONTENT } from '../../data/content';
import { CheckCircle2, AlertCircle, MapPin, Video } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    reason: '',
    sessionFormat: 'In-person',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Please share a brief message';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate clean submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  return (
    <div className="bg-ivory border border-border-subtle rounded-md p-6 sm:p-8 md:p-10 shadow-xs">
      
      {isSubmitted ? (
        <div className="py-12 px-4 text-center space-y-5 animate-fadeIn">
          <div className="w-14 h-14 rounded-full bg-sage/15 text-sage mx-auto flex items-center justify-center">
            <CheckCircle2 size={32} />
          </div>
          <h3 className="text-charcoal font-serif text-2xl sm:text-3xl font-normal">
            Thank you for reaching out
          </h3>
          <p className="text-warmgray max-w-md mx-auto text-base leading-relaxed">
            Your inquiry has been received. In this demonstration mode, form entries are simulated. Dr. Reynolds’ practice typically responds within 1–2 business days.
          </p>
          <div className="pt-4">
            <Button
              variant="outline"
              size="md"
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  firstName: '',
                  lastName: '',
                  email: '',
                  phone: '',
                  reason: '',
                  sessionFormat: 'In-person',
                  message: ''
                });
              }}
            >
              Send Another Inquiry
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* First Name */}
            <div>
              <label htmlFor="firstName" className="block text-xs font-medium uppercase tracking-wider text-charcoal mb-2">
                First Name <span className="text-sage">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={`w-full px-4 py-2.5 rounded-subtle border bg-white/70 text-charcoal text-[15px] transition-colors focus:bg-white focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage ${
                  errors.firstName ? 'border-red-400 bg-red-50/30' : 'border-border-subtle'
                }`}
                placeholder="Maya"
              />
              {errors.firstName && (
                <p className="text-xs text-red-600 mt-1.5">{errors.firstName}</p>
              )}
            </div>

            {/* Last Name */}
            <div>
              <label htmlFor="lastName" className="block text-xs font-medium uppercase tracking-wider text-charcoal mb-2">
                Last Name <span className="text-sage">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={`w-full px-4 py-2.5 rounded-subtle border bg-white/70 text-charcoal text-[15px] transition-colors focus:bg-white focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage ${
                  errors.lastName ? 'border-red-400 bg-red-50/30' : 'border-border-subtle'
                }`}
                placeholder="Reynolds"
              />
              {errors.lastName && (
                <p className="text-xs text-red-600 mt-1.5">{errors.lastName}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-xs font-medium uppercase tracking-wider text-charcoal mb-2">
                Email Address <span className="text-sage">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2.5 rounded-subtle border bg-white/70 text-charcoal text-[15px] transition-colors focus:bg-white focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage ${
                  errors.email ? 'border-red-400 bg-red-50/30' : 'border-border-subtle'
                }`}
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <p className="text-xs text-red-600 mt-1.5">{errors.email}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-xs font-medium uppercase tracking-wider text-charcoal mb-2">
                Phone Number <span className="text-warmgray font-normal lowercase">(optional)</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-subtle border border-border-subtle bg-white/70 text-charcoal text-[15px] transition-colors focus:bg-white focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage"
                placeholder="(310) 000-0000"
              />
            </div>
          </div>

          {/* What brings you to therapy */}
          <div>
            <label htmlFor="reason" className="block text-xs font-medium uppercase tracking-wider text-charcoal mb-2">
              What brings you to therapy?
            </label>
            <input
              type="text"
              id="reason"
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-subtle border border-border-subtle bg-white/70 text-charcoal text-[15px] transition-colors focus:bg-white focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage"
              placeholder="e.g., Anxiety, Burnout, Life transition, Trauma"
            />
          </div>

          {/* Preferred Session Format */}
          <div>
            <span className="block text-xs font-medium uppercase tracking-wider text-charcoal mb-2.5">
              Preferred Session Format
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <label
                className={`flex items-center space-x-3 p-3.5 rounded-subtle border cursor-pointer transition-colors ${
                  formData.sessionFormat === 'In-person'
                    ? 'border-sage bg-beige-soft/60'
                    : 'border-border-subtle bg-white/50 hover:bg-white'
                }`}
              >
                <input
                  type="radio"
                  name="sessionFormat"
                  value="In-person"
                  checked={formData.sessionFormat === 'In-person'}
                  onChange={handleChange}
                  className="text-sage focus:ring-sage"
                />
                <div className="flex items-center space-x-2 text-sm text-charcoal font-medium">
                  <MapPin size={15} className="text-sage" />
                  <span>In-person (Santa Monica)</span>
                </div>
              </label>

              <label
                className={`flex items-center space-x-3 p-3.5 rounded-subtle border cursor-pointer transition-colors ${
                  formData.sessionFormat === 'Telehealth'
                    ? 'border-sage bg-beige-soft/60'
                    : 'border-border-subtle bg-white/50 hover:bg-white'
                }`}
              >
                <input
                  type="radio"
                  name="sessionFormat"
                  value="Telehealth"
                  checked={formData.sessionFormat === 'Telehealth'}
                  onChange={handleChange}
                  className="text-sage focus:ring-sage"
                />
                <div className="flex items-center space-x-2 text-sm text-charcoal font-medium">
                  <Video size={15} className="text-sage" />
                  <span>Telehealth (California)</span>
                </div>
              </label>
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-xs font-medium uppercase tracking-wider text-charcoal mb-2">
              Message <span className="text-sage">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-subtle border bg-white/70 text-charcoal text-[15px] transition-colors focus:bg-white focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage resize-y ${
                errors.message ? 'border-red-400 bg-red-50/30' : 'border-border-subtle'
              }`}
              placeholder="Please share any helpful context or scheduling availability..."
            />
            {errors.message && (
              <p className="text-xs text-red-600 mt-1.5">{errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div>
            <Button
              variant="primary"
              size="lg"
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto min-w-[180px]"
            >
              {isSubmitting ? 'Sending...' : 'Send Inquiry'}
            </Button>
          </div>

          {/* Emergency Disclaimer */}
          <div className="pt-4 border-t border-border-subtle/80 flex items-start space-x-2 text-xs text-warmgray">
            <AlertCircle size={15} className="text-warmgray/80 shrink-0 mt-0.5" />
            <p>
              {CONTACT_CONTENT.emergencyNotice}
            </p>
          </div>

        </form>
      )}

    </div>
  );
};
