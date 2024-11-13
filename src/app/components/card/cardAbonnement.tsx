import React from "react";
import { Card } from "flowbite-react";
import Link from 'next/link';
import { FaChartLine, FaFileInvoice, FaUserAlt, FaClipboardCheck } from "react-icons/fa";

function Cardsabonnement() {
  const informations = [
    {
      id: 1,
      price: '49,99€',
      name: 'Plan TPE',
      salaries: '0 à 19 salariés',
      panelPro: true,
      contrat: true,
      facture: false,
      statistiques: false,
      description:
        'Le Plan TPE est parfait pour les petites entreprises qui souhaitent disposer des fonctions essentielles sans engagement majeur.',
      recommended: false,
    },
    {
      id: 2,
      price: '119,99€',
      name: 'Plan PME',
      salaries: '20 à 249 salariés',
      panelPro: true,
      contrat: true,
      facture: true,
      statistiques: false,
      description:
        'Le Plan PME est idéal pour les entreprises moyennes cherchant une solution flexible avec options de facturation.',
      recommended: true,
    },
    {
      id: 3,
      price: '249,99€',
      name: 'Plan ETI',
      salaries: '250 à 5000 salariés',
      panelPro: true,
      contrat: true,
      facture: true,
      statistiques: true,
      description:
        'Conçu pour les entreprises intermédiaires, le Plan ETI offre des rapports détaillés pour suivre la productivité.',
      recommended: false,
    },
    {
      id: 4,
      price: '499,99€',
      name: 'Plan TGE',
      salaries: '+ de 5000 salariés',
      panelPro: true,
      contrat: true,
      facture: true,
      statistiques: true,
      description:
        'Le Plan TGE est pour les grandes entreprises avec des outils de gestion complets et des statistiques avancées.',
      recommended: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-indigo-200 to-indigo-300 py-16 flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-16 w-full max-w-7xl">
        {informations.map((info) => (
          <div
            key={info.id}
            className={`relative flex flex-col bg-white rounded-3xl shadow-lg p-8 transform transition-transform duration-500 ${info.recommended ? "border-4 border-indigo-600 shadow-xl scale-105" : "hover:scale-105"
              } hover:shadow-2xl`}
          >
            
            {info.recommended && (
              <span className="absolute top-4 right-4 bg-indigo-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md">
                Populaire
              </span>
            )}
            <Card className="w-full">
              <h5 className="mb-4 text-2xl font-semibold text-gray-800">{info.name}</h5>
              <div className="flex items-baseline space-x-2 text-gray-900 mb-6">
                <span className="text-5xl font-bold">{info.price}</span>
                <span className="text-lg font-normal text-gray-500">/mois</span>
              </div>
              <ul className="my-6 space-y-4">
                <li className="flex items-center space-x-3">
                  <FaUserAlt className="text-gray-600" />
                  <span className="text-lg font-medium text-gray-700">{info.salaries}</span>
                </li>
                <li className={`text-lg flex items-center space-x-3 ${info.panelPro ? "text-green-600" : "text-gray-400 line-through"}`}>
                  <FaClipboardCheck />
                  <span>Panel Pro</span>
                </li>
                <li className={`text-lg flex items-center space-x-3 ${info.contrat ? "text-green-600" : "text-gray-400 line-through"}`}>
                  <FaFileInvoice />
                  <span>Contrat</span>
                </li>
                <li className={`text-lg flex items-center space-x-3 ${info.facture ? "text-green-600" : "text-gray-400 line-through"}`}>
                  <FaFileInvoice />
                  <span>Facture</span>
                </li>
                <li className={`text-lg flex items-center space-x-3 ${info.statistiques ? "text-green-600" : "text-gray-400 line-through"}`}>
                  <FaChartLine />
                  <span>Statistiques</span>
                </li>
              </ul>
              <Link href={`/paiement?planName=${info.name}&planPrice=${info.price}`}>
                <button
                  type="button"
                  className="w-full mt-6 rounded-lg bg-indigo-600 py-3 text-white font-semibold hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 transform hover:scale-105 transition-transform duration-300"
                >
                  Choisir
                </button>
              </Link>
            </Card>
            <p className="text-lg text-gray-600 mt-6">{info.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cardsabonnement;
