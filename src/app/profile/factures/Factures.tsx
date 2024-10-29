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
import { TrendingUp } from "lucide-react";

const invoiceList = [
    { id: 1, date: '2024-10-01', amount: 150, status: 'Payée' },
    { id: 2, date: '2024-09-15', amount: 200, status: 'En attente' },
    { id: 3, date: '2024-08-20', amount: 250, status: 'Payée' },
    { id: 4, date: '2024-07-10', amount: 300, status: 'Annulée' },
];

const totalInvoices = invoiceList.length;
const totalRevenue = invoiceList.reduce((acc, invoice) => acc + invoice.amount, 0);

const InvoicePage = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col p-6">
            <h1 className="text-2xl font-semibold mb-4">Mes Factures</h1>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
                {/* Carte : Nombre de Factures */}
                <Card className="w-full shadow-md">
                    <CardHeader>
                        <CardTitle className="text-2xl">{totalInvoices}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-xs text-gray-500">Total des Factures</p>
                    </CardContent>
                </Card>

                {/* Carte : Chiffre d'affaires Total */}
                <Card className="w-full shadow-md">
                    <CardHeader>
                        <CardTitle className="text-2xl">{totalRevenue}€</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-xs text-gray-500">Total des Revenus</p>
                    </CardContent>
                </Card>
            </div>

            {/* Liste des factures */}
            <div className="bg-white p-4 rounded-lg shadow-md flex-grow">
                <h2 className="text-lg font-semibold mb-4">Liste des Factures</h2>
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Montant</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {invoiceList.map(invoice => (
                            <tr key={invoice.id}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{invoice.date}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{invoice.amount}€</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{invoice.status}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    <Button variant="outline" size="sm">Détails</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default InvoicePage;
