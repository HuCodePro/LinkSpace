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
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
const Permission = () => {
    return (
        <div>
             <Drawer>
                                        <DrawerTrigger className='text-sm p-1'>Modifier les permission</DrawerTrigger>
                                        <DrawerContent>
                                            <DrawerHeader>
                                                <DrawerTitle>Permission actuelle</DrawerTitle>
                                                <DrawerDescription>
                                                    Modifiez les permissions de l'employé pour accéder à des ressources spécifiques
                                                </DrawerDescription>
                                                <Select>
                                                    <SelectTrigger className="w-[180px] m-2">
                                                        <SelectValue placeholder="Commercial" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectGroup>
                                                            <SelectLabel>Roi</SelectLabel>
                                                            <SelectItem value="apple">Administrateur</SelectItem>
                                                            <SelectItem value="banana">Développeur</SelectItem>
                                                            <SelectItem value="blueberry">Manager</SelectItem>
                                                        
                                                        </SelectGroup>
                                                    </SelectContent>
                                                </Select>
                                            </DrawerHeader>
                                            <DrawerFooter>
                                                <Button>Enregistrer les donnée</Button>
                                                <DrawerClose>
                                                    <Button variant="outline">Fermer</Button>
                                                </DrawerClose>
                                            </DrawerFooter>
                                        </DrawerContent>
                                    </Drawer>

        </div>
    );
}

export default Permission;
