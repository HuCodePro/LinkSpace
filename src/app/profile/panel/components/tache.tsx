import React from 'react';
import { Button } from "@/components/ui/button"

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
const Tache = () => {
     
const Taches = [
    {
      Titre: "Recuter 3 nouvelles personne",
      statusTache: "Fait",
      dateDebut: "08/05/2024",
      dateFin: "25/05/2024",
    },
    {
        Titre: "Recuter 3 nouvelles personne",
        statusTache: "Pas fait",
        dateDebut: "08/05/2024",
        dateFin: "25/05/2024",
      },
      {
        Titre: "Recuter 3 nouvelles personne",
        statusTache: "Fait",
        dateDebut: "08/05/2024",
        dateFin: "25/05/2024",
      },
    
  ]
    return (
        <div>
            <Drawer>
                <DrawerTrigger className='text-sm p-1'>Donner des tâches</DrawerTrigger>
                <DrawerContent>
                    <DrawerHeader>
                        <DrawerTitle>Liste des tâches</DrawerTitle>
                      
                        <Table>
                            <TableCaption>A list of your recent Titres.</TableCaption>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[100px]">Titre</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Date de debut</TableHead>
                                    <TableHead className="text-right">Date de fin</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {Taches.map((Titre) => (
                                    <TableRow key={Titre.Titre}>
                                        <TableCell className="font-medium">{Titre.Titre}</TableCell>
                                        <TableCell>{Titre.statusTache}</TableCell>
                                        <TableCell>{Titre.dateFin}</TableCell>
                                        <TableCell className="text-right">{Titre.dateDebut}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                           
                        </Table>
                    </DrawerHeader>
                    <DrawerFooter>
                        <DrawerClose>
                            <Button variant="outline">Fermer</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>

        </div>
    );
}

export default Tache;
