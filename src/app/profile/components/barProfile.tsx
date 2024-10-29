import React from 'react';

const BarProfile = ({ setSelectedSection }) => {
    return (
        <div className='w-[200px] h-screen bg-gray-50 justify-content-center text-center'>
            <p className='uppercase mt-5'>Votre Compte</p>
            <div id='element-list'>
                <ul>
                    <li
                        className='uppercase m-5 cursor-pointer text-[#1E40AF]'
                        onClick={() => setSelectedSection('info')}
                    >
                        Mes informations
                    </li>
                    <li
                        className='uppercase m-5 cursor-pointer text-[#1E40AF]'
                        onClick={() => setSelectedSection('panel')}
                    >
                        Panel(PRO)
                    </li>
                    <li
                        className='uppercase m-5 cursor-pointer text-[#1E40AF]'
                        onClick={() => setSelectedSection('abonnements')}
                    >
                        Mes abonnements
                    </li>
                    <li
                        className='uppercase m-5 cursor-pointer text-[#1E40AF]'
                        onClick={() => setSelectedSection('factures')}
                    >
                        Mes factures
                    </li>
                    <li
                        className='uppercase m-5 cursor-pointer text-[#1E40AF]'
                        onClick={() => setSelectedSection('securite')}
                    >
                        Sécurité du compte
                    </li>
                    <li
                        className='uppercase m-5 cursor-pointer text-[#1E40AF]'
                        onClick={() => setSelectedSection('notifications')}
                    >
                        Mes notifications
                    </li>
                    <li
                        className='uppercase m-5 cursor-pointer text-[#1E40AF]'
                        onClick={() => setSelectedSection('support')}
                    >
                        Support client
                    </li>
                    <li className='uppercase m-5 cursor-pointer text-red-700'>
                        Déconnexion
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default BarProfile;
