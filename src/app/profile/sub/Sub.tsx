// SubscriptionPage.js

"use client";

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";

// Données des abonnements, avec plus d'informations pour chaque abonnement
const subscriptions = [
    { 
        id: 1, 
        name: 'Abonnement Premium', 
        price: '€50/mois', 
        duration: 'Annuel', 
        status: 'Actif', 
        startDate: '2024-01-10', 
        nextBillingDate: '2025-01-10', 
        description: "Accès à tous les contenus premium et à des fonctionnalités avancées." 
    },
    
];

const SubscriptionPage = () => {
    const [selectedSubscription, setSelectedSubscription] = useState(null);

    const handleCancelSubscription = () => {
        alert("L'abonnement a été annulé avec succès.");
        setSelectedSubscription(null); // Ferme le drawer après l'annulation
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
            <div className="flex justify-between items-center w-full max-w-6xl mb-10">
                <h1 className="text-3xl font-semibold">Gestion des Abonnements</h1>
                <Button variant="default">Souscrire à un nouvel abonnement</Button>
            </div>

            <div className="grid gap-6 w-full max-w-6xl">
                {subscriptions.map(subscription => (
                    <Card key={subscription.id} className="w-full shadow-lg bg-white rounded-lg">
                        <CardHeader className="flex justify-between items-center">
                            <CardTitle className="text-2xl font-semibold">{subscription.name}</CardTitle>
                            <Badge variant={subscription.status === 'Actif' ? 'default' : 'destructive'}>
                                {subscription.status}
                            </Badge>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-col space-y-4">
                                <div className="text-gray-700">
                                    <p><strong>Description :</strong> {subscription.description}</p>
                                    <p><strong>Prix :</strong> {subscription.price}</p>
                                    <p><strong>Durée :</strong> {subscription.duration}</p>
                                    <p><strong>Date de début :</strong> {subscription.startDate}</p>
                                    <p><strong>Prochaine facturation :</strong> {subscription.nextBillingDate}</p>
                                </div>
                                <Drawer>
                                    <DrawerTrigger>
                                        <Button variant="secondary" onClick={() => setSelectedSubscription(subscription)}>
                                            Gérer
                                        </Button>
                                    </DrawerTrigger>

                                    {selectedSubscription && selectedSubscription.id === subscription.id && (
                                        <DrawerContent className="w-full h-full">
                                            <DrawerHeader className="text-center">
                                                <DrawerTitle className="text-3xl font-semibold">
                                                    Gérer {selectedSubscription.name}
                                                </DrawerTitle>
                                                <DrawerDescription className="mt-4 text-gray-600">
                                                    Détails de l'abonnement et options de gestion.
                                                </DrawerDescription>
                                            </DrawerHeader>

                                            <div className="p-6 space-y-6">
                                                <div>
                                                    <p className="text-lg font-medium text-gray-800">Détails complets</p>
                                                    <ul className="space-y-3 text-gray-700">
                                                        <li><strong>Nom :</strong> {selectedSubscription.name}</li>
                                                        <li><strong>Prix :</strong> {selectedSubscription.price}</li>
                                                        <li><strong>Durée :</strong> {selectedSubscription.duration}</li>
                                                        <li><strong>Date de début :</strong> {selectedSubscription.startDate}</li>
                                                        <li><strong>Prochaine facturation :</strong> {selectedSubscription.nextBillingDate}</li>
                                                        <li><strong>Status :</strong> {selectedSubscription.status}</li>
                                                        <li><strong>Description :</strong> {selectedSubscription.description}</li>
                                                    </ul>
                                                </div>

                                                <div className="mt-6">
                                                    <p className="text-lg font-medium text-gray-800">Historique des paiements</p>
                                                    <table className="w-full text-left bg-gray-50 shadow rounded-lg">
                                                        <thead>
                                                            <tr>
                                                                <th className="px-4 py-2 border-b">Date</th>
                                                                <th className="px-4 py-2 border-b">Montant</th>
                                                                <th className="px-4 py-2 border-b">Statut</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td className="px-4 py-2">2024-01-10</td>
                                                                <td className="px-4 py-2">{selectedSubscription.price}</td>
                                                                <td className="px-4 py-2 text-green-600">Payé</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="px-4 py-2">2024-02-10</td>
                                                                <td className="px-4 py-2">{selectedSubscription.price}</td>
                                                                <td className="px-4 py-2 text-green-600">Payé</td>
                                                            </tr>
                                                            {/* Ajoutez d'autres lignes de paiements ici */}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>

                                            <DrawerFooter className="flex justify-end p-6">
                                                <Button variant="destructive" className="mr-4" onClick={handleCancelSubscription}>
                                                    Annuler l'abonnement
                                                </Button>
                                                <DrawerClose>
                                                    <Button variant="outline">Fermer</Button>
                                                </DrawerClose>
                                            </DrawerFooter>
                                        </DrawerContent>
                                    )}
                                </Drawer>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default SubscriptionPage;
