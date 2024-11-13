"use client";
import React from 'react';
import Navbar from '../components/nav/navbar';
import Footer from '../components/footer/footer';
import Cardsabonnement from '../components/card/cardAbonnement';

const Page = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0070f3] via-[#00c6ff] to-[#0070f3] flex flex-col text-white">
            {/* Navbar */}
            <Navbar />

            {/* Fond animé */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-10 left-1/4 w-[150%] h-[150%] bg-gradient-to-r from-white to-blue-500 opacity-30 rounded-full animate-pulse"></div>
                <div className="absolute top-1/2 -left-10 w-[150%] h-[150%] bg-gradient-to-r from-white to-blue-500 opacity-20 rounded-full animate-pulse"></div>
            </div>

            {/* Section d'abonnement */}
            <div className="relative z-10 flex flex-col items-center justify-center mx-auto max-w-full px-6 py-20">
                <h1 className="text-5xl font-extrabold mb-16 text-center drop-shadow-lg">
                    Choisissez le plan qui vous convient
                </h1>
                <div
                    className="w-full  shadow-2xl rounded-3xl bg-white bg-opacity-90 p-10 "
                >
                    <Cardsabonnement />
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default Page;
