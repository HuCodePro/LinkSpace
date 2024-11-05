import React, { useState } from 'react';
import { Button } from "@/components/ui/button"

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"

import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardFooter,
} from "@/components/ui/card";

import { CheckCircle, AlertTriangle, MessageCircleCode, MessageCircleDashed } from "lucide-react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
const Historique = () => {

    const notifications = [

        {
            id: 6,
            message: "Un contrat a été envoyer à l'entrprise Toto",
            date: "2024-10-24",
            type: "contrat",
            cat : "contrat"
        },
        {
            id: 7,
            message: "L'employer a fini une tâche",
            date: "2024-10-24",
            type: "contrat",
            cat : "contrat"
        },
    ];
    const [selectedCategory, setSelectedCategory] = useState("all");

    // Filter notifications based on selected category
    const filteredNotifications = selectedCategory === "all"
        ? notifications
        : notifications.filter(notification => notification.cat === selectedCategory);
    return (
        <div>
             <Drawer>
                                        <DrawerTrigger className='text-sm p-1'>Voir son Historique</DrawerTrigger>
                                        <DrawerContent>
                                            <DrawerHeader>
                                                <DrawerTitle>Liste Historique</DrawerTitle>
                                                <DrawerDescription>
                                                    Modifiez les Historiques de l'employé pour accéder à des ressources spécifiques
                                                </DrawerDescription>
                                                <div className="">

                                                <div className="m bg-gray-100 flex flex-col p-6">
            <h1 className="text-2xl font-semibold mb-4">Historique de l'employé</h1>
            
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
            <div className="m-5">
                {filteredNotifications.map(notification => (
                    <Card key={notification.id} className="m-2 shadow-md">
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

           
        </div>
            
            </div>
                                            </DrawerHeader>
                                            <DrawerFooter>
                                               
                                                <DrawerClose>
                                                    <Button variant="outline">Fermer</Button>
                                                </DrawerClose>
                                            </DrawerFooter>
                                        </DrawerContent>
                                    </Drawer>

        </div>
    );
}

export default Historique;
