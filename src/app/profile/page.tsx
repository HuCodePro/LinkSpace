"use client"

import React, { useState } from 'react';
import BarProfile from './components/barProfile';
import Navbar from '../components/nav/navbar';
import PageInfo from './info/page'; 


const Page = () => {
    const [selectedSection, setSelectedSection] = useState('info');

    const renderSection = () => {
        switch (selectedSection) {
            case 'info':
                return <PageInfo />;
            case 'panel':
                return <p>Voici le Panel PRO...</p>;
            case 'abonnements':
                return <p>Voici vos abonnements...</p>;
            case 'factures':
                return <p>Voici vos factures...</p>;
            case 'securite':
                return <p>Voici les paramètres de sécurité de votre compte...</p>;
            case 'notifications':
                return <p>Voici vos notifications...</p>;
            case 'support':
                return <p>Voici le support client...</p>;
            default:
                return <p>Veuillez sélectionner une section...</p>;
        }
    };

    return (
        <div>
            <Navbar />
            <div className="flex">
                <BarProfile setSelectedSection={setSelectedSection} />
                <div className="flex-1 p-5">
                    {renderSection()}
                </div>
            </div>
        </div>
    );
}

export default Page;
