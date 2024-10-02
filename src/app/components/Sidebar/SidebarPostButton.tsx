import React from 'react';
import { FaPenNib } from "react-icons/fa6";

const SidebarPostButton = () => {
    return (
        <div className='mt-8'>
            <h1 className='hidden lg:block text-white bg-sky-600 rounded-full px-6 py-3 text-center cursor-pointer transition-transform transform hover:scale-105 hover:shadow-lg'>
                Post
            </h1>

            <div className='p-4 lg:hidden bg-sky-600 rounded-full cursor-pointer flex justify-center items-center transition-transform transform hover:scale-105 hover:shadow-lg'>
                <FaPenNib size={26} color='white' />
            </div>
        </div>
    );
};

export default SidebarPostButton;
