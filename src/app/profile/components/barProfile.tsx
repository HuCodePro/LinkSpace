import React, { useState } from 'react';

const BarProfile = ({ onItemClick }) => {
    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemClick = (item) => {
        setSelectedItem(item);
        onItemClick(item);
    };
    return (
        <div className='w-[200px]  h-full  bg-gray-50 justify-content-center text-center'>
            <p className='uppercase mt-5'>Votre Compte</p>
            <div id='element-list'>
                <ul>
                    <li onClick={() => handleItemClick("Info")} className='uppercase m-5 cursor-pointer text-[#1E40AF] '>Mes informations</li>
                    <li onClick={() => handleItemClick("Panel")} className='uppercase m-5 cursor-pointer text-[#1E40AF]'>Panel(PRO)</li>
                    <li className='uppercase m-5 cursor-pointer text-[#1E40AF]'>Mes abonnements</li>
                    <li className='uppercase m-5 cursor-pointer text-[#1E40AF]'>Mes factures</li>
                    <li className='uppercase m-5 cursor-pointer text-[#1E40AF]'>Sécurité du compte</li>
                    <li className='uppercase m-5 cursor-pointer text-[#1E40AF]'>Mes notifications</li>
                    <li className='uppercase m-5 cursor-pointer text-[#1E40AF]'>Support client</li>
                    <li className='uppercase m-5 cursor-pointer text-red-700'>Déconnexion</li>


                </ul>
            </div>
        </div>
    );
}

export default BarProfile;
