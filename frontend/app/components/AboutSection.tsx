import { Heart, Users, HandHeart, BookOpen } from 'lucide-react';
import Image from 'next/image';

export function AboutSection() {
  return (
    <section id="about" className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Changement md:grid-cols-2 vers lg:grid-cols-2 pour éviter d'écraser le texte sur tablette */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          
          {/* Left Content - Image */}
          <div className="flex flex-col items-center justify-center text-center">
            {/* Ajout de classes w- et h- pour réduire légèrement l'image sur petit écran si besoin */}
            <Image 
                src="/cross.svg" 
                alt="Logo Ensemble portons l'amour de Dieu" 
                width={200} 
                height={200} 
                className="w-40 h-40 md:w-50 md:h-50 mb-6 border-2 border-black"
            />
            {/* Tailles de texte adaptatives : text-2xl sur mobile, text-3xl sur plus grand */}
            <h2 className="text-2xl md:text-3xl font-bold text-[#0A1647] leading-tight">
                ENSEMBLE PORTONS<br />L’AMOUR DE DIEU
            </h2>
            <p className="text-[#0A1647] mt-3 text-sm md:text-base font-medium tracking-wide">
                UNE MAIN TENDUE, UN CŒUR TRANSFORMÉ
            </p>
          </div>

          {/* Right Content - Text */}
          {/* Centré sur mobile, aligné à gauche sur ordinateur (lg) */}
          <div className="text-center lg:text-left mt-8 lg:mt-0">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A1647] mb-6">
              À PROPOS DE NOUS
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
              Amour de Dieu est une association qui se bat pour la vie et la pratique de l&apos;Évangile. 
              Nous sommes là pour transmettre et vivre au coeur de l&apos;Évangile. Il représente à 
              nos yeux une valeur de partage et aussi de générosité.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
              Nos valeurs ? Que ce soit pour l&apos;évolution de chacun vers un lien plus fort vers l&apos;amour 
              de Dieu, transmettre le message de paix et d&apos;espoir, aimer son prochain comme Dieu nous 
              aime dans chacun de ses actes.
            </p>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              Venez nous rejoindre dans cette belle aventure humaine et spirituelle, ensemble 
              bâtissons un monde meilleur basé sur l&apos;amour et la compassion.
            </p>
          </div>
        </div>

        {/* Values Grid */}
        {/* 1 colonne sur mobile, 2 sur tablette (sm), 4 sur ordinateur (lg) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-16 md:mt-20">
          <div className="text-center flex flex-col items-center">
            <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#F4E04D] rounded-full mb-4">
              <Heart className="text-[#0A1647] w-6 h-6 md:w-8 md:h-8" />
            </div>
            <h3 className="font-bold text-[#0A1647] mb-2 text-lg">Amour</h3>
            <p className="text-gray-600 text-sm md:text-base px-4">Partager l&apos;amour de Dieu avec tous</p>
          </div>
          <div className="text-center flex flex-col items-center">
            <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#F4E04D] rounded-full mb-4">
              <Users className="text-[#0A1647] w-6 h-6 md:w-8 md:h-8" />
            </div>
            <h3 className="font-bold text-[#0A1647] mb-2 text-lg">Communauté</h3>
            <p className="text-gray-600 text-sm md:text-base px-4">Une famille unie dans la foi</p>
          </div>
          <div className="text-center flex flex-col items-center">
            <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#F4E04D] rounded-full mb-4">
              <HandHeart className="text-[#0A1647] w-6 h-6 md:w-8 md:h-8" />
            </div>
            <h3 className="font-bold text-[#0A1647] mb-2 text-lg">Générosité</h3>
            <p className="text-gray-600 text-sm md:text-base px-4">Donner sans compter</p>
          </div>
          <div className="text-center flex flex-col items-center">
            <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#F4E04D] rounded-full mb-4">
              <BookOpen className="text-[#0A1647] w-6 h-6 md:w-8 md:h-8" />
            </div>
            <h3 className="font-bold text-[#0A1647] mb-2 text-lg">Évangile</h3>
            <p className="text-gray-600 text-sm md:text-base px-4">Vivre selon la parole</p>
          </div>
        </div>
      </div>
    </section>
  );
}