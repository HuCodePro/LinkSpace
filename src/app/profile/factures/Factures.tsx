"use client";

import React, { useState } from 'react';
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
} from "@/components/ui/card";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import DetailFacures from './components/Detail';

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
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-gray-200 p-6">
            <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Mes Factures</h1>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mb-10 w-full max-w-4xl">
                {/* Card: Number of Invoices */}
                <Card className="w-full shadow-lg text-center p-6 bg-white rounded-lg">
                    <CardHeader>
                        <CardTitle className="text-3xl font-bold text-blue-600">{totalInvoices}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-gray-500">Total des Factures</p>
                    </CardContent>
                </Card>

                {/* Card: Total Revenue */}
                <Card className="w-full shadow-lg text-center p-6 bg-white rounded-lg">
                    <CardHeader>
                        <CardTitle className="text-3xl font-bold text-green-600">{totalRevenue}€</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-gray-500">Total des Revenus</p>
                    </CardContent>
                </Card>
            </div>

            {/* Invoice List */}
            <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-4xl">
                <h2 className="text-2xl font-semibold mb-6 text-center text-gray-700">Liste des Factures</h2>
                
                {/* Filter Dropdown */}
                <div className="flex justify-center mb-4">
                    <Select onValueChange={(value) => setSelectedStatus(value)}>
                        <SelectTrigger className="w-[200px] mb-4">
                            <SelectValue placeholder="Filtrer par statut" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">Tout</SelectItem>
                            <SelectItem value="Payée">Payée</SelectItem>
                            <SelectItem value="En attente">En attente</SelectItem>
                            <SelectItem value="Annulée">Annulée</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Date</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Montant</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Statut</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {filteredInvoices.map(invoice => (
                            <tr key={invoice.id} className="hover:bg-gray-100 transition duration-150">
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{invoice.date}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{invoice.amount}€</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                    <span className={`py-1 px-3 rounded-full text-xs font-semibold ${
                                        invoice.status === 'Payée' ? 'bg-green-100 text-green-800' :
                                        invoice.status === 'En attente' ? 'bg-yellow-100 text-yellow-800' :
                                        'bg-red-100 text-red-800'
                                    }`}>
                                        {invoice.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                    <DetailFacures invoice={invoice} />
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
