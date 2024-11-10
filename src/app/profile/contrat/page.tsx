"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter, DrawerClose } from "@/components/ui/drawer";
import CreateContract from "./components/creeContrat"; // Importer le composant de création de contrat

const contractsData = [
  {
    id: 1,
    name: "Contrat Premium",
    price: "50€ / mois",
    duration: "Annuel",
    status: "Actif",
    employee: "Jean Dupont",
    startDate: "2024-01-10",
    nextBillingDate: "2025-01-10",
    description: "Accès complet aux fonctionnalités premium.",
    entreprise: "Nike",
  },
  {
    id: 2,
    name: "Contrat Standard",
    price: "30€ / mois",
    duration: "Mensuel",
    status: "En attente",
    employee: "Claire Martin",
    startDate: "2024-07-01",
    nextBillingDate: "2024-08-01",
    description: "Accès aux fonctionnalités de base.",
  },
  {
    id: 3,
    name: "Contrat Business",
    price: "100€ / mois",
    duration: "Annuel",
    status: "Suspendu",
    employee: "Paul Lemoine",
    startDate: "2024-03-15",
    nextBillingDate: "2025-03-15",
    description: "Support prioritaire pour entreprises.",
  },
];

const SubscriptionPage = () => {
  const [contracts, setContracts] = useState(contractsData); // Initialiser les contrats
  const [selectedContract, setSelectedContract] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isCreateContractOpen, setIsCreateContractOpen] = useState(false); // État pour gérer l'ouverture de CreateContract

  // Filtrer les abonnements par statut, recherche et dates
  const filteredContracts = contracts.filter((contract) => {
    const matchesStatus = selectedStatus === "all" || contract.status.toLowerCase() === selectedStatus;
    const matchesSearch = contract.employee.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStartDate = startDate === "" || new Date(contract.startDate) >= new Date(startDate);
    const matchesEndDate = endDate === "" || new Date(contract.startDate) <= new Date(endDate);

    return matchesStatus && matchesSearch && matchesStartDate && matchesEndDate;
  });

  const handleCancelContract = (contract) => {
    if (contract.status.toLowerCase() === "en attente") {
      alert(`Le contrat "${contract.name}" a été annulé avec succès.`);
      setSelectedContract(null); // Ferme le drawer après annulation
    } else {
      alert("Seuls les contrats en attente peuvent être annulés.");
    }
  };

  const handleManageContract = (contract) => {
    setSelectedContract(contract);
  };

  // Ouvrir le formulaire de création de contrat
  const openCreateContract = () => {
    setIsCreateContractOpen(true);
  };

  // Gérer la création d'un nouveau contrat
  const handleCreateContract = (newContract) => {
    setContracts((prevContracts) => [...prevContracts, { ...newContract, id: prevContracts.length + 1 }]);
    setIsCreateContractOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-semibold text-gray-800">Gestion des Abonnements</h1>
        
        <CreateContract
        isOpen={isCreateContractOpen}
        onClose={() => setIsCreateContractOpen(false)}
        onCreate={handleCreateContract}
      />
      </div>

      {/* Filtres, recherche et dates */}
      <div className="flex flex-col md:flex-row md:space-x-4 mb-6">
        {/* Barre de recherche */}
        <Input
          placeholder="Rechercher par employé"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mb-4 md:mb-0 md:w-1/3"
        />

        {/* Filtre de statut */}
        <Select onValueChange={(value) => setSelectedStatus(value)} value={selectedStatus}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Tous les statuts" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tous</SelectItem>
            <SelectItem value="actif">Actif</SelectItem>
            <SelectItem value="en attente">En attente</SelectItem>
            <SelectItem value="suspendu">Suspendu</SelectItem>
          </SelectContent>
        </Select>

        {/* Filtres par dates */}
        <Input
          type="date"
          placeholder="Date de début"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="mb-4 md:mb-0 md:w-1/3"
        />
        <Input
          type="date"
          placeholder="Date de fin"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="mb-4 md:mb-0 md:w-1/3"
        />
      </div>

      {/* Liste des abonnements filtrés */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredContracts.map((contract) => (
          <Card key={contract.id} className="shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg font-semibold text-gray-800">{contract.name}</CardTitle>
                <Badge variant={contract.status === "Actif" ? "default" : "destructive"}>{contract.status}</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              <p><strong>Prix :</strong> {contract.price}</p>
              <p><strong>Durée :</strong> {contract.duration}</p>
              <p><strong>Employé :</strong> {contract.employee}</p>
              <p><strong>Prochaine facturation :</strong> {contract.nextBillingDate}</p>
              <p><strong>Date de début :</strong> {contract.startDate}</p>
            </CardContent>
            <div className="px-4 py-2 bg-gray-100 flex justify-between items-center">
              <Button size="sm" variant="outline" onClick={() => handleManageContract(contract)}>Gérer</Button>
              {contract.status.toLowerCase() === "en attente" && (
                <Button size="sm" variant="destructive" onClick={() => handleCancelContract(contract)}>Annuler</Button>
              )}
            </div>
          </Card>
        ))}
      </div>

      {/* Drawer pour gérer un contrat */}
      <Drawer>
        {selectedContract && (
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle className="text-2xl font-semibold">Gestion du Contrat : {selectedContract.name}</DrawerTitle>
              <DrawerDescription className="text-gray-500">
                Modifiez les détails du contrat, ou annulez-le.
              </DrawerDescription>
            </DrawerHeader>

            <div className="p-6 space-y-4">
              <p><strong>Description :</strong> {selectedContract.description}</p>
              <p><strong>Prix :</strong> {selectedContract.price}</p>
              <p><strong>Durée :</strong> {selectedContract.duration}</p>
              <p><strong>Date de début :</strong> {selectedContract.startDate}</p>
              <p><strong>Prochaine facturation :</strong> {selectedContract.nextBillingDate}</p>
            </div>

            <DrawerFooter className="space-x-4">
              {selectedContract.status.toLowerCase() === "en attente" && (
                <Button variant="destructive" onClick={() => handleCancelContract(selectedContract)}>Annuler le Contrat</Button>
              )}
              <DrawerClose>
                <Button variant="outline">Fermer</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        )}
      </Drawer>

      {/* Formulaire de création de contrat */}
      
     
    </div>
  );
};

export default SubscriptionPage;
