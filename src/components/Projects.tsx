import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'SaaS de Gestion d\'Équipe',
      description: 'Plateforme SaaS complète pour la gestion de projets et d\'équipes avec tableaux Kanban, suivi du temps et collaboration en temps réel. Interface intuitive optimisée pour améliorer la productivité des équipes.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
      emojis: ['⚡', '🔷', '🗄️', '🐘'],
      githubLink: 'https://github.com',
      liveLink: 'https://example.com',
      color: 'from-blue-500 to-purple-600'
    },
    {
      id: 2,
      title: 'App Fintech Sécurisée',
      description: 'Application mobile de banque en ligne avec authentification biométrique, transferts instantanés et tableau de bord financier personnalisé. Conçue avec les plus hauts standards de sécurité bancaire.',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      technologies: ['React Native', 'TypeScript', 'Node.js', 'Redis'],
      emojis: ['📱', '🔷', '🟢', '🔴'],
      githubLink: 'https://github.com',
      liveLink: 'https://example.com',
      color: 'from-green-500 to-teal-600'
    },
    {
      id: 3,
      title: 'IA Business Intelligence',
      description: 'Plateforme d\'intelligence artificielle pour l\'analyse prédictive des ventes avec machine learning et visualisations avancées. Solution complète pour optimiser les stratégies commerciales et anticiper les tendances du marché.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      technologies: ['Python', 'TensorFlow', 'React', 'Docker'],
      emojis: ['🐍', '🧠', '⚛️', '🐳'],
      githubLink: 'https://github.com',
      liveLink: 'https://example.com',
      color: 'from-purple-500 to-pink-600'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Mes <span className="text-primary-600">Projets</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez quelques-uns de mes projets récents qui démontrent mes compétences et ma créativité
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                    >
                      <span className="text-xs">{project.emojis[techIndex]}</span>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-300 group/link"
                  >
                    📝
                    <span className="group-hover/link:translate-x-1 transition-transform duration-300">Code</span>
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-300 group/link"
                  >
                    🔗
                    <span className="group-hover/link:translate-x-1 transition-transform duration-300">Démo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-300 font-semibold"
          >
            📝
            Voir plus de projets sur GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
