import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="min-h-screen flex items-center bg-gradient-to-br from-primary-50 to-white pt-20">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 animate-fade-in">
              Bonjour, je suis{' '}
              <span className="text-primary-600">Développeuse</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-slide-up">
              Développeuse freelance passionnée, créative et fiable
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">À propos de moi</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Je suis une développeuse freelance passionnée par la création de solutions 
                  numériques innovantes. Mon approche allie créativité et rigueur technique 
                  pour livrer des projets de qualité qui répondent parfaitement aux besoins 
                  de mes clients.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Avec une expertise solide en développement web et mobile, je m'engage 
                  à fournir des solutions fiables, performantes et évolutives. Chaque 
                  projet est une nouvelle opportunité de créer quelque chose d'exceptionnel.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-primary-50 px-4 py-2 rounded-full">
                    <span className="text-primary-700 font-semibold">5+ années d'expérience</span>
                  </div>
                  <div className="bg-primary-50 px-4 py-2 rounded-full">
                    <span className="text-primary-700 font-semibold">50+ projets livrés</span>
                  </div>
                  <div className="bg-primary-50 px-4 py-2 rounded-full">
                    <span className="text-primary-700 font-semibold">100% satisfaction client</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 animate-slide-up">
              {/* Professional Photo Placeholder */}
              <div className="bg-white rounded-2xl shadow-xl p-6 text-center">
                <div className="w-48 h-48 mx-auto mb-4 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center">
                  <div className="text-6xl text-primary-600">👩‍💻</div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Développeuse Freelance</h3>
                <p className="text-gray-600">Spécialisée en solutions web modernes</p>
              </div>

              <div className="flex items-center space-x-4 bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="bg-primary-100 p-3 rounded-full">
                  <div className="text-primary-600 text-xl">💻</div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Passionnée</h3>
                  <p className="text-gray-600">Développement web et mobile avec amour du détail</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="bg-primary-100 p-3 rounded-full">
                  <div className="text-primary-600 text-xl">❤️</div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Créative</h3>
                  <p className="text-gray-600">Solutions innovantes et design moderne</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="bg-primary-100 p-3 rounded-full">
                  <div className="text-primary-600 text-xl">🛡️</div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Fiable</h3>
                  <p className="text-gray-600">Livraisons dans les temps et qualité garantie</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
