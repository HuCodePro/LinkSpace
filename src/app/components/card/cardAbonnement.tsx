import React from "react";
import { Card } from "flowbite-react";

function Cardsabonnement() {
  const informations = [
    { id: 1, price: '49,99€', name: 'Plan TPE', salaries: '0 à 19 salariés', panelPro: true, contrat: true, facture: false, statistiques: false, description: 'Le Plan TPE est parfaitement adapté pour les petites entreprises qui souhaitent disposer des fonctions essentielles de gestion des employés sans engagement majeur. Ce plan inclut un accès au Panel Pro et la possibilité de gérer les contrats, permettant une organisation simplifiée du personnel pour les structures légères. En revanche, les fonctionnalités de facturation et de statistiques avancées sont limitées dans cette formule afin de répondre aux besoins basiques des très petites entreprises.' },
    { id: 2, price: '119,99€', name: 'Plan PME', salaries: '20 à 249 salariés', panelPro: true, contrat: true, facture: true, statistiques: false, description: 'Le Plan PME est idéal pour les entreprises de taille moyenne qui nécessitent une solution flexible et plus complète. Avec ce plan, en plus des fonctionnalités de gestion de contrats et de Panel Pro, les entreprises peuvent également accéder aux options de facturation, ce qui permet de centraliser le suivi administratif. Toutefois, les options de statistiques avancées ne sont pas incluses dans cette formule, car elle vise avant tout à structurer les bases administratives de l’entreprise.' },
    { id: 3, price: '249,99€', name: 'Plan ETI', salaries: '250 à 5000 salariés', panelPro: true, contrat: true, facture: true, statistiques: true, description: 'Conçu pour les entreprises intermédiaires, le Plan ETI offre une solution avancée de gestion du personnel avec des options complètes pour les contrats, les factures et les statistiques. Cette formule permet d’optimiser le suivi et la performance des équipes à travers des rapports détaillés et une analyse de données en temps réel. Les entreprises bénéficient d’une vue d’ensemble sur leur productivité, ainsi que de la possibilité de gérer facilement des volumes importants de données et d’utilisateurs.' },
    { id: 4, price: '499,99€', name: 'Plan TGE', salaries: '+ de 5000 salariés', panelPro: true, contrat: true, facture: true, statistiques: true, description: 'Le Plan TGE est spécialement conçu pour les très grandes entreprises nécessitant des outils de gestion complets et une assistance sur-mesure. Ce plan inclut toutes les fonctionnalités disponibles, dont les statistiques avancées pour un suivi analytique en profondeur, des options de facturation multi-sites et une gestion de contrats sophistiquée. Il répond aux besoins des grandes structures en matière d’organisation, de centralisation des données et d’optimisation des processus RH.' },
  ];

  return (
    <div className="grid gap-8">
      {informations.map((info, index) => (
        <div
          key={info.id}
          className={`grid grid-cols-2 gap-4 items-center ${
            index % 2 === 0 ? "justify-items-start" : "justify-items-end"
          }`}
        >
          {index % 2 === 0 ? (
            <>
              <Card className="w-full max-w-sm">
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
                    <span className={`text-base font-normal leading-tight ${info.panelPro ? "text-gray-500 dark:text-gray-400" : "text-gray-400 line-through"}`}>Panel Pro</span>
                  </li>
                  <li className="flex space-x-3">
                    <span className={`text-base font-normal leading-tight ${info.contrat ? "text-gray-500 dark:text-gray-400" : "text-gray-400 line-through"}`}>Contrat</span>
                  </li>
                  <li className="flex space-x-3">
                    <span className={`text-base font-normal leading-tight ${info.facture ? "text-gray-500 dark:text-gray-400" : "text-gray-400 line-through"}`}>Facture</span>
                  </li>
                  <li className="flex space-x-3">
                    <span className={`text-base font-normal leading-tight ${info.statistiques ? "text-gray-500 dark:text-gray-400" : "text-gray-400 line-through"}`}>Statistiques</span>
                  </li>
                </ul>
                <button type="button" className="inline-flex w-full justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900">Choisir</button>
              </Card>
              <p className="text-2xl text-gray-500 dark:text-gray-400">{info.description}</p>
            </>
          ) : (
            <>
              <p className="text-2xl text-gray-500 dark:text-gray-400">{info.description}</p>
              <Card className="w-full max-w-sm">
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
                    <span className={`text-base font-normal leading-tight ${info.panelPro ? "text-gray-500 dark:text-gray-400" : "text-gray-400 line-through"}`}>Panel Pro</span>
                  </li>
                  <li className="flex space-x-3">
                    <span className={`text-base font-normal leading-tight ${info.contrat ? "text-gray-500 dark:text-gray-400" : "text-gray-400 line-through"}`}>Contrat</span>
                  </li>
                  <li className="flex space-x-3">
                    <span className={`text-base font-normal leading-tight ${info.facture ? "text-gray-500 dark:text-gray-400" : "text-gray-400 line-through"}`}>Facture</span>
                  </li>
                  <li className="flex space-x-3">
                    <span className={`text-base font-normal leading-tight ${info.statistiques ? "text-gray-500 dark:text-gray-400" : "text-gray-400 line-through"}`}>Statistiques</span>
                  </li>
                </ul>
                <button type="button" className="inline-flex w-full justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900">Choisir</button>
              </Card>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default Cardsabonnement;
