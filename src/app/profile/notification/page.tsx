"use client";

import React from 'react';
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, AlertTriangle, MessageCircleCode, MessageCircleDashed } from "lucide-react"; // Icônes pour les notifications

const notifications = [
    {
        id: 1,
        message: "Paiement de facture de 50€ réussi.",
        date: "2024-10-28",
        type: "success",
    },
    {
        id: 2,
        message: "Vous avez exclu l'employé Pierre Durand.",
        date: "2024-10-26",
        type: "info",
    },
    {
        id: 3,
        message: "Nouveau collaborateur ajouté : Marie Curie.",
        date: "2024-10-25",
        type: "success",
    },
    {
        id: 3,
        message: "Nouveau Message d'un employée",
        date: "2024-10-25",
        type: "message",
    },
    {
        id: 4,
        message: "Échec du paiement de la facture de 30€.",
        date: "2024-10-24",
        type: "error",
    },
    {
        id: 5,
        message: "Votre employee Marie Curie a envoyer un Contrat de 80 € a l'entreprise Ampère",
        date: "2024-10-24",
        type: "contrat",
    },
];

const NotificationPage = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col p-6">
            <h1 className="text-2xl font-semibold mb-4">Mes Notifications</h1>

            {/* Liste des notifications */}
            <div className="space-y-4">
                {notifications.map(notification => (
                    <Card key={notification.id} className="w-full shadow-md">
                        <CardHeader>
                            <CardTitle className="flex items-center">
                                {notification.type === "success" && <CheckCircle className="mr-2 text-green-500" />}
                                {notification.type === "message" && <MessageCircleDashed className="mr-2 text-blue-500" />}
                                {notification.type === "contrat" && <CheckCircle className="mr-2 text-black" />}
                                {notification.type === "error" && <AlertTriangle className="mr-2 text-red-500" />}
                                <p>  {notification.message}</p> 

                            </CardTitle>
                            {notification.type === "contrat" && <p className='hover:underline cursor-pointer'>voir le contract</p>}
                            {notification.type === "message" && <p className='hover:underline cursor-pointer'>voir le message</p>}
                        </CardHeader>
                        <CardContent>
                            <p className="text-xs text-gray-500">Date : {notification.date}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <Card className="w-full shadow-md mt-6">
                <CardHeader>
                    <CardTitle>Actions</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>Vous pouvez gérer vos notifications en fonction de leur type.</p>
                </CardContent>
                <CardFooter>
                    <Button variant="outline">Marquer toutes comme lues</Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default NotificationPage;
