"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Footer from "./components/footer/footer";
import Navbar from "./components/nav/navbar";
import GridPattern from "./components/ui/animated-grid-pattern"; // Fond animé optionnel

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // Fonction pour gérer l'effet parallax sur les différentes couches de fond
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    
    const parallaxBackground = document.getElementById('parallax-background');
    const parallaxLayer2 = document.getElementById('parallax-layer-2');
    const parallaxLayer3 = document.getElementById('parallax-layer-3');
    
    if (parallaxBackground) {
      parallaxBackground.style.transform = `translateY(${scrollPosition * 0.1}px)`; // Vitesse lente
    }
    if (parallaxLayer2) {
      parallaxLayer2.style.transform = `translateY(${scrollPosition * 0.3}px)`; // Vitesse moyenne
    }
    if (parallaxLayer3) {
      parallaxLayer3.style.transform = `translateY(${scrollPosition * 0.5}px)`; // Vitesse plus rapide
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative bg-gradient-to-b from-[#0d1b2a] via-[#1e3a8a] to-[#1e3a8a] min-h-screen flex flex-col overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section avec effet parallax */}
      <section className="relative flex flex-col items-center justify-center text-center py-32 px-6">
        {/* Fond parallax avec plusieurs couches */}
        <div id="parallax-background" className="absolute inset-0 z-0 bg-[url('/path-to-your-background-image.png')] bg-cover bg-center opacity-30"></div>
        <div id="parallax-layer-2" className="absolute inset-0 z-10 bg-[url('/path-to-layer-2-image.png')] bg-cover bg-center opacity-40"></div>
        <div id="parallax-layer-3" className="absolute inset-0 z-20 bg-[url('/path-to-layer-3-image.png')] bg-cover bg-center opacity-50"></div>

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-30"
        >
          <h1 className="text-6xl md:text-7xl font-extrabold text-white leading-tight drop-shadow-lg">
            Bienvenue sur <span className="text-[#0ea5e9]">LinkSpace</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mt-6 max-w-2xl mx-auto">
            Connectez votre équipe, simplifiez la communication et boostez la productivité.
          </p>
          <div className="mt-12 flex gap-6 justify-center">
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="/signup"
              className="bg-[#0ea5e9] text-white py-4 px-8 rounded-full hover:bg-blue-600 transition-all shadow-lg"
            >
              Commencez gratuitement
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="/features"
              className="bg-gray-800 text-white py-4 px-8 rounded-full hover:bg-gray-700 transition-all shadow-lg"
            >
              En savoir plus
            </motion.a>
          </div>
        </motion.div>

        {/* Fond animé avec GridPattern ou autre motif décoratif */}
        <div className="absolute inset-0 z-10">
          <GridPattern className="opacity-10" />
        </div>
      </section>

      {/* Section des fonctionnalités */}
      <section className="relative bg-white py-24">
        <div className="absolute inset-0 z-0">
          {/* Fond avec des motifs géométriques */}
          <div className="w-full h-full bg-[url('/path-to-background-pattern.png')] bg-cover bg-center opacity-20 z-0" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-gray-800">Fonctionnalités principales</h2>
          <p className="text-gray-600 mt-4 mb-12">
            Découvrez comment LinkSpace peut transformer votre organisation.
          </p>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Collaboration en temps réel",
                description: "Travaillez ensemble sur des projets avec des mises à jour en temps réel.",
                icon: "👥",
              },
              {
                title: "Gestion de tâches",
                description: "Suivez les progrès de votre équipe pour atteindre vos objectifs.",
                icon: "📋",
              },
              {
                title: "Sécurité avancée",
                description: "Protégez vos données grâce à un cryptage de pointe.",
                icon: "🔒",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="p-8 bg-blue-50 rounded-lg shadow hover:shadow-xl"
              >
                <div className="text-6xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-semibold">{feature.title}</h3>
                <p className="text-gray-600 mt-4">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section des témoignages */}
      <section className="bg-blue-100 py-24">
        <div className="max-w-5xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">Avis de nos clients</h2>
          <div className="flex gap-8 justify-center">
            {[
              {
                name: "Alice Dupont",
                feedback:
                  "LinkSpace a révolutionné notre manière de collaborer. Notre équipe est plus connectée que jamais !",
              },
              {
                name: "John Doe",
                feedback:
                  "La gestion des tâches est un jeu d'enfant avec LinkSpace. Nos projets avancent bien plus vite.",
              },
              {
                name: "Sarah Michel",
                feedback:
                  "La sécurité des données est essentielle pour nous, et LinkSpace offre une tranquillité d'esprit totale.",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-lg shadow w-80 inline-block"
              >
                <p className="text-gray-700 text-lg">{testimonial.feedback}</p>
                <h4 className="mt-4 font-semibold text-blue-700">- {testimonial.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
