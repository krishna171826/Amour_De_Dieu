import { Instagram, Facebook, MessageCircle } from 'lucide-react';

export function SocialMediaSection() {
  return (
    <section className="py-20 bg-linear-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#0A1647] mb-4">
          REJOIGNEZ-NOUS SUR LES RÉSEAUX
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Suivez nos actions quotidiennes et restez connectés avec notre communauté
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Phone Mockup with Video */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Phone Frame */}
              <div className="relative w-70 h-145 bg-gray-900 rounded-[40px] shadow-2xl border-8 border-gray-800 overflow-hidden">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-gray-900 rounded-b-2xl z-20"></div>
                
                {/* Video Content Area - LA MODIFICATION EST ICI */}
                <div className="relative w-full h-full bg-black z-10">
                  <video 
                    className="absolute inset-0 w-full h-full object-cover"
                    src="/socialmedia.MOV" /* REMPLACEZ CE CHEMIN PAR LE NOM DE VOTRE VIDÉO */
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    Votre navigateur ne supporte pas la balise vidéo.
                  </video>

                </div>
              </div>



              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-[#F4E04D] rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#0A1647] rounded-full opacity-20 blur-xl"></div>
            </div>
          </div>

          {/* Social Media Links (Le reste de votre code reste identique) */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#0A1647] mb-6">
              Suivez-nous et partagez l&apos;amour
            </h3>

            {/* TikTok */}
            <a 
              href="https://www.tiktok.com/@amourdedieu_evry" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all group border-2 border-transparent hover:border-[#0A1647]"
            >
              <div className="w-14 h-14 bg-linear-to-br from-cyan-400 via-pink-500 to-purple-600 rounded-xl flex items-center justify-center shrink-0">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-[#0A1647] group-hover:text-pink-600 transition-colors">TikTok</h4>
                <p className="text-sm text-gray-600">@amourdedieu_evry</p>
              </div>
              <div className="text-[#0A1647] group-hover:translate-x-2 transition-transform">→</div>
            </a>

            {/* Instagram */}
            <a 
              href="https://www.instagram.com/association_amour_de_dieu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all group border-2 border-transparent hover:border-[#0A1647]"
            >
              <div className="w-14 h-14 bg-linear-to-br from-purple-600 via-pink-500 to-orange-400 rounded-xl flex items-center justify-center shrink-0">
                <Instagram className="text-white" size={32} />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-[#0A1647] group-hover:text-pink-600 transition-colors">Instagram</h4>
                <p className="text-sm text-gray-600">@amourdedieu_evry</p>
              </div>
              <div className="text-[#0A1647] group-hover:translate-x-2 transition-transform">→</div>
            </a>

            {/* Facebook */}
            <a 
              href="https://www.facebook.com/amourdedieu.evry" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all group border-2 border-transparent hover:border-[#0A1647]"
            >
              <div className="w-14 h-14 bg-[#1877F2] rounded-xl flex items-center justify-center shrink-0">
                <Facebook className="text-white" size={32} />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-[#0A1647] group-hover:text-[#1877F2] transition-colors">Facebook</h4>
                <p className="text-sm text-gray-600">Amour de Dieu - Evry</p>
              </div>
              <div className="text-[#0A1647] group-hover:translate-x-2 transition-transform">→</div>
            </a>

            {/* WhatsApp Group */}
            <a 
              href="https://chat.whatsapp.com/xxxxx" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all group border-2 border-transparent hover:border-[#0A1647]"
            >
              <div className="w-14 h-14 bg-[#25D366] rounded-xl flex items-center justify-center shrink-0">
                <MessageCircle className="text-white" size={32} />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-[#0A1647] group-hover:text-[#25D366] transition-colors">Groupe WhatsApp</h4>
                <p className="text-sm text-gray-600">Rejoignez notre communauté</p>
              </div>
              <div className="text-[#0A1647] group-hover:translate-x-2 transition-transform">→</div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}