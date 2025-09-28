import React from 'react';

const Skills: React.FC = () => {
  const skills = [
    { name: 'JavaScript', emoji: '🟨', color: 'text-yellow-500' },
    { name: 'TypeScript', emoji: '🔷', color: 'text-blue-500' },
    { name: 'React', emoji: '⚛️', color: 'text-cyan-500' },
    { name: 'Next.js', emoji: '▲', color: 'text-gray-800' },
    { name: 'Node.js', emoji: '🟢', color: 'text-green-500' },
    { name: 'Python', emoji: '🐍', color: 'text-blue-600' },
    { name: 'HTML5', emoji: '🌐', color: 'text-orange-500' },
    { name: 'CSS3', emoji: '🎨', color: 'text-blue-500' },
    { name: 'Tailwind CSS', emoji: '💨', color: 'text-cyan-400' },
    { name: 'Git', emoji: '📝', color: 'text-orange-600' },
    { name: 'Docker', emoji: '🐳', color: 'text-blue-600' },
    { name: 'AWS', emoji: '☁️', color: 'text-orange-500' },
    { name: 'MongoDB', emoji: '🍃', color: 'text-green-600' },
    { name: 'PostgreSQL', emoji: '🐘', color: 'text-blue-700' },
    { name: 'Mobile Dev', emoji: '📱', color: 'text-purple-500' },
    { name: 'API Design', emoji: '🔌', color: 'text-indigo-500' },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Mes <span className="text-primary-600">Compétences</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Technologies et outils que j'utilise pour créer des solutions modernes et performantes
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center">
                <div className={`text-4xl mb-3 group-hover:scale-110 transition-transform duration-300 ${skill.color}`}>
                  {skill.emoji}
                </div>
                <h3 className="text-sm font-semibold text-gray-700 group-hover:text-primary-600 transition-colors duration-300">
                  {skill.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Approche de développement
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="font-semibold text-primary-600 mb-2">Code propre</h4>
                <p className="text-gray-600 text-sm">
                  Code maintenable et bien documenté
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-primary-600 mb-2">Tests & Qualité</h4>
                <p className="text-gray-600 text-sm">
                  Tests automatisés et revue de code
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-primary-600 mb-2">Performance</h4>
                <p className="text-gray-600 text-sm">
                  Optimisation et bonnes pratiques
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
