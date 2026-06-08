import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Phone, Instagram, Mail, CheckCircle2, AlertCircle, RefreshCw } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function Contact() {
  const { addContactMessage, t, language } = useApp();
  const [formData, setFormData] = useState({
    name: '',
    contactHandle: '', // Telegram or Phone
    serviceType: 'landing',
    company: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const servicesList = [
    { id: 'landing', name: t('contactServiceLanding') },
    { id: 'business', name: t('contactServiceCorporate') },
    { id: 'miniapp', name: t('contactServiceMiniApp') },
    { id: 'erp', name: t('contactServiceErp') },
    { id: 'pos', name: t('contactServicePos') },
    { id: 'bot', name: t('contactServiceBot') },
    { id: 'uiux', name: t('contactServiceUiux') }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Quick validate
    if (!formData.name.trim() || !formData.contactHandle.trim() || !formData.message.trim()) {
      setError(t('contactValidationError'));
      return;
    }

    setLoading(true);
    
    // Simulate premium backend delay
    setTimeout(() => {
      // Save contact message
      addContactMessage({
        name: formData.name,
        contactHandle: formData.contactHandle,
        serviceType: formData.serviceType,
        company: formData.company,
        message: formData.message
      });

      setLoading(false);
      setSuccess(true);
      // Reset form
      setFormData({
        name: '',
        contactHandle: '',
        serviceType: 'landing',
        company: '',
        message: ''
      });
    }, 1500);
  };

  const contactChannels = [
    {
      name: t('contactChannelTelegram'),
      detail: '@aliali18122002',
      link: 'https://t.me/aliali18122002',
      icon: Send,
      color: 'text-sky-400',
      bgGlow: 'bg-sky-500/10'
    },
    {
      name: t('contactChannelWhatsApp'),
      detail: '+992 90 000 0000',
      link: 'https://wa.me/992900000000',
      icon: Phone,
      color: 'text-emerald-400',
      bgGlow: 'bg-emerald-500/10'
    },
    {
      name: t('contactChannelInstagram'),
      detail: '@rahmatullo.dev',
      link: 'https://instagram.com',
      icon: Instagram,
      color: 'text-pink-400',
      bgGlow: 'bg-pink-500/10'
    },
    {
      name: t('contactChannelEmail'),
      detail: 'aliali18122002@gmail.com',
      link: 'mailto:aliali18122002@gmail.com',
      icon: Mail,
      color: 'text-purple-400',
      bgGlow: 'bg-purple-500/10'
    }
  ];

  return (
    <section
      id="contact"
      className="py-24 px-6 md:px-12 bg-[#050505] relative overflow-hidden"
    >
      {/* Background decoration flares */}
      <div className="absolute left-1/3 top-1/4 w-[500px] h-[500px] bg-sky-500/5 blur-[130px] pointer-events-none" />
      <div className="absolute right-1/3 bottom-1/4 w-[500px] h-[500px] bg-purple-600/5 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-3 mb-16 text-left">
          <span className="text-xs font-mono tracking-[0.25em] text-purple-400 uppercase">
            {t('contactSectionTag')}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white font-sans">
            {t('contactTitleSuffix')}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-sky-450 rounded-full mt-2" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct contact channels list */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left">
            <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
              {t('contactInfoSubtitle')}
            </h3>
            
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              {t('contactInfoDesc')}
            </p>

            <div className="flex flex-col gap-4 mt-4">
              {contactChannels.map((channel, idx) => (
                <a
                  key={idx}
                  href={channel.link}
                  target="_blank"
                  rel="noreferrer"
                  referrerPolicy="no-referrer"
                  className="glass-card p-5 rounded-2xl flex items-center justify-between group interactive-card glow-blue"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 ${channel.color}`}>
                      <channel.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-mono uppercase tracking-wider">{channel.name}</p>
                      <p className="text-sm font-bold text-white mt-0.5">{channel.detail}</p>
                    </div>
                  </div>
                  
                  {/* Small go action arrow button */}
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/15 transition-all text-gray-400 group-hover:text-white">
                    →
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-2xl bg-indigo-500/5 border border-indigo-500/10 text-xs text-gray-400 leading-relaxed font-mono">
              {t('contactResponseTime')}
            </div>
          </div>

          {/* Right Column: Premium Interactive inquiry Form */}
          <div className="lg:col-span-7 glass-card p-8 rounded-3xl relative overflow-hidden text-left glow-purple">
            <h3 className="text-lg md:text-xl font-bold text-white mb-6 tracking-tight">
              {t('contactFormTitle')}
            </h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              
              {/* Form Input fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name-input" className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                    {t('contactFormName')} *
                  </label>
                  <input
                    id="name-input"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder={language === 'TJK' ? 'Масалан: Алишери Раҳмон' : language === 'RUS' ? 'Например: Алишер Рахмон' : 'e.g. John Doe'}
                    className="w-full bg-white/5 border border-white/10 hover:border-white/20 focus:border-purple-500/50 rounded-xl px-4 py-3.5 text-xs text-white placeholder-gray-600 focus:outline-none transition-all"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-handle" className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                    {t('contactFormContact')} *
                  </label>
                  <input
                    id="contact-handle"
                    type="text"
                    name="contactHandle"
                    value={formData.contactHandle}
                    onChange={handleInputChange}
                    placeholder={language === 'TJK' ? 'Масалан: @username ё +992...' : language === 'RUS' ? 'Например: @username или +992...' : 'e.g. @username or +1...'}
                    className="w-full bg-white/5 border border-white/10 hover:border-white/20 focus:border-purple-500/50 rounded-xl px-4 py-3.5 text-xs text-white placeholder-gray-600 focus:outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="service-type" className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                    {t('contactFormService')}
                  </label>
                  <select
                    id="service-type"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleInputChange}
                    className="w-full bg-[#0a0f1d] border border-white/10 hover:border-white/20 focus:border-purple-500/50 rounded-xl px-4 py-3.5 text-xs text-white focus:outline-none transition-all cursor-pointer"
                  >
                    {servicesList.map((service) => (
                      <option key={service.id} value={service.id} className="bg-[#030712] text-gray-300">
                        {service.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="company-name" className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                    {t('contactFormCompany')}
                  </label>
                  <input
                    id="company-name"
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder={language === 'TJK' ? 'Масалан: Сохтмон Девелопмент' : language === 'RUS' ? 'Например: Сохтмон Девелопмент' : 'e.g. ACME Corp'}
                    className="w-full bg-white/5 border border-white/10 hover:border-white/20 focus:border-purple-500/50 rounded-xl px-4 py-3.5 text-xs text-white placeholder-gray-600 focus:outline-none transition-all"
                  />
                </div>
              </div>

              {/* Message field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message-desc" className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                  {t('contactFormMessage')} *
                </label>
                <textarea
                  id="message-desc"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder={language === 'TJK' ? 'Масалан: Ман мехоҳам як Telegram Mini App созам...' : language === 'RUS' ? 'Например: Я хочу разработать Telegram Mini App со встроенным магазином...' : 'e.g. I want to build a Telegram Mini App with secure checkout...'}
                  className="w-full bg-white/5 border border-white/10 hover:border-white/20 focus:border-purple-500/50 rounded-xl px-4 py-3.5 text-xs text-white placeholder-gray-600 focus:outline-none transition-all resize-none"
                />
              </div>

              {/* Error warning message display */}
              <AnimatePresence>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-xs text-rose-400 flex items-center gap-2.5"
                  >
                    <AlertCircle className="w-4.5 h-4.5 shrink-0" />
                    <span>{error}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Success interactive Confirmation modal popup inside page */}
              <AnimatePresence>
                {success && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300 flex flex-col gap-3 relative overflow-hidden"
                  >
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                      <div>
                        <p className="font-bold">{t('contactFormSuccess')}</p>
                      </div>
                    </div>
                    {/* Inline reset action button */}
                    <button
                      type="button"
                      onClick={() => setSuccess(false)}
                      className="text-[10px] font-mono text-emerald-400 hover:text-emerald-250 self-start border border-emerald-500/30 px-3 py-1.5 rounded-lg bg-emerald-500/5 mt-1 cursor-pointer"
                    >
                      {t('contactFormSendAnother')}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit Button */}
              {!success && (
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full mt-2 py-4 rounded-xl text-xs font-bold uppercase tracking-widest text-[#030712] bg-gradient-to-r from-sky-450 via-purple-450 to-teal-450 hover:shadow-[0_0_20px_rgba(139,92,246,0.35)] active:scale-95 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin text-black" />
                      {t('contactFormSending').toUpperCase()}
                    </>
                  ) : (
                    <>
                      {t('contactFormSubmit').toUpperCase()}
                      <Send className="w-3.5 h-3.5 text-black" />
                    </>
                  )}
                </button>
              )}

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
