"use client"
//@ts-ignore

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import Navbar from '@/app/components/nav/navbar'

const myUser = {
    id: 1,
    firstName: "mohammed",
    name: "Tahri",
    email: "mohammed.tahri@gmail.com",
    phone: "0606060606",
    adresse: "Rue des adresses",
    society: "Link Space",
    accountPro : true, 
    employees: [
        {
            id: 1,
            firstName: "Alice",
            name: "Dupont",
            email: "alice.dupont@example.com"
        },
        {
            id: 2,
            firstName: "Bob",
            name: "Martin",
            email: "bob.martin@example.com"
        },
        {
            id: 3,
            firstName: "Charlie",
            name: "Lemoine",
            email: "charlie.lemoine@example.com"
        },
        {
            id: 4,
            firstName: "David",
            name: "Bernard",
            email: "david.bernard@example.com"
        },
        {
            id: 5,
            firstName: "Eva",
            name: "Lefevre",
            email: "eva.lefevre@example.com"
        },
        {
            id: 6,
            firstName: "Florian",
            name: "Roux",
            email: "florian.roux@example.com"
        },
        {
            id: 7,
            firstName: "Gabrielle",
            name: "Garnier",
            email: "gabrielle.garnier@example.com"
        },
        {
            id: 8,
            firstName: "Hugo",
            name: "Faure",
            email: "hugo.faure@example.com"
        },
        {
            id: 9,
            firstName: "Isabelle",
            name: "Boucher",
            email: "isabelle.boucher@example.com"
        },
        {
            id: 10,
            firstName: "Jérôme",
            name: "Pires",
            email: "jerome.pires@example.com"
        },
    ]
}

function PageInfo() {
    const [position, setPosition] = React.useState("bottom")
    const [currentObjContract, setCurrentObjContract] = useState(55)

    return (
        <div>
            <div className="light:bg-white light:text-white overflow-hidden shadow rounded-lg border">
                <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                        Profile
                        {myUser.accountPro === true ?    <span className="bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-purple-900 m-2 dark:text-purple-300">
                            PRO
                        </span> : null}
                     
                    </h3>
                </div>

                <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                    <dl className="sm:divide-y sm:divide-gray-200 dark:text-white">
                        <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500 dark:text-white">
                                Prénom
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
                                {myUser.firstName}
                            </dd>
                        </div>
                        <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500 dark:text-white">
                                Email
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
                                {myUser.email}
                            </dd>
                        </div>
                        <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium dark:text-white text-gray-500">
                                Numéro
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
                                {myUser.phone}
                            </dd>
                        </div>
                        <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium dark:text-white text-gray-500">
                                Address
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
                                {myUser.adresse}
                            </dd>
                        </div>

                        <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500 dark:text-white">
                                Votre Société
                            </dt>
                            <dd className="mt-1 text-sm flex text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
                                {myUser.society}
                                <AlertDialog>
                                    <AlertDialogTrigger>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="size-5 ml-3"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 9.75 14.25 12m0 0 2.25 2.25M14.25 12l2.25-2.25M14.25 12 12 14.25m-2.58 4.92-6.374-6.375a1.125 1.125 0 0 1 0-1.59L9.42 4.83c.21-.211.497-.33.795-.33H19.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-9.284c-.298 0-.585-.119-.795-.33Z"
                                            />
                                        </svg>
                                    </AlertDialogTrigger>
                                    <AlertDialogContent>
                                        <AlertDialogHeader>
                                            <AlertDialogTitle>
                                                Êtes-vous sûr de vouloir quitter la société
                                                <span className="underline">{myUser.society}</span> ?
                                            </AlertDialogTitle>
                                            <AlertDialogDescription>
                                                Cette action ne peut pas être annulée. Cela supprimera
                                                définitivement votre société actuelle.
                                            </AlertDialogDescription>
                                        </AlertDialogHeader>
                                        <AlertDialogFooter>
                                            <AlertDialogCancel>Annuler</AlertDialogCancel>
                                            <AlertDialogAction>Supprimer quand même</AlertDialogAction>
                                        </AlertDialogFooter>
                                    </AlertDialogContent>
                                </AlertDialog>
                            </dd>
                        </div>

                        <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500 dark:text-white">
                                Employés
                            </dt>
                            <dd className="mt-1 text-sm flex text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
                                {myUser.employees.length}
                                <Sheet>
                                    <SheetTrigger>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="size-5 ml-2 cursor-pointer"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                                            />
                                        </svg>
                                    </SheetTrigger>
                                    <SheetContent side={position}>
                                        <SheetHeader>
                                            <SheetTitle>Liste des employés</SheetTitle>
                                            <SheetDescription>
                                                Vous pouvez gérer vos employés ici
                                            </SheetDescription>
                                        </SheetHeader>
                                        <div className="overflow-auto max-h-80">
                                            {myUser.employees.map((employee) => (
                                                <div
                                                    key={employee.id}
                                                    className="flex justify-between text-gray-900 dark:text-white px-4 py-2"
                                                >
                                                    <span>
                                                        {employee.firstName} {employee.name}
                                                    </span>
                                                    <span>{employee.email}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <SheetFooter>
                                            <SheetClose asChild>
                                                <Button variant="secondary">Fermer</Button>
                                            </SheetClose>
                                        </SheetFooter>
                                    </SheetContent>
                                </Sheet>
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    )
}

export default PageInfo
