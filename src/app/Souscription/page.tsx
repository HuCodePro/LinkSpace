"use client"
import React from 'react';
import Navbar from '../components/nav/navbar';
import Footer from '../components/footer/footer';
import Cardsabonnement from '../components/card/cardAbonnement';

const Page = () => {
    return (
        <div>
            <Navbar />
            <div className='shadow-md m-20 p-6'><Cardsabonnement/></div>
            <Footer/>
        </div>
    );
}

export default Page;
