"use client"
import React, { useEffect, useState } from 'react'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'

function Navbar() {
    const [state, setState] = useState(false)

    // Navigation items
    const navigation = [
        { title: "Souscription", path: "/Souscription" },
        { title: "Contact", path: "/Contact" },
        { title: "FAQ", path: "/Faq" }
    ]

    useEffect(() => {
        document.onclick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (!target.closest(".menu-btn")) setState(false);
        };
    }, [])

    return (
        <nav className={`bg-white z-30 md:text-sm shadow-xl ${state ? "shadow-2xl rounded-xl border mx-2 mt-2 md:shadow-none md:border-none md:mx-2 md:mt-0" : ""}`}>
            <div className="flex items-center justify-center px-4 py-2 md:px-8 md:py-4 mx-auto w-full">
                <div className="flex items-center justify-between w-full max-w-7xl">
                    <div className="flex items-center">
                        <a href="/">
                            <img
                                src="/assets/images/logo.png"
                                width={95}
                                height={40}
                                alt="LinkSpace logo"
                            />
                        </a>
                    </div>
                    {/* Menu mobile */}
                    <div className="md:hidden">
                        <button className="menu-btn text-blue-600 hover:text-blue-800"
                            onClick={() => setState(!state)}
                        >
                            {state ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            )}
                        </button>
                    </div>
                    {/* Menu desktop */}
                    <div className={`flex-1 md:flex items-center justify-center space-x-6 ${state ? 'block' : 'hidden'} md:block`}>
                        <ul className="flex justify-center items-center space-x-6">
                            {/* Popover for 'Commencer' */}
                            <li className="text-lg text-gray-700 hover:text-blue-600 relative group">
                                <Popover>
                                    <PopoverButton className="block text-lg font-semibold text-gray-700 hover:text-blue-600 focus:outline-none">
                                        Commencer
                                    </PopoverButton>
                                    <PopoverPanel
                                        className="absolute divide-y divide-gray-300 rounded-lg bg-white shadow-lg text-sm w-64 mt-2"
                                    >
                                        <div className="p-3">
                                            <a className="block text-black hover:text-blue-600 rounded-lg py-2 px-3 hover:bg-blue-100" href="/Commencer/Introduction">
                                                <p className="font-semibold">Introduction</p>
                                            </a>
                                            <a className="block text-black hover:text-blue-600 rounded-lg py-2 px-3 hover:bg-blue-100" href="/Commencer/Souscrire">
                                                <p className="font-semibold">Pourquoi souscrire ?</p>
                                            </a>
                                            <a className="block text-black hover:text-blue-600 rounded-lg py-2 px-3 hover:bg-blue-100" href="/Faq">
                                                <p className="font-semibold">FAQ</p>
                                            </a>
                                        </div>
                                    </PopoverPanel>
                                </Popover>
                                {/* Underline effect */}
                                <span className="absolute left-0 bottom-0 top-7 h-1 w-full bg-blue-600 scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"></span>
                            </li>

                            {navigation.map((item, idx) => (
                                <li key={idx} className="text-lg text-gray-700 hover:text-blue-600 relative group">
                                    <a href={item.path} className="block">
                                        {item.title}
                                    </a>
                                    {/* Underline effect */}
                                    <span className="absolute left-0 top-7 h-1 w-full bg-blue-600 scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"></span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Actions (login/signup) */}
                    <div className="flex gap-x-6 items-center justify-center space-y-6 md:space-y-0 md:flex md:mt-0">
                        <a href="/signin" className="block text-gray-700 hover:text-blue-600">
                            Se connecter
                        </a>
                        <a href="/signup" className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-blue-800 hover:bg-blue-600 active:bg-gray-900 rounded-full md:inline-flex">
                            S'inscrire
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
