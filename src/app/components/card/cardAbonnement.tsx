import React from "react";
import { Card } from "flowbite-react";

function Cardsabonnement() {
  const informations = [
    { id: 1, price: '49,99€', name: 'Plan TPE', salaries: '0 à 19 salariés', panelPro: true, contrat: true, facture: false, statistiques: false },
    { id: 2, price: '119,99€', name: 'Plan PME', salaries: '20 à 249 salariés', panelPro: true, contrat: true, facture: true, statistiques: false },
    { id: 3, price: '249,99€', name: 'Plan ETI', salaries: '250 à 5000 salariés', panelPro: true, contrat: true, facture: true, statistiques: true },
    { id: 4, price: '499,99€', name: 'Plan TGE', salaries: '+ de 5000 salariés', panelPro: true, contrat: true, facture: true, statistiques: true },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {informations.map((info) => (
        <Card key={info.id} className="max-w-sm">
          <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">{info.name}</h5>
          <div className="flex items-baseline text-gray-900 dark:text-white">
            <span className="text-5xl font-extrabold tracking-tight">{info.price}</span>
            <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/mois</span>
          </div>
          <ul className="my-7 space-y-5">
            <li className="flex space-x-3">
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">{info.salaries}</span>
            </li>
            <li className="flex space-x-3">
              <span
                className={`text-base font-normal leading-tight ${
                  info.panelPro ? "text-gray-500 dark:text-gray-400" : "text-gray-400 line-through"
                }`}
              >
                Panel Pro
              </span>
            </li>
            <li className="flex space-x-3">
              <span
                className={`text-base font-normal leading-tight ${
                  info.contrat ? "text-gray-500 dark:text-gray-400" : "text-gray-400 line-through"
                }`}
              >
                Contrat
              </span>
            </li>
            <li className="flex space-x-3">
              <span
                className={`text-base font-normal leading-tight ${
                  info.facture ? "text-gray-500 dark:text-gray-400" : "text-gray-400 line-through"
                }`}
              >
                Facture
              </span>
            </li>
            <li className="flex space-x-3">
              <span
                className={`text-base font-normal leading-tight ${
                  info.statistiques ? "text-gray-500 dark:text-gray-400" : "text-gray-400 line-through"
                }`}
              >
                Statistiques
              </span>
            </li>
          </ul>
          <button
            type="button"
            className="inline-flex w-full justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900"
          >
            Choisir
          </button>
        </Card>
      ))}
    </div>
  );
}

export default Cardsabonnement;
