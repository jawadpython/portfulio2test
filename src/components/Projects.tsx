import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Projects: React.FC = () => {
  const { t } = useTranslation();
  
  const projects = [
    {
      id: 1,
      title: 'SaaS de Gestion d\'Équipe',
      description: 'Plateforme SaaS complète pour la gestion de projets et d\'équipes avec tableaux Kanban, suivi du temps et collaboration en temps réel. Architecture robuste optimisée pour maximiser la productivité des équipes.',
      longDescription: 'Une solution complète de gestion de projet développée avec Next.js 14 et TypeScript. Inclut des fonctionnalités avancées comme la collaboration en temps réel, les tableaux Kanban interactifs, le suivi du temps, et un système de notifications intelligent.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
      emojis: ['⚡', '🔷', '🗄️', '🐘'],
      githubLink: 'https://github.com',
      liveLink: 'https://example.com',
      color: 'from-slate-600 to-slate-800',
      features: ['Collaboration temps réel', 'Tableaux Kanban', 'Suivi du temps', 'Notifications'],
      status: 'En production'
    },
    {
      id: 2,
      title: 'App Fintech Sécurisée',
      description: 'Application mobile de banque en ligne avec authentification biométrique, transferts instantanés et tableau de bord financier personnalisé. Développée avec les plus hauts standards de sécurité bancaire et architecture microservices.',
      longDescription: 'Application mobile de banque en ligne développée avec React Native et TypeScript. Intègre l\'authentification biométrique, les transferts instantanés, et un tableau de bord financier personnalisé avec les plus hauts standards de sécurité bancaire.',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      technologies: ['React Native', 'TypeScript', 'Node.js', 'Redis'],
      emojis: ['📱', '🔷', '🟢', '🔴'],
      githubLink: 'https://github.com',
      liveLink: 'https://example.com',
      color: 'from-blue-600 to-blue-800',
      features: ['Authentification biométrique', 'Transferts instantanés', 'Tableau de bord', 'Sécurité avancée'],
      status: 'En développement'
    },
    {
      id: 3,
      title: 'IA Business Intelligence',
      description: 'Plateforme d\'intelligence artificielle pour l\'analyse prédictive des ventes avec machine learning et visualisations avancées. Solution complète développée pour optimiser les stratégies commerciales et anticiper les tendances du marché.',
      longDescription: 'Plateforme d\'intelligence artificielle développée avec Python et TensorFlow pour l\'analyse prédictive des ventes. Inclut des algorithmes de machine learning, des visualisations avancées, et des prédictions en temps réel pour optimiser les stratégies commerciales.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      technologies: ['Python', 'TensorFlow', 'React', 'Docker'],
      emojis: ['🐍', '🧠', '⚛️', '🐳'],
      githubLink: 'https://github.com',
      liveLink: 'https://example.com',
      color: 'from-indigo-600 to-indigo-800',
      features: ['Machine Learning', 'Prédictions IA', 'Visualisations', 'Analytics avancées'],
      status: 'MVP terminé'
    }
  ];

  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 left-20 w-72 h-72 bg-gradient-to-br from-primary-200/20 to-primary-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-72 h-72 bg-gradient-to-br from-electric-200/20 to-electric-300/20 rounded-full blur-3xl"></div>
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
                {t('projects.title')}
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                {t('projects.subtitle')}
              </p>
            </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-6 overflow-hidden border border-white/20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              {/* Project Image with Status Badge */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                  decoding="async"
                  onLoad={(e) => {
                    e.currentTarget.style.opacity = '1';
                  }}
                  style={{ opacity: 0 }}
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.status === 'En production' ? 'bg-green-100 text-green-800' :
                    project.status === 'En développement' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-slate-800 group-hover:text-primary-800 transition-colors duration-300">
                  {project.title}
                </h3>
                </div>
                
                <p className="text-slate-600 mb-6 leading-relaxed text-sm">
                  {project.description}
                </p>

                    {/* Features List */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-slate-700 mb-3">{t('projects.features')} :</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                        <span className="text-xs text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium hover:bg-slate-200 transition-colors duration-200"
                    >
                      <span className="text-xs">{project.emojis[techIndex]}</span>
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
