"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";

const CreateContract = ({ onCreate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [contractData, setContractData] = useState({
    name: "",
    price: "",
    duration: "Mensuel",
    status: "Actif",
    employee: "",
    startDate: null,
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
    if (contractData.name && contractData.price && contractData.employee && contractData.startDate) {
      onCreate(contractData); // Appel de la fonction de création de contrat fournie en prop
      closeDialog(); // Ferme le dialog après création
    } else {
      alert("Veuillez remplir tous les champs obligatoires.");
    }
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
            <Select onValueChange={(value) => handleChange("duration", value)} value={contractData.duration}>
              <SelectTrigger>
                <SelectValue placeholder="Durée" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Mensuel">Mensuel</SelectItem>
                <SelectItem value="Annuel">Annuel</SelectItem>
              </SelectContent>
            </Select>
            <Select onValueChange={(value) => handleChange("status", value)} value={contractData.status}>
              <SelectTrigger>
                <SelectValue placeholder="Statut" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Actif">Actif</SelectItem>
                <SelectItem value="En attente">En attente</SelectItem>
                <SelectItem value="Suspendu">Suspendu</SelectItem>
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

            {/* Sélection de la date avec le composant Calendar */}
            <Popover>
              <PopoverTrigger asChild>
                <Input
                  placeholder="Date de début"
                  value={contractData.startDate ? contractData.startDate.toLocaleDateString() : ""}
                  readOnly
                  className="cursor-pointer"
                />
              </PopoverTrigger>
              <PopoverContent>
                <Calendar
                  selected={contractData.startDate}
                  onSelect={(date) => handleChange("startDate", date)}
                  className="w-full"
                />
              </PopoverContent>
            </Popover>

            <Input
              placeholder="Description du contrat"
              value={contractData.description}
              onChange={(e) => handleChange("description", e.target.value)}
            />
          </div>

          <DialogFooter className="space-x-4">
            <Button  onClick={handleCreateContract}>Créer le Contrat</Button>
            <DialogClose>
              <Button variant="outline" onClick={closeDialog}>Annuler</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CreateContract;
