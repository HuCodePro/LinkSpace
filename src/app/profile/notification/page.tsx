"use client";

import React, { useState } from 'react';
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardFooter,
} from "@/components/ui/card";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";
import { CheckCircle, AlertTriangle, MessageCircleCode, MessageCircleDashed } from "lucide-react"; // Icons for notifications

const notifications = [
    {
        id: 1,
        message: "Paiement de facture de 50€ réussi.",
        date: "2024-10-28",
        type: "success",
        cat : "paiment"
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
        cat : "info"
    },
    {
        id: 4,
        message: "Nouveau Message d'un employée",
        date: "2024-10-25",
        type: "message",
        cat : "message"
    },
    {
        id: 5,
        message: "Échec du paiement de la facture de 30€.",
        date: "2024-10-24",
        type: "error",
        cat : "paiment"
    },
    {
        id: 6,
        message: "Votre employée Marie Curie a envoyé un Contrat de 80 € à l'entreprise Ampère",
        date: "2024-10-24",
        type: "contrat",
        cat : "contrat"
    },
];

const NotificationPage = () => {
    const [selectedCategory, setSelectedCategory] = useState("all");

    // Filter notifications based on selected category
    const filteredNotifications = selectedCategory === "all"
        ? notifications
        : notifications.filter(notification => notification.cat === selectedCategory);

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col p-6">
            <h1 className="text-2xl font-semibold mb-4">Mes Notifications</h1>
            
            <Select onValueChange={(value) => setSelectedCategory(value)}>
                <SelectTrigger className="w-[180px] m-5">
                    <SelectValue placeholder="Tout" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="all">Tout</SelectItem>
                    <SelectItem value="message">Message</SelectItem>
                    <SelectItem value="contrat">Contrats</SelectItem>
                    <SelectItem value="info">Info Employées</SelectItem>
                    <SelectItem value="paiment">Paiment</SelectItem>
                </SelectContent>
            </Select>

            {/* Notification List */}
            <div className="space-y-4">
                {filteredNotifications.map(notification => (
                    <Card key={notification.id} className="w-full shadow-md">
                        <CardHeader>
                            <CardTitle className="flex items-center">
                                {notification.type === "success" && <CheckCircle className="mr-2 text-green-500" />}
                                {notification.type === "message" && <MessageCircleDashed className="mr-2 text-blue-500" />}
                                {notification.type === "contrat" && <CheckCircle className="mr-2 text-black" />}
                                {notification.type === "error" && <AlertTriangle className="mr-2 text-red-500" />}
                                <p>{notification.message}</p> 
                            </CardTitle>
                            {notification.type === "contrat" && <p className='hover:underline cursor-pointer'>voir le contrat</p>}
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
