import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
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

const DetailFacures = ({ invoice }) => {
    const [status, setStatus] = useState(invoice.status);

    // Simuler des détails additionnels de la facture
    const invoiceDetails = {
        client: "Client XYZ",
        description: "Facture pour services de consultation et développement",
        dueDate: "2024-11-01",
        items: [
            { id: 1, description: "Service de consultation", quantity: 2, unitPrice: 100 },
            { id: 2, description: "Développement logiciel", quantity: 1, unitPrice: 300 },
        ]
    };

    // Calculer le montant total des articles
    const calculateTotal = () => invoiceDetails.items.reduce((acc, item) => acc + item.quantity * item.unitPrice, 0);

    // Fonction pour marquer la facture comme "Payée"
    const handlePayment = () => {
        if (status === "En attente") {
            setStatus("Payée");
        }
    };

    return (
        <Drawer>
            <DrawerTrigger className="text-blue-600 underline text-sm p-1 hover:text-blue-800 transition duration-150">Détail</DrawerTrigger>
            
            <DrawerContent className="w-full h-full p-6 bg-white overflow-auto">
                <DrawerHeader className="border-b pb-4 mb-4">
                    <DrawerTitle className="text-2xl font-semibold text-gray-800">Détails de la Facture #{invoice.id}</DrawerTitle>
                    <DrawerDescription className="text-gray-500 mt-2">
                        Date d'émission: {invoice.date} <br />
                        Statut: <span className={`font-semibold ${status === "Payée" ? "text-green-600" : status === "En attente" ? "text-yellow-600" : "text-red-600"}`}>{status}</span>
                    </DrawerDescription>
                </DrawerHeader>

                {/* Section Informations Client */}
                <div className="mt-4">
                    <h3 className="text-lg font-semibold text-gray-700">Client</h3>
                    <p className="text-gray-600">{invoiceDetails.client}</p>
                </div>

                {/* Section Description de la Facture */}
                <div className="mt-4">
                    <h3 className="text-lg font-semibold text-gray-700">Description de la Facture</h3>
                    <p className="text-gray-600">{invoiceDetails.description}</p>
                </div>

                {/* Section Échéance */}
                <div className="mt-4">
                    <h3 className="text-lg font-semibold text-gray-700">Échéance</h3>
                    <p className="text-gray-600">Date d'échéance: {invoiceDetails.dueDate}</p>
                </div>

                {/* Liste des articles */}
                <div className="mt-4">
                    <h3 className="text-lg font-semibold text-gray-700">Articles</h3>
                    <table className="w-full mt-2 bg-gray-100 rounded-md">
                        <thead className="bg-gray-200 text-gray-600 text-sm font-semibold">
                            <tr>
                                <th className="p-2 text-left">Description</th>
                                <th className="p-2 text-left">Quantité</th>
                                <th className="p-2 text-left">Prix Unitaire</th>
                                <th className="p-2 text-right">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {invoiceDetails.items.map(item => (
                                <tr key={item.id} className="border-b border-gray-300">
                                    <td className="p-2 text-gray-700">{item.description}</td>
                                    <td className="p-2 text-gray-700">{item.quantity}</td>
                                    <td className="p-2 text-gray-700">{item.unitPrice}€</td>
                                    <td className="p-2 text-right text-gray-700">{item.quantity * item.unitPrice}€</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Montant Total */}
                <div className="mt-6">
                    <h3 className="text-lg font-semibold text-gray-800">Montant Total: {calculateTotal()}€</h3>
                </div>

                {/* Bouton de paiement si la facture est "En attente" */}
                {status === "En attente" && (
                    <div className="my-4">
                        <Button
                            onClick={handlePayment}
                            className="w-full bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-150"
                        >
                            Payer la facture
                        </Button>
                    </div>
                )}

                {/* Footer avec le bouton de fermeture */}
                <DrawerFooter className="flex justify-end mt-6">
                    <DrawerClose>
                        <Button variant="outline" className="rounded-md border-gray-300 text-gray-600 hover:bg-gray-100 transition duration-150">
                            Fermer
                        </Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
};

export default DetailFacures;
