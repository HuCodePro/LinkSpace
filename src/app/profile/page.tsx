"use client"

import React, { useState } from 'react';
import BarProfile from './components/barProfile';
import Navbar from '../components/nav/navbar';
//@ts-ignore
import InfoUser from './layout/infoUser';
import PanelUser from './layout/PanelUser';


const Page = () => {
    const [showInfoPage, setShowInfoPage] = useState(false);
    const [showPanelPage, setShowPanelPage] = useState(false);


    const handleItemClick = (item) => {
        if (item === "Info") {
            setShowInfoPage(true);
            setShowPanelPage(false);
        } else if (item === "Panel") {
            setShowInfoPage(false);
            setShowPanelPage(true);
        }
    };
    return (

        <div>
            <Navbar />
            <div className={"flex"}>
                <BarProfile onItemClick={handleItemClick} />
                {showInfoPage && <InfoUser />}
                {showPanelPage && <PanelUser />}

            </div>

        </div>
    );
}

export default Page;
