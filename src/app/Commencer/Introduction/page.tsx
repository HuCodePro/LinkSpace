import Footer from '@/app/components/footer/footer';
import Navbar from '@/app/components/nav/navbar';
import React from 'react';

const Page = () => {
    return (
        <div>
            <Navbar />
                <div className='bg-blue-700 text-white flex text-xl rounded-3xl w-[425px] absolute right-0 m-5 ml-72 p-9'>
                    <h2>Mais du coup, à quoi sert LinkSpace ?</h2>
                </div>

<div className='relative p-20'></div>

                <div className='bg-slate-300 text-black text-xl rounded-3xl flex absolute left-0 m-5 mr-72 p-9'>
                    <h2>Dans un monde professionnel en constante évolution, la communication efficace et la gestion des tâches sont essentielles pour la productivité des entreprises. Notre plateforme vise à répondre à ces besoins en offrant un espace de travail intégré qui permet aux entreprises de communiquer facilement avec leurs employés. Grâce à des fonctionnalités innovantes, cette plateforme facilite l envoi de fiches de paie, la gestion des tâches quotidiennes et la collaboration entre équipes. En centralisant ces outils au sein d une interface conviviale, nous aspirons à améliorer l efficacité opérationnelle et à renforcer l engagement des employés, tout en simplifiant les processus administratifs. Notre solution se veut une réponse pratique et adaptée aux défis contemporains du travail en entreprise.</h2>
                </div>

<div className='relative p-40'></div>

                <div className='bg-blue-700 text-white flex text-xl rounded-3xl w-[470px] absolute right-0 m-5 ml-72 p-9'>
                    <h2>Ah super ! Où est-ce que je peux souscrire ?</h2>
                </div>

<div className='relative p-20'></div>

                <div className='bg-slate-300 text-black text-xl rounded-3xl flex absolute left-0 m-5 mr-72 p-9'>
                    <h2>Tu as juste à te rendre <a className='underline' href="/Commencer/Souscrire">ici</a> !</h2>
                </div>

            <footer className='mt-96'>
                <Footer />
            </footer>
        </div>

    );
}

export default Page;
