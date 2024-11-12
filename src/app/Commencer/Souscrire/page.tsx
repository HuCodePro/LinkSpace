import Footer from '@/app/components/footer/footer';
import Navbar from '@/app/components/nav/navbar';
import Souscrire from '@/app/components/souscrire/souscrire';
import React from 'react';


const Page = () => {
    return (
        <div>
            <Navbar/>
            <Souscrire/>
            <Footer/>
        </div>
    );
}

export default Page;
