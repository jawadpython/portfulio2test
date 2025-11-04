import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string>('');

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.name.trim()) {
      newErrors.name = t('contact.name_required');
    }

    if (!formData.phone.trim()) {
      newErrors.phone = t('contact.phone_required');
    } else {
      // Remove all non-digit characters for validation
      const phoneDigits = formData.phone.replace(/\D/g, '');
      if (phoneDigits.length < 8) {
        newErrors.phone = t('contact.phone_invalid');
      }
    }

    if (!formData.subject.trim()) {
      newErrors.subject = t('contact.subject_required');
    }

    if (!formData.message.trim()) {
      newErrors.message = t('contact.message_required');
    } else if (formData.message.trim().length < 10) {
      newErrors.message = t('contact.message_min_length');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError('');
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/xyzbqagv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      console.log('Formspree response:', response);
      console.log('Response status:', response.status);
      console.log('Response ok:', response.ok);

      const data = await response.json();
      console.log('Response data:', data);

      if (response.ok) {
        setIsSubmitted(true);
        // Clear form immediately after success
        setFormData({ name: '', phone: '', subject: '', message: '' });
        setErrors({});
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        // Handle Formspree errors
        const errorMessage = data.error || data.message || 'Failed to send message. Please try again.';
        setSubmitError(errorMessage);
        console.error('Formspree error:', data);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-br from-primary-200/20 to-primary-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-electric-200/20 to-electric-300/20 rounded-full blur-3xl"></div>
        </div>

      <div className="container mx-auto px-6 relative z-10">
            <motion.div 
              className="text-center mb-20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8">
                {t('contact.title')}
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                {t('contact.subtitle')}
              </p>
            </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Form */}
          <motion.div 
            className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-12 border border-white/20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {isSubmitted ? (
              <motion.div 
                className="text-center py-12"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2 flex items-center justify-center gap-2">
                  <span>✅</span>
                  {t('contact.success_title') || 'Message sent successfully!'}
                </h3>
                <p className="text-slate-600">{t('contact.success_message') || 'Thank you for your message. I will respond as soon as possible.'}</p>
              </motion.div>
            ) : (
              <>
                <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">{t('contact.form_title')}</h3>
            
            {submitError && (
              <motion.div
                className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-red-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-red-700 text-sm font-medium">{submitError}</p>
                </div>
              </motion.div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                        {t('contact.name')} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-800 focus:border-transparent transition-all duration-300 ${
                          errors.name ? 'border-red-300 bg-red-50' : 'border-slate-300'
                        }`}
                    placeholder={t('contact.name')}
                  />
                      {errors.name && (
                        <motion.p 
                          className="text-red-500 text-sm mt-1"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {errors.name}
                        </motion.p>
                      )}
                </div>
                <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                        {t('contact.phone')} *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-800 focus:border-transparent transition-all duration-300 ${
                          errors.phone ? 'border-red-300 bg-red-50' : 'border-slate-300'
                        }`}
                    placeholder={t('contact.phone')}
                  />
                      {errors.phone && (
                        <motion.p 
                          className="text-red-500 text-sm mt-1"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {errors.phone}
                        </motion.p>
                      )}
                </div>
              </div>

              <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 mb-2">
                      {t('contact.subject')} *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-800 focus:border-transparent transition-all duration-300 ${
                        errors.subject ? 'border-red-300 bg-red-50' : 'border-slate-300'
                      }`}
                  placeholder={t('contact.subject')}
                />
                    {errors.subject && (
                      <motion.p 
                        className="text-red-500 text-sm mt-1"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {errors.subject}
                      </motion.p>
                    )}
              </div>

              <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                      {t('contact.message')} * <span className="text-slate-500 text-xs">({t('contact.message_help')})</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-800 focus:border-transparent transition-all duration-300 resize-none ${
                        errors.message ? 'border-red-300 bg-red-50' : 'border-slate-300'
                      }`}
                  placeholder={t('contact.message')}
                />
                    <div className="flex justify-between items-center mt-1">
                      {errors.message && (
                        <motion.p 
                          className="text-red-500 text-sm"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {errors.message}
                        </motion.p>
                      )}
                      <span className="text-xs text-slate-500 ms-auto">
                        {formData.message.length}/500
                      </span>
                    </div>
              </div>

                  <motion.button
                type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 px-8 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1 ${
                      isSubmitting 
                        ? 'bg-slate-400 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-primary-800 to-primary-900 hover:shadow-xl'
                    }`}
                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        {t('contact.sending')}
                      </div>
                    ) : (
                      t('contact.send')
                    )}
                  </motion.button>
            </form>
              </>
            )}
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div 
          className="text-center mt-20 pt-8 border-t border-slate-200/50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-600">
            {t('footer.copyright')}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
