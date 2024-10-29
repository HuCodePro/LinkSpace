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
import { Lock, CheckCircle } from "lucide-react"; // Icônes pour l'interface

const SecurityPage = () => {
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [is2FAEnabled, setIs2FAEnabled] = useState(false);

    const handlePasswordChange = () => {
        // Ici, vous ajouteriez la logique pour changer le mot de passe
        console.log("Changement de mot de passe demandé", {
            currentPassword,
            newPassword,
            confirmPassword,
        });
    };

    const toggle2FA = () => {
        // Ici, vous ajouteriez la logique pour activer/désactiver 2FA
        setIs2FAEnabled(prev => !prev);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col p-6">
            <h1 className="text-2xl font-semibold mb-4">Sécurité de Mon Compte</h1>

            {/* Carte : Changement de mot de passe */}
            <Card className="w-full shadow-md mb-6">
                <CardHeader>
                    <CardTitle>Changer le Mot de Passe</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <Input
                            type="password"
                            placeholder="Mot de passe actuel"
                            value={currentPassword}
                            onChange={(e) => setCurrentPassword(e.target.value)}
                        />
                        <Input
                            type="password"
                            placeholder="Nouveau mot de passe"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                        <Input
                            type="password"
                            placeholder="Confirmer le nouveau mot de passe"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <Button onClick={handlePasswordChange}>Changer le Mot de Passe</Button>
                    </div>
                </CardContent>
            </Card>

            {/* Carte : Authentification à Deux Facteurs */}
            <Card className="w-full shadow-md mb-6">
                <CardHeader>
                    <CardTitle>Authentification à Deux Facteurs (2FA)</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>
                        {is2FAEnabled ? "L'authentification à deux facteurs est activée." : "L'authentification à deux facteurs est désactivée."}
                    </p>
                    <Button onClick={toggle2FA} variant={is2FAEnabled ? "destructive" : "default"}>
                        {is2FAEnabled ? "Désactiver 2FA" : "Activer 2FA"}
                    </Button>
                </CardContent>
            </Card>

            {/* Carte : Gestion des appareils */}
            <Card className="w-full shadow-md mb-6">
                <CardHeader>
                    <CardTitle>Appareils Connectés</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>Voici la liste des appareils actuellement connectés à votre compte :</p>
                    {/* Exemple de liste d'appareils */}
                    <ul className="list-disc pl-5">
                        <li>Ordinateur Portable - Chrome (Dernière connexion : 2024-10-29)</li>
                        <li>Smartphone - Safari (Dernière connexion : 2024-10-28)</li>
                    </ul>
                </CardContent>
                <CardFooter>
                    <Button variant="outline">Déconnecter tous les appareils</Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default SecurityPage;
