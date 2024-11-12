import React from 'react'
import Link from 'next/link';
function Souscrire() {
  return (
    <div>
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8">
        <div className="max-w-3xl bg-white rounded-lg shadow-lg p-10 text-center">
            <h1 className="text-4xl font-bold text-blue-600 mb-6">
                Pourquoi souscrire à LinkSpace ?
            </h1>
            <p className="text-gray-700 text-lg mb-8">
                LinkSpace est une plateforme innovante qui permet aux entreprises de mieux communiquer avec leurs employés et d améliorer leur productivité. Voici pourquoi vous devriez rejoindre notre communauté dès aujourd hui :
            </p>

            {/* Avantages */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                        🔄 Communication Simplifiée
                    </h2>
                    <p className="text-gray-700">
                        Facilitez la communication interne grâce à une plateforme centralisée. Partagez des annonces importantes et restez connectés avec vos équipes.
                    </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                        📄 Gestion des Fiches de Paie
                    </h2>
                    <p className="text-gray-700">
                        Envoyez facilement les fiches de paie à vos employés via LinkSpace. Plus besoin de papier, tout est numérique, sécurisé et accessible à tout moment.
                    </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                        ✅ Suivi des Tâches
                    </h2>
                    <p className="text-gray-700">
                        Assignez des tâches à vos employés, suivez leur progression et atteignez vos objectifs plus rapidement avec un suivi en temps réel.
                    </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                        🔒 Sécurité Maximale
                    </h2>
                    <p className="text-gray-700">
                        Vos données sensibles sont protégées grâce à un chiffrement de bout en bout. La sécurité de vos informations est notre priorité.
                    </p>
                </div>
            </div>

            {/* Bouton d'abonnement */}
            <Link 
                href="/abonnement" 
                className="bg-blue-600 text-white py-3 px-8 rounded-full shadow-lg hover:bg-blue-500 transition-all"
            >
                Souscrire maintenant
            </Link>
        </div>
    </div>
</div>
  )
}

export default Souscrire