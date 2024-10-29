"use client"

import React from 'react';
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardFooter,
    CardDescription,
} from "@/components/ui/card";
import { TrendingUp } from "lucide-react";
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import { Textarea } from '@/components/ui/textarea';

const contractCount = 55;
const invoiceCount = 99;
const totalRevenue = 18658;
const employeeCount = 12;

const chartData = [
    { month: "January", signed: 20, canceled: 5 },
    { month: "February", signed: 25, canceled: 3 },
    { month: "March", signed: 30, canceled: 6 },
    { month: "April", signed: 35, canceled: 4 },
    { month: "May", signed: 40, canceled: 8 },
    { month: "June", signed: 50, canceled: 7 },
];

const chartConfig = {
    signed: {
        label: "Contrats signés",
        color: "hsl(var(--chart-1))",
    },
    canceled: {
        label: "Contrats annulés",
        color: "hsl(var(--chart-2))",
    },
} satisfies ChartConfig;

const Panel = () => {
    const employeeList = [
        { id: 1, name: 'Jean Dupont', position: 'Développeur' },
        { id: 2, name: 'Marie Curie', position: 'Data Scientist' },
        { id: 3, name: 'Pierre Durand', position: 'Designer' },
        { id: 4, name: 'Louise Moreau', position: 'Chef de Projet' },
    ];

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col p-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
                {/* Carte : Factures */}
                <Card className="w-full shadow-md">
                    <CardHeader>
                        <CardTitle className="text-2xl">{invoiceCount}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-xs text-gray-500">Factures générées</p>
                    </CardContent>
                </Card>

                {/* Carte : Contrats signés */}
                <Card className="w-full shadow-md">
                    <CardHeader>
                        <CardTitle className="text-2xl">{contractCount}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-xs text-gray-500">Contrats signés</p>
                    </CardContent>
                </Card>

                {/* Carte : Chiffre d'affaires */}
                <Card className="w-full shadow-md">
                    <CardHeader>
                        <CardTitle className="text-2xl">{totalRevenue}€</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-xs text-gray-500">Total des Factures</p>
                    </CardContent>
                </Card>

                {/* Carte : Employés */}
                <Card className="w-full shadow-md">
                    <CardHeader>
                        <CardTitle className="text-2xl">{employeeCount}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-xs text-gray-500">Employés actifs</p>
                    </CardContent>
                </Card>
            </div>

            {/* Graphique avec les statistiques des contrats signés et annulés */}
            <Card className="w-full shadow-md mb-6">
                <CardHeader>
                    <CardTitle>Statistiques des Contrats</CardTitle>
                    <CardDescription>
                        Evolution des contrats signés et annulés pour les 6 derniers mois
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <ChartContainer config={chartConfig}>
                        <AreaChart
                            accessibilityLayer
                            data={chartData}
                            margin={{
                                left: 12,
                                right: 12,
                            }}
                        >
                            <CartesianGrid vertical={false} />
                            <XAxis
                                dataKey="month"
                                tickLine={false}
                                axisLine={false}
                                tickMargin={8}
                                tickFormatter={(value) => value.slice(0, 3)}
                            />
                            <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent indicator="dot" />}
                            />
                            <Area
                                dataKey="canceled"
                                type="natural"
                                fill="var(--color-canceled)"
                                fillOpacity={0.4}
                                stroke="var(--color-canceled)"
                                stackId="a"
                            />
                            <Area
                                dataKey="signed"
                                type="natural"
                                fill="var(--color-signed)"
                                fillOpacity={0.4}
                                stroke="var(--color-signed)"
                                stackId="a"
                            />
                        </AreaChart>
                    </ChartContainer>
                </CardContent>
                <CardFooter>
                    <div className="flex w-full items-start gap-2 text-sm">
                        <div className="grid gap-2">
                            <div className="flex items-center gap-2 font-medium leading-none">
                                Tendance à la hausse de 5.2% ce mois <TrendingUp className="h-4 w-4" />
                            </div>
                            <div className="flex items-center gap-2 leading-none text-muted-foreground">
                                Janvier - Juin 2024
                            </div>
                        </div>
                    </div>
                </CardFooter>
            </Card>

            {/* Liste des employés */}
            <div className="bg-white p-4 rounded-lg shadow-md flex-grow">
                <h2 className="text-lg font-semibold mb-4">Liste des Employés</h2>
                <ul>
                    {employeeList.map(employee => (
                        <li
                            key={employee.id}
                            className="flex items-center justify-between p-3 border-b last:border-b-0"
                        >
                            <div>
                                <p className="text-sm font-medium">{employee.name}</p>
                                <p className="text-xs text-gray-500">{employee.position}</p>
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <button className="text-blue-500 text-xs">Envoyer une notification</button>
                                    </DialogTrigger>
                                    <DialogContent className="sm:max-w-[425px]">
                                        <DialogHeader>
                                            <DialogTitle>Envoyer un message a {employee.name}</DialogTitle>
                                            <DialogDescription>
                                                Le message sera envoyé directement dans les notidications  de {employee.name}
                                            </DialogDescription>
                                        </DialogHeader>
                                        <div className="grid gap-4 py-4">
                                            <div className="grid grid-cols-4 items-center gap-4">
                                                <Label htmlFor="name" className="text-right">
                                                    Votre message
                                                </Label>
                                                <Textarea id="name" value="Pedro Duarte" className="col-span-3" />
                                            </div>

                                        </div>
                                        <DialogFooter>
                                            <Button type="submit">Envoyer le message</Button>
                                        </DialogFooter>
                                    </DialogContent>
                                </Dialog>
                            </div>

                            <button className="text-blue-500 text-xs">Gérer</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Panel;
