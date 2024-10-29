"use client"

import React, { useState } from 'react';
import BarProfile from './components/barProfile';
import Navbar from '../components/nav/navbar';
import PageInfo from './info/page'; 
import Panel from './panel/panel';
import SubscriptionPage from './sub/Sub';
import InvoicePage from './factures/Factures';
import SecurityPage from './secuCompte/page';
import NotificationPage from './notification/page';
import SupportPage from './supportClient/page';


const Page = () => {
    const [selectedSection, setSelectedSection] = useState('info');

    const renderSection = () => {
        switch (selectedSection) {
            case 'info':
                return <PageInfo />;
            case 'panel':
                return <Panel />
            case 'abonnements':
                return <SubscriptionPage />;
            case 'factures':
                return <InvoicePage />;
            case 'securite':
                return <SecurityPage />;
            case 'notifications':
                return <NotificationPage />;
            case 'support':
                return <SupportPage />;
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
