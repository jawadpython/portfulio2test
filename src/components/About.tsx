import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <section id="about" className="min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-white to-slate-100 pt-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary-200/20 to-primary-300/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-electric-200/20 to-electric-300/20 rounded-full blur-3xl"></div>
          </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Content */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="space-y-6">
                <motion.h1 
                  className="text-6xl lg:text-7xl font-bold text-slate-900 leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {t('hero.greeting')}{' '}
                  <span className="bg-gradient-to-r from-primary-800 to-electric-600 bg-clip-text text-transparent">
                    {t('hero.name')}
                  </span>
                </motion.h1>
                
                <motion.p 
                  className="text-2xl lg:text-3xl text-slate-600 font-medium"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  {t('hero.title')}
                </motion.p>

                <motion.p 
                  className="text-lg text-slate-600 leading-relaxed max-w-2xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  {t('hero.description')}
                </motion.p>
              </div>

                  {/* Stats */}
                  <motion.div 
                    className="grid grid-cols-3 gap-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  >
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-800">7+</div>
                      <div className="text-sm text-slate-600">{t('about.experience')}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-800">80+</div>
                      <div className="text-sm text-slate-600">{t('about.projects')}</div>
                </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-800">100%</div>
                      <div className="text-sm text-slate-600">{t('about.satisfaction')}</div>
                </div>
                  </motion.div>

            </motion.div>

            {/* Right side - Professional Photo */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative">
                {/* Glassmorphism background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm rounded-3xl border border-white/20 shadow-2xl"></div>
                
                {/* Professional photo container */}
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
                  <div className="aspect-square max-w-md mx-auto relative">
                    {/* Professional photo placeholder with gradient */}
                    <div className="w-full h-full bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 rounded-2xl flex items-center justify-center shadow-inner">
                      <div className="text-8xl text-slate-500">👨‍💻</div>
              </div>

                    {/* Floating elements */}
                    <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-2xl">⚡</span>
                </div>
                    <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-electric-400 to-electric-600 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-2xl">🚀</span>
                </div>
              </div>

                  {/* Professional info */}
                  <div className="text-center mt-6">
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">{t('hero.name')}</h3>
                    <p className="text-slate-600 font-medium">Développeur Full Stack</p>
                    <p className="text-sm text-slate-500 mt-1">{t('about.specialization')}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
