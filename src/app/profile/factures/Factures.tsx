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

const invoiceList = [
    { id: 1, date: '2024-10-01', amount: 150, status: 'Payée' },
    { id: 2, date: '2024-09-15', amount: 200, status: 'En attente' },
    { id: 3, date: '2024-08-20', amount: 250, status: 'Payée' },
    { id: 4, date: '2024-07-10', amount: 300, status: 'Annulée' },
];

const totalInvoices = invoiceList.length;
const totalRevenue = invoiceList.reduce((acc, invoice) => acc + invoice.amount, 0);

const InvoicePage = () => {
    const [selectedStatus, setSelectedStatus] = useState("all");

 
    const filteredInvoices = selectedStatus === "all"
        ? invoiceList
        : invoiceList.filter(invoice => invoice.status === selectedStatus);

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col p-6">
            <h1 className="text-2xl font-semibold mb-4">Mes Factures</h1>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
                {/* Card: Number of Invoices */}
                <Card className="w-full shadow-md">
                    <CardHeader>
                        <CardTitle className="text-2xl">{totalInvoices}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-xs text-gray-500">Total des Factures</p>
                    </CardContent>
                </Card>

                {/* Card: Total Revenue */}
                <Card className="w-full shadow-md">
                    <CardHeader>
                        <CardTitle className="text-2xl">{totalRevenue}€</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-xs text-gray-500">Total des Revenus</p>
                    </CardContent>
                </Card>
            </div>

            {/* Invoice List */}
            <div className="bg-white p-4 rounded-lg shadow-md flex-grow">
                <h2 className="text-lg font-semibold mb-4">Liste des Factures</h2>
                
                {/* Filter Dropdown */}
                <Select onValueChange={(value) => setSelectedStatus(value)}>
                    <SelectTrigger className="w-[180px] mb-4">
                        <SelectValue placeholder="Filtrer par statut" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">Tout</SelectItem>
                        <SelectItem value="Payée">Payée</SelectItem>
                        <SelectItem value="En attente">En attente</SelectItem>
                        <SelectItem value="Annulée">Annulée</SelectItem>
                    </SelectContent>
                </Select>

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
                        {filteredInvoices.map(invoice => (
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
