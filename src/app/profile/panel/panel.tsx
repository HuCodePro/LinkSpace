"use client"

import React from 'react';
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

const contractCount = 55;
const invoiceCount = 99;
const totalRevenue = 18658;
const employeeCount = 12;

const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
];

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "hsl(var(--chart-1))",
    },
    mobile: {
        label: "Mobile",
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

            {/* Graphique avec shadcn/ui */}
            <Card className="w-full shadow-md mb-6">
                <CardHeader>
                    <CardTitle>Area Chart - Stacked</CardTitle>
                    <CardDescription>
                        Showing total visitors for the last 6 months
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
                                dataKey="mobile"
                                type="natural"
                                fill="var(--color-mobile)"
                                fillOpacity={0.4}
                                stroke="var(--color-mobile)"
                                stackId="a"
                            />
                            <Area
                                dataKey="desktop"
                                type="natural"
                                fill="var(--color-desktop)"
                                fillOpacity={0.4}
                                stroke="var(--color-desktop)"
                                stackId="a"
                            />
                        </AreaChart>
                    </ChartContainer>
                </CardContent>
                <CardFooter>
                    <div className="flex w-full items-start gap-2 text-sm">
                        <div className="grid gap-2">
                            <div className="flex items-center gap-2 font-medium leading-none">
                                Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                            </div>
                            <div className="flex items-center gap-2 leading-none text-muted-foreground">
                                January - June 2024
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
