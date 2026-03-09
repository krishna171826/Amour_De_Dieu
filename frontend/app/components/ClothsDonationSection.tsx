"use client";


import { Shirt, Phone, Mail, MapPin, Package, Heart, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export function ClothingDonationSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const acceptedItems = [
    { icon: Shirt, title: 'Vêtements', items: 'Tous types de vêtements propres' },
    { icon: Package, title: 'Chaussures', items: 'Chaussures en bon état' },
    { icon: Heart, title: 'Accessoires', items: 'Sacs, écharpes, ceintures' },
  ];

  return (
    <section className="py-20 px-50 bg-linear-to-br from-[#0A1647] to-[#1a2857] relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#F4E04D] rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#F4E04D] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-[#F4E04D] rounded-full mb-6">
            <Shirt className="text-[#0A1647]" size={40} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            DONNER DES VÊTEMENTS
          </h2>
          <div className="w-32 h-1 bg-[#F4E04D] mx-auto mb-6"></div>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Vos dons de vêtements aident ceux qui en ont besoin. Contactez-nous pour organiser une collecte.
          </p>
        </div>

        {/* Accepted Items */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {acceptedItems.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-[#F4E04D]/30 hover:border-[#F4E04D] transition-all duration-300 hover:scale-105"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#F4E04D] rounded-full flex items-center justify-center mb-4">
                  <item.icon className="text-[#0A1647]" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-[#F4E04D] mb-2">{item.title}</h3>
                <p className="text-gray-200">{item.items}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form and Info */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-[#F4E04D]/30">
            <h3 className="text-3xl font-bold text-[#F4E04D] mb-6">
              Informations de Contact
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#F4E04D] rounded-full flex items-center justify-center shrink-0">
                  <Phone className="text-[#0A1647]" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Téléphone</h4>
                  <p className="text-gray-200">+33 6 12 34 56 78</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#F4E04D] rounded-full flex items-center justify-center shrink-0">
                  <Mail className="text-[#0A1647]" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Email</h4>
                  <p className="text-gray-200">dons@amourdedieu.fr</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#F4E04D] rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="text-[#0A1647]" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Adresse</h4>
                  <p className="text-gray-200">123 Rue de l&apos;Espoir, 75000 Paris</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-[#F4E04D]/20 rounded-xl border-2 border-[#F4E04D]/50">
              <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                <CheckCircle className="text-[#F4E04D]" size={24} />
                Conseils pour vos dons
              </h4>
              <ul className="space-y-2 text-gray-200">
                <li className="flex items-start gap-2">
                  <span className="text-[#F4E04D] mt-1">•</span>
                  <span>Vêtements propres et en bon état</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#F4E04D] mt-1">•</span>
                  <span>Emballés dans des sacs ou cartons</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#F4E04D] mt-1">•</span>
                  <span>Triés par catégorie si possible</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-3xl font-bold text-[#0A1647] mb-6">
              Formulaire de Contact
            </h3>

            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-white" size={48} />
                </div>
                <h4 className="text-2xl font-bold text-[#0A1647] mb-2">Merci !</h4>
                <p className="text-gray-600">
                  Nous avons bien reçu votre demande. Nous vous contacterons bientôt.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[#0A1647] font-semibold mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#F4E04D] focus:outline-none transition-colors"
                    placeholder="Votre nom"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#0A1647] font-semibold mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#F4E04D] focus:outline-none transition-colors"
                      placeholder="votre@email.fr"
                    />
                  </div>

                  <div>
                    <label className="block text-[#0A1647] font-semibold mb-2">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#F4E04D] focus:outline-none transition-colors"
                      placeholder="06 12 34 56 78"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#0A1647] font-semibold mb-2">
                    Adresse de collecte *
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#F4E04D] focus:outline-none transition-colors"
                    placeholder="Votre adresse complète"
                  />
                </div>

                

                <div>
                  <label className="block text-[#0A1647] font-semibold mb-2">
                    Message (optionnel)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#F4E04D] focus:outline-none transition-colors resize-none"
                    placeholder="Informations complémentaires..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0A1647] text-[#F4E04D] py-4 px-6 rounded-lg font-bold text-lg hover:bg-[#1a2857] transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  Envoyer la demande
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}