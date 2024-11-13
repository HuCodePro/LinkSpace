import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter, DrawerClose } from "@/components/ui/drawer";
import CreateContract from "./components/creeContrat";

const SubscriptionPage = () => {
  const [contracts, setContracts] = useState([]);
  const [selectedContract, setSelectedContract] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isCreateContractOpen, setIsCreateContractOpen] = useState(false);

  // Charger les contrats depuis le localStorage au montage du composant
  useEffect(() => {
    const storedContracts = localStorage.getItem("contracts");
    if (storedContracts) {
      setContracts(JSON.parse(storedContracts));
    }
  }, []);

  const filteredContracts = contracts.filter((contract) => {
    const matchesStatus = selectedStatus === "all" || contract.status.toLowerCase() === selectedStatus;
    const matchesSearch = contract.employee.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStartDate = startDate === "" || new Date(contract.startDate) >= new Date(startDate);
    const matchesEndDate = endDate === "" || new Date(contract.startDate) <= new Date(endDate);

    return matchesStatus && matchesSearch && matchesStartDate && matchesEndDate;
  });

  const handleCancelContract = (contract) => {
    if (contract.status.toLowerCase() === "en attente") {
      const updatedContracts = contracts.filter((c) => c.id !== contract.id);
      
      // Sauvegarder les contrats mis à jour dans le localStorage
      localStorage.setItem("contracts", JSON.stringify(updatedContracts));
      
      setContracts(updatedContracts);
      setSelectedContract(null);
      alert(`Le contrat "${contract.name}" a été annulé avec succès.`);
    } else {
      alert("Seuls les contrats en attente peuvent être annulés.");
    }
  };

  const handleManageContract = (contract) => {
    setSelectedContract(contract);
  };

  const openCreateContract = () => {
    setIsCreateContractOpen(true);
  };

  const handleCreateContract = (newContract) => {
    const newContracts = [...contracts, { ...newContract, id: contracts.length + 1 }];
    
    // Sauvegarder les contrats dans le localStorage
    localStorage.setItem("contracts", JSON.stringify(newContracts));
    
    setContracts(newContracts);
    setIsCreateContractOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-semibold text-gray-800">Gestion des contrats</h1>
        
        <CreateContract
          isOpen={isCreateContractOpen}
          onClose={() => setIsCreateContractOpen(false)}
          onCreate={handleCreateContract}
        />
      </div>

      {/* Filtres, recherche et dates */}
      <div className="flex flex-col md:flex-row md:space-x-4 mb-6">
        <Input
          placeholder="Rechercher par employé"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mb-4 md:mb-0 md:w-1/3"
        />
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredContracts.map((contract) => (
          <Card key={contract.id}>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>{contract.name}</CardTitle>
                <Badge variant={contract.status === "Actif" ? "default" : "destructive"}>{contract.status}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p><strong>Prix :</strong> {contract.price}</p>
              <p><strong>Durée :</strong> {contract.duration}</p>
              <p><strong>Employé :</strong> {contract.employee}</p>
              <p><strong>Prochaine facturation :</strong> {contract.nextBillingDate}</p>
              <p><strong>Date de début :</strong> {contract.startDate}</p>
            </CardContent>
            <div>
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
              <DrawerTitle>Gestion du Contrat : {selectedContract.name}</DrawerTitle>
              <DrawerDescription>Modifiez les détails du contrat, ou annulez-le.</DrawerDescription>
            </DrawerHeader>
            <div>
              <p><strong>Description :</strong> {selectedContract.description}</p>
              <p><strong>Prix :</strong> {selectedContract.price}</p>
              <p><strong>Durée :</strong> {selectedContract.duration}</p>
              <p><strong>Date de début :</strong> {selectedContract.startDate}</p>
              <Button variant="destructive" onClick={() => handleCancelContract(selectedContract)}>Annuler le contrat</Button>
            </div>
          </DrawerContent>
        )}
      </Drawer>
    </div>
  );
};

export default SubscriptionPage;
