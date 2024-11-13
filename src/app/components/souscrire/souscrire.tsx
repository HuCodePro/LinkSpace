import React from 'react'
import Link from 'next/link';

// Composant réutilisable pour les avantages
const AdvantageCard = ({ emoji, title, description }) => {
  return (
    <div className="bg-blue-50 p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-blue-600 mb-4">
        {emoji} {title}
      </h2>
      <p className="text-gray-700">
        {description}
      </p>
    </div>
  );
};

function Souscrire() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-16">
      <div className="max-w-7xl bg-white rounded-lg shadow-lg p-12 text-center">
        <h1 className="text-5xl font-bold text-blue-600 mb-8">
          Pourquoi souscrire à LinkSpace ?
        </h1>
        <p className="text-gray-700 text-xl mb-12">
          LinkSpace est une plateforme innovante qui permet aux entreprises de mieux communiquer avec leurs employés et d’améliorer leur productivité. Voici pourquoi vous devriez rejoindre notre communauté dès aujourd’hui :
        </p>

        {/* Avantages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          <AdvantageCard
            emoji="🔄"
            title="Communication Simplifiée"
            description="Facilitez la communication interne grâce à une plateforme centralisée. Partagez des annonces importantes et restez connectés avec vos équipes."
          />
          <AdvantageCard
            emoji="📄"
            title="Gestion des Fiches de Paie"
            description="Envoyez facilement les fiches de paie à vos employés via LinkSpace. Plus besoin de papier, tout est numérique, sécurisé et accessible à tout moment."
          />
          <AdvantageCard
            emoji="✅"
            title="Suivi des Tâches"
            description="Assignez des tâches à vos employés, suivez leur progression et atteignez vos objectifs plus rapidement avec un suivi en temps réel."
          />
          <AdvantageCard
            emoji="🔒"
            title="Sécurité Maximale"
            description="Vos données sensibles sont protégées grâce à un chiffrement de bout en bout. La sécurité de vos informations est notre priorité."
          />
          {/* Nouveau avantage 1 */}
          <AdvantageCard
            emoji="💡"
            title="Innovation Continue"
            description="LinkSpace est constamment mis à jour pour intégrer les dernières innovations technologiques et améliorer l'expérience utilisateur."
          />
          {/* Nouveau avantage 2 */}
          <AdvantageCard
            emoji="🌍"
            title="Accessibilité Universelle"
            description="Accédez à LinkSpace depuis n'importe où dans le monde, sur n'importe quel appareil, pour une flexibilité maximale."
          />
        </div>

        {/* Bouton d'abonnement */}
        <Link
          href="/Souscription"
          className="bg-blue-600 text-white py-4 px-12 rounded-full shadow-lg hover:bg-blue-500 transition-all"
          aria-label="Souscrire à LinkSpace"
        >
          Souscrire maintenant
        </Link>
      </div>
    </div>
  );
}

export default Souscrire;
