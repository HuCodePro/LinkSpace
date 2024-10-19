import React from 'react';

const BarProfile = () => {
    return (
        <div className='w-[200px] absolute h-full  bg-gray-50 justify-content-center text-center'>
            <p className='uppercase mt-5'>Votre profile</p>
            <div id='element-list'>
                <ul>
                    <li className='uppercase m-5 font-[15px]'>element</li>
                    <li className='uppercase m-5'>element</li>
                    <li className='uppercase m-5'>element</li>
                    <li className='uppercase m-5'>element</li>
                    <li className='uppercase m-5'>element</li>
                </ul>
            </div>
        </div>
    );
}

export default BarProfile;
