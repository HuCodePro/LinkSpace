"use client";

import React, { useState } from 'react';
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"; // Assurez-vous d'avoir un composant Input
import { Textarea } from "@/components/ui/textarea"; // Assurez-vous d'avoir un composant Textarea
import { HelpCircle } from "lucide-react"; // Icône pour le support

const faqs = [
    {
        question: "Comment puis-je changer mon mot de passe ?",
        answer: "Pour changer votre mot de passe, allez dans les paramètres de sécurité de votre compte.",
    },
    {
        question: "Que faire si je rencontre un problème de paiement ?",
        answer: "Si vous rencontrez un problème de paiement, veuillez vérifier vos informations de carte et réessayer.",
    },
    {
        question: "Comment puis-je contacter le support client ?",
        answer: "Vous pouvez utiliser le formulaire ci-dessous pour nous contacter directement.",
    },
];

const SupportPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Ici, vous ajouteriez la logique pour envoyer le message au support
        console.log("Message envoyé", { name, email, message });
        // Réinitialisez le formulaire après l'envoi
        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col p-6">
            <h1 className="text-2xl font-semibold mb-4">Support Client</h1>

            {/* Formulaire de contact */}
            <Card className="w-full shadow-md mb-6">
                <CardHeader>
                    <CardTitle>Contactez-nous</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <Input
                            type="text"
                            placeholder="Votre nom"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <Input
                            type="email"
                            placeholder="Votre email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <Textarea
                            placeholder="Votre message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        />
                        <Button type="submit">Envoyer</Button>
                    </form>
                </CardContent>
            </Card>

            {/* Section FAQ */}
            <Card className="w-full shadow-md">
                <CardHeader>
                    <CardTitle>Questions Fréquemment Posées</CardTitle>
                </CardHeader>
                <CardContent>
                    {faqs.map((faq, index) => (
                        <div key={index} className="mb-4">
                            <h3 className="font-medium text-lg">{faq.question}</h3>
                            <p className="text-sm text-gray-500">{faq.answer}</p>
                        </div>
                    ))}
                </CardContent>
                <CardFooter>
                    <Button variant="outline">
                        <HelpCircle className="mr-2" />
                        Obtenir de l'aide supplémentaire
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default SupportPage;
