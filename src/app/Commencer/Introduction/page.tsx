import Footer from '@/app/components/footer/footer';
import Navbar from '@/app/components/nav/navbar';
import React from 'react';
import { FaUserAlt, FaUserTie } from 'react-icons/fa';

const Page = () => {
    
    const messages = [
        { sender: 'Alex', text: "Hey, t’as entendu parler de ce nouvel outil, LinkSpace ?" },
        { sender: 'Sam', text: "Non, c’est quoi encore ce truc ? Un autre réseau social ?" },
        { sender: 'Alex', text: "Pas vraiment... c’est bien plus qu’un simple réseau social. Imagine une plateforme qui facilite la communication entre les entreprises et leurs employés, où tu peux échanger des informations, accéder à des documents importants et recevoir des tâches." },
        { sender: 'Sam', text: "Ok, ça a l’air cool. Mais concrètement, qu’est-ce que ça change pour moi ?" },
        { sender: 'Alex', text: "Ben... plus besoin de courir après tes fiches de paie ou de chercher partout les infos sur les projets en cours. Tout est centralisé sur LinkSpace. En gros, c’est un espace où tu te connectes directement avec ton entreprise, sans te perdre dans des mails interminables." },
        { sender: 'Sam', text: "Ah ouais, je vois ! Ça peut être super pratique pour organiser le travail en équipe, non ?" },
        { sender: 'Alex', text: "Exactement ! En plus, c’est ultra simple à utiliser. L’interface est fluide, tu reçois des notifications quand il y a des nouveautés, et tu peux même gérer tes tâches sans quitter la plateforme." },
        { sender: 'Sam', text: "Pas mal du tout... et niveau sécurité, ça donne quoi ?" },
        { sender: 'Alex', text: "T’inquiète, tout est sécurisé. Les échanges et les documents sont chiffrés pour que seules les personnes autorisées y aient accès." },
        { sender: 'Sam', text: "Ok, je suis convaincu ! Ça a l’air d’être exactement ce dont on avait besoin au boulot. Comment je fais pour m’inscrire ?" },
        { sender: 'Alex', text: "Facile, tu vas sur LinkSpace, tu crées ton compte en quelques clics, et tu peux même choisir un plan d’abonnement qui correspond à ton entreprise. 😉" },
        { sender: 'Sam', text: "Parfait, merci pour le tuyau, Alex ! Je vais tester ça dès maintenant." },
      ];

    return (
    <div>
        <Navbar/>
        <div className="min-h-screen flex items-center justify-center  py-20">
      <div className="w-full max-w-7xl bg-white rounded-3xl shadow-2xl p-12 space-y-10">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex items-start space-x-8 ${msg.sender === 'Alex' ? '' : 'flex-row-reverse'}`}
          >
            {/* Icône d'utilisateur */}
            <div className="flex-shrink-0">
              {msg.sender === 'Alex' ? (
                <FaUserAlt className="text-blue-500 w-16 h-16" />
              ) : (
                <FaUserTie className="text-pink-500 w-16 h-16" />
              )}
            </div>
            {/* Message */}
            <div className={`flex flex-col ${msg.sender === 'Alex' ? 'items-start' : 'items-end'}`}>
              <span className="font-semibold text-gray-800 text-xl">{msg.sender}</span>
              <p
                className={`mt-3 px-8 py-6 rounded-2xl break-words text-lg transition duration-300 ${
                  msg.sender === 'Alex'
                    ? 'bg-blue-100 text-blue-900 hover:bg-blue-200'
                    : 'bg-pink-100 text-pink-900 hover:bg-pink-200'
                }`}
                style={{ maxWidth: '100%' }}
              >
                {msg.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
      </div>

    );
}

export default Page;
