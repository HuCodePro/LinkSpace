"use client"

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const subscriptions = [
    { id: 1, name: 'Abonnement Basic', price: '€10/mois', duration: 'Mensuel', status: 'Non Actif' },
    { id: 2, name: 'Abonnement Pro', price: '€25/mois', duration: 'Mensuel', status: 'Non Actif' },
    { id: 3, name: 'Abonnement Premium', price: '€50/mois', duration: 'Annuel', status: 'Actif' },
];

const SubscriptionPage = () => {
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-semibold">Mes Abonnements</h1>
                <Button variant={"default"}>Souscrire à un nouvel abonnement</Button>
            </div>

            <div className="grid gap-4">
                {subscriptions.map((subscription) => (
                    <Card key={subscription.id} className="w-full shadow-md">
                        <CardHeader className="flex justify-between items-center">
                            <CardTitle className="text-xl">{subscription.name}</CardTitle>
                            <Badge variant={subscription.status === 'Actif' ? 'default' : 'destructive'}>
                                {subscription.status}
                            </Badge>
                        </CardHeader>
                        <CardContent>
                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="text-sm text-gray-500">Prix: {subscription.price}</p>
                                    <p className="text-sm text-gray-500">Durée: {subscription.duration}</p>
                                </div>
                                <Button variant="outline" size="sm">Gérer</Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default SubscriptionPage;
