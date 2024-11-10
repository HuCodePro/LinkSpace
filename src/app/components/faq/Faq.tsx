"use client";

import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null); // Fermer si la question est déjà ouverte
    } else {
      setOpenIndex(index); // Ouvrir la réponse de la question sélectionnée
    }
  };

  const faqs = [
    {
      question: 'Comment puis-je ajouter de nouveaux employés sur la plateforme ?',
      answer: 'Pour ajouter de nouveaux employés sur la plateforme, il suffit de vous rendre dans le panel. Vous y trouverez la liste des employés, avec des options pour ajouter de nouveaux membres ou en supprimer si nécessaire.',
    },
    {
      question: 'Est-ce que la plateforme propose une assistance en cas de problème ?',
      answer: 'Oui, nous offrons un support client dédié accessible via notre page Contact.',
    },
    {
      question: 'Comment créer et gérer des factures sur la plateforme ?',
      answer: 'Vous pouvez créer et gérer des factures directement depuis le tableau de bord dans la catégorie "Mes Factures", puis de choisir de créer une nouvelle facture ou de consulter les factures existantes. Vous pourrez également envoyer, recevoir et suivre leur statut.',
    },
    {
      question: 'Comment puis-je annuler ou modifier un abonnement ?',
      answer: 'Vous pouvez gérer vos abonnements directement depuis votre tableau de bord dans la section "Mes Abonnements". Si vous souhaitez annuler ou modifier votre abonnement, il vous suffit de suivre les instructions sur la page de gestion de l’abonnement ou de contacter notre support pour toute assistance supplémentaire.',
    },
    {
      question: 'Est-ce que mes données sont sécurisées ?',
      answer: 'Oui, toutes vos données sont chiffrées et sécurisées selon les normes les plus strictes.',
    },
    {
      question: 'Est-ce que je peux personnaliser les factures avec mon logo et mes informations ?',
      answer: 'Oui, notre plateforme permet de personnaliser vos factures. Vous pouvez ajouter votre logo, personnaliser les couleurs et inclure des informations supplémentaires comme des conditions de paiement. Cela vous permet de garder une présentation professionnelle qui correspond à votre entreprise.',
    },
    {
      question: 'Comment attribuer des tâches à mes employés ?',
      answer: 'Pour attribuer des tâches à vos employés, il vous suffit de vous rendre dans le panel. Vous y trouverez la liste de vos employés et pourrez gérer leurs tâches de manière simple et efficace. ',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Foire aux questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 pb-4">
            <div
              className="flex justify-between items-center cursor-pointer text-lg text-gray-800 hover:text-blue-600"
              onClick={() => toggleAnswer(index)}
            >
              <h3>{faq.question}</h3>
              <span className="text-2xl text-blue-600">{openIndex === index ? '-' : '+'}</span>
            </div>
            <div
              className={`${
                openIndex === index ? 'max-h-[500px] opacity-100 translate-y-0' : 'max-h-0 opacity-0 translate-y-4'
              } overflow-hidden transform transition-all duration-500 ease-in-out pt-4 pl-6 text-gray-600 text-base`}
            >
              {openIndex === index && <p>{faq.answer}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
