import React from 'react';
import FormContact from '../components/form/formContact';
import Footer from '../components/footer/footer';
import Navbar from '../components/nav/navbar';

const Page = () => {
    return (
        <div>
            <div className='relative z-50'>
                <Navbar />
            </div>
            <div className="relative z-10 min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url("/assets/images/backgroundcontact.avif")' }}>
                <div className="absolute inset-0 bg-black opacity-30"></div> {/* Overlay pour assombrir l'image de fond */}
                <div className="p-20 relative z-20">
                    <FormContact />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Page;
