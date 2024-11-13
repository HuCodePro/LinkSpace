"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";

const CreateContract = ({ onCreate, contracts = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [contractData, setContractData] = useState({
    name: "",
    price: "",
    duration: "Mensuel",
    status: "En attente",
    employee: "",
    entreprise: "",
    description: "",
  });

  // Ouverture et fermeture du dialog
  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  // Gestion des changements dans les champs de saisie
  const handleChange = (field, value) => {
    setContractData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  // Validation et création du contrat
  const handleCreateContract = () => {
    if (contractData.name && contractData.price && contractData.employee) {
      onCreate(contractData); // Appel de la fonction de création de contrat fournie en prop
      closeDialog(); // Ferme le dialog après création
    } else {
      alert("Veuillez remplir tous les champs obligatoires.");
    }
  };

  // Fonction pour suspendre un contrat existant
  const handleSuspendContract = (contractId) => {
    // Trouve le contrat et change son statut à "Suspendu"
    const updatedContracts = contracts.map((contract) =>
      contract.id === contractId ? { ...contract, status: "Suspendu" } : contract
    );
    onCreate(updatedContracts); // Met à jour la liste des contrats avec le nouveau statut
  };

  return (
    <>
      {/* Bouton pour ouvrir le dialog */}
      <Button onClick={openDialog} variant="default" className="mb-4">Créer un Nouveau Contrat</Button>

      {/* Dialog de création de contrat */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-2xl font-semibold">Créer un Contrat</DialogTitle>
            <DialogDescription className="text-gray-500">Veuillez entrer les informations nécessaires pour créer un nouveau contrat.</DialogDescription>
          </DialogHeader>

          <div className="p-6 space-y-4">
            <Input
              placeholder="Nom du contrat"
              value={contractData.name}
              onChange={(e) => handleChange("name", e.target.value)}
            />
            <Input
              type="number"
              placeholder="Prix (ex: 50€)"
              value={contractData.price}
              onChange={(e) => handleChange("price", e.target.value)}
            />
            <Select value={contractData.duration} onValueChange={(value) => handleChange("duration", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Durée" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Mensuel">Mensuel</SelectItem>
                <SelectItem value="Annuel">Annuel</SelectItem>
              </SelectContent>
            </Select>
            <Input
              placeholder="Nom de l'employé"
              value={contractData.employee}
              onChange={(e) => handleChange("employee", e.target.value)}
            />
            <Input
              placeholder="Nom de l'entreprise"
              value={contractData.entreprise}
              onChange={(e) => handleChange("entreprise", e.target.value)}
            />
            <Input
              placeholder="Description du contrat"
              value={contractData.description}
              onChange={(e) => handleChange("description", e.target.value)}
            />
          </div>

          <DialogFooter className="space-x-4">
            <Button onClick={handleCreateContract}>Créer le Contrat</Button>
            <DialogClose>
              <Button variant="outline" onClick={closeDialog}>Annuler</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Affichage des contrats sous forme de cartes */}
      <div className="mt-8">
        {Array.isArray(contracts) && contracts.length > 0 ? (
          contracts.map((contract) => (
            <div key={contract.id} className="mb-4 p-4 border rounded-md">
              <h3 className="font-semibold">{contract.name}</h3>
              <p>Prix: {contract.price} €</p>
              <p>Statut: {contract.status}</p>
              <Button
                variant="outline"
                onClick={() => handleSuspendContract(contract.id)}
                disabled={contract.status === "Suspendu"}
              >
                Suspendre
              </Button>
            </div>
          ))
        ) : (
          <p>Aucun contrat disponible.</p>
        )}
      </div>
    </>
  );
};

export default CreateContract;
