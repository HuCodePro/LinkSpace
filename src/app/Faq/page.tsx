import React from 'react';
import Navbar from '../components/nav/navbar';
import Footer from '../components/footer/footer';
import FAQ from '../components/faq/Faq';

const Page = () => {
    return (
        <div>
            <Navbar/>
            <div className='mt-20'><FAQ/></div>
            <Footer/>
        </div>
    );
}

export default Page;
