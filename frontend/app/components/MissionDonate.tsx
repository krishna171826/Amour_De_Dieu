"use client";

import { Heart, CreditCard } from 'lucide-react';
import { useState } from 'react';

interface MissionDonateSectionProps {
  onNavigateToDonate: () => void;
}

export function MissionDonateSection({ onNavigateToDonate }: MissionDonateSectionProps) {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [isMonthly, setIsMonthly] = useState(false);
  const [customAmount, setCustomAmount] = useState('');

  const handleDonate = () => {
    onNavigateToDonate();
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Mission Text */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-[#0A1647] mb-6">
              Notre Mission
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                <strong className="text-[#0A1647]">Amour de Dieu</strong> est une association née de la foi et de la compassion. 
                Nous avons à cœur de partager l&apos;amour de Dieu à travers la distribution de repas, de kits d&apos;hygiène 
                et de vêtements à celles et ceux qui en ont le plus besoin.
              </p>
              <p>
                Mais notre engagement va bien au-delà de l&apos;aide matérielle. Nous voulons être une oreille attentive 
                pour ceux qui ont tout perdu, un réconfort dans leurs moments de solitude, et une lumière d&apos;espérance 
                dans leur quotidien.
              </p>
              <p>
                Chaque sourire, chaque parole bienveillante est pour nous une façon de rappeler que, même lorsque le 
                monde semble les avoir abandonnés, <strong className="text-[#0A1647]">Dieu ne les délaissera jamais</strong>.
              </p>
              <p className="text-lg font-semibold text-[#0A1647] italic">
                À travers nos actions, nous transmettons un message simple mais profond : chacun est précieux, aimé et digne, 
                même dans les moments les plus sombres.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center p-4 bg-[#F4E04D]/20 rounded-lg">
                <div className="text-3xl font-bold text-[#0A1647]">260+</div>
                <div className="text-sm text-gray-600 mt-1">Repas servis</div>
              </div>
              <div className="text-center p-4 bg-[#F4E04D]/20 rounded-lg">
                <div className="text-3xl font-bold text-[#0A1647]">20</div>
                <div className="text-sm text-gray-600 mt-1">Bénévoles</div>
              </div>
              <div className="text-center p-4 bg-[#F4E04D]/20 rounded-lg">
                <div className="text-3xl font-bold text-[#0A1647]">100+</div>
                <div className="text-sm text-gray-600 mt-1">Familles aidées</div>
              </div>
            </div>
          </div>

          {/* Right Side - Donation Box */}
          <div className="sticky top-24">
            <div className="bg-linear-to-br from-[#0A1647] to-[#1a2857] rounded-2xl p-8 shadow-2xl text-white">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="text-[#F4E04D]" size={32} />
                <h3 className="text-3xl font-bold">Faire un don</h3>
              </div>

              <p className="mb-6 opacity-90">
                Votre générosité nous permet de continuer nos actions et d&apos;aider ceux qui en ont besoin.
              </p>

              {/* Amount Selection */}
              <div className="space-y-4 mb-6">
                <label className="block text-sm font-semibold mb-2">Choisissez un montant</label>
                <div className="grid grid-cols-3 gap-3">
                  {[10, 20, 50].map((amount) => (
                    <button
                      key={amount}
                      onClick={() => {
                        setSelectedAmount(amount);
                        setCustomAmount('');
                      }}
                      className={`p-4 rounded-lg font-bold text-lg transition-all ${
                        selectedAmount === amount
                          ? 'bg-[#F4E04D] text-[#0A1647] scale-105'
                          : 'bg-white/10 hover:bg-white/20'
                      }`}
                    >
                      {amount}€
                    </button>
                  ))}
                </div>

                {/* Custom Amount */}
                <div>
                  <label className="block text-sm font-semibold mb-2">Ou montant personnalisé</label>
                  <input
                    type="number"
                    placeholder="Montant en €"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount(null);
                    }}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border-2 border-white/20 focus:border-[#F4E04D] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Frequency Selection */}
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-3">Fréquence</label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setIsMonthly(false)}
                    className={`py-3 px-4 rounded-lg font-semibold transition-all ${
                      !isMonthly
                        ? 'bg-[#F4E04D] text-[#0A1647]'
                        : 'bg-white/10 hover:bg-white/20'
                    }`}
                  >
                    Don unique
                  </button>
                  <button
                    onClick={() => setIsMonthly(true)}
                    className={`py-3 px-4 rounded-lg font-semibold transition-all ${
                      isMonthly
                        ? 'bg-[#F4E04D] text-[#0A1647]'
                        : 'bg-white/10 hover:bg-white/20'
                    }`}
                  >
                    Mensuel
                  </button>
                </div>
              </div>

              {/* Impact Message */}
              {(selectedAmount || customAmount) && (
                <div className="mb-6 p-4 bg-white/10 rounded-lg">
                  <p className="text-sm">
                    {isMonthly ? '💝 Avec ' : '🙏 Votre don de '}
                    <strong className="text-[#F4E04D]">
                      {selectedAmount || customAmount}€
                      {isMonthly ? '/mois' : ''}
                    </strong>
                    {isMonthly 
                      ? ' nous permet d&apos;aider régulièrement ceux qui en ont besoin.'
                      : ' permet de fournir plusieurs repas chauds.'}
                  </p>
                </div>
              )}

              {/* Donate Button */}
              <button
                onClick={handleDonate}
                className="w-full bg-[#F4E04D] text-[#0A1647] py-4 px-6 rounded-lg font-bold text-lg hover:bg-yellow-400 hover:scale-105 transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <CreditCard size={24} />
                {isMonthly ? 'Soutenir mensuellement' : 'Faire un don'}
              </button>

              <p className="text-xs text-center mt-4 opacity-75">
                🔒 Paiement 100% sécurisé • Reçu fiscal automatique<br />
                66% déductible des impôts
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}