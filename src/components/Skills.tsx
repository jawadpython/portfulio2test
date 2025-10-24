import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Skills: React.FC = () => {
  const { t } = useTranslation();
  
  const skills = [
    { name: 'JavaScript', emoji: '🟨', color: 'text-yellow-500', bgColor: 'bg-yellow-50', borderColor: 'border-yellow-200', level: 95 },
    { name: 'TypeScript', emoji: '🔷', color: 'text-blue-500', bgColor: 'bg-blue-50', borderColor: 'border-blue-200', level: 90 },
    { name: 'React', emoji: '⚛️', color: 'text-cyan-500', bgColor: 'bg-cyan-50', borderColor: 'border-cyan-200', level: 95 },
    { name: 'Next.js', emoji: '▲', color: 'text-gray-800', bgColor: 'bg-gray-50', borderColor: 'border-gray-200', level: 85 },
    { name: 'Node.js', emoji: '🟢', color: 'text-green-500', bgColor: 'bg-green-50', borderColor: 'border-green-200', level: 90 },
    { name: 'Python', emoji: '🐍', color: 'text-blue-600', bgColor: 'bg-blue-50', borderColor: 'border-blue-200', level: 85 },
    { name: 'HTML5', emoji: '🌐', color: 'text-orange-500', bgColor: 'bg-orange-50', borderColor: 'border-orange-200', level: 95 },
    { name: 'CSS3', emoji: '🎨', color: 'text-blue-500', bgColor: 'bg-blue-50', borderColor: 'border-blue-200', level: 95 },
    { name: 'Tailwind CSS', emoji: '💨', color: 'text-cyan-400', bgColor: 'bg-cyan-50', borderColor: 'border-cyan-200', level: 90 },
    { name: 'Git', emoji: '📝', color: 'text-orange-600', bgColor: 'bg-orange-50', borderColor: 'border-orange-200', level: 85 },
    { name: 'Docker', emoji: '🐳', color: 'text-blue-600', bgColor: 'bg-blue-50', borderColor: 'border-blue-200', level: 80 },
    { name: 'AWS', emoji: '☁️', color: 'text-orange-500', bgColor: 'bg-orange-50', borderColor: 'border-orange-200', level: 75 },
    { name: 'MongoDB', emoji: '🍃', color: 'text-green-600', bgColor: 'bg-green-50', borderColor: 'border-green-200', level: 85 },
    { name: 'PostgreSQL', emoji: '🐘', color: 'text-blue-700', bgColor: 'bg-blue-50', borderColor: 'border-blue-200', level: 80 },
    { name: 'Mobile Dev', emoji: '📱', color: 'text-purple-500', bgColor: 'bg-purple-50', borderColor: 'border-purple-200', level: 70 },
    { name: 'API Design', emoji: '🔌', color: 'text-indigo-500', bgColor: 'bg-indigo-50', borderColor: 'border-indigo-200', level: 90 },
  ];

  const stackTechnologies = [
    { name: 'Frontend', technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'], level: 95 },
    { name: 'Backend', technologies: ['Node.js', 'Python', 'Express', 'FastAPI'], level: 90 },
    { name: 'Database', technologies: ['MongoDB', 'PostgreSQL', 'Redis'], level: 85 },
    { name: 'DevOps', technologies: ['Docker', 'AWS', 'Git', 'CI/CD'], level: 80 },
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-white via-slate-50 to-slate-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-primary-200/30 to-primary-300/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-br from-electric-200/30 to-electric-300/30 rounded-full blur-3xl"></div>
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
                {t('skills.title')}
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                {t('skills.subtitle')}
              </p>
            </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className={`group ${skill.bgColor} backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border ${skill.borderColor} hover:border-opacity-60`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-center">
                <div className={`text-4xl mb-3 group-hover:scale-110 transition-transform duration-300 ${skill.color}`}>
                  {skill.emoji}
                </div>
                <h3 className="text-sm font-semibold text-slate-700 group-hover:text-primary-800 transition-colors duration-300 mb-2">
                  {skill.name}
                </h3>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <motion.div 
                    className={`h-2 rounded-full ${skill.color.replace('text-', 'bg-')}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                    viewport={{ once: true }}
                  />
                </div>
                <span className="text-xs text-slate-500 mt-1">{skill.level}%</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stack Technique Section */}
        <motion.div 
          className="mt-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
              <div className="text-center mb-16">
                <h3 className="text-4xl font-bold text-slate-900 mb-4">
                  {t('skills.stack_title')}
            </h3>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                  {t('skills.stack_subtitle')}
                </p>
              </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {stackTechnologies.map((stack, index) => (
              <motion.div
                key={stack.name}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="text-center mb-4">
                  <h4 className="text-xl font-bold text-slate-800 mb-2">{stack.name}</h4>
                  <div className="w-full bg-slate-200 rounded-full h-3 mb-3">
                    <motion.div 
                      className="h-3 rounded-full bg-gradient-to-r from-primary-600 to-electric-600"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${stack.level}%` }}
                      transition={{ duration: 1.5, delay: index * 0.2 + 0.5 }}
                      viewport={{ once: true }}
                    />
              </div>
                  <span className="text-sm text-slate-600 font-semibold">{stack.level}%</span>
              </div>
                <div className="flex flex-wrap gap-2 justify-center">
                  {stack.technologies.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
            </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 max-w-5xl mx-auto shadow-2xl border border-white/20">
                <h3 className="text-3xl font-bold text-slate-900 mb-8">
                  {t('skills.approach_title')}
                </h3>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🧹</span>
                    </div>
                    <h4 className="text-xl font-bold text-slate-800 mb-3">{t('skills.clean_code')}</h4>
                    <p className="text-slate-600">
                      {t('skills.clean_code_desc')}
                    </p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-electric-400 to-electric-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🔍</span>
                    </div>
                    <h4 className="text-xl font-bold text-slate-800 mb-3">{t('skills.testing')}</h4>
                    <p className="text-slate-600">
                      {t('skills.testing_desc')}
                    </p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-slate-400 to-slate-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <h4 className="text-xl font-bold text-slate-800 mb-3">{t('skills.performance')}</h4>
                    <p className="text-slate-600">
                      {t('skills.performance_desc')}
                    </p>
                  </motion.div>
          </div>
        </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
