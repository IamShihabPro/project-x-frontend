"use client";

import React from 'react';
import { IconType } from 'react-icons';

type SidebarItemProps = {
    label: string;
    icon: IconType;
    href?: string;
    onClick?: () => void;
    active?: boolean;
};

const SidebarItems: React.FC<SidebarItemProps> = ({ label, icon: Icon, href, onClick, active }) => {
    const content = (
       <>
             <div 
            className={`flex items-center space-x-3 p-3 rounded-xl cursor-pointer transition-all duration-300 
            ${active ? 'bg-blue-500 text-white' : 'hover:bg-gray-800 hover:bg-opacity-30'} group`}
            onClick={onClick}
        >
                {/* Icon container */}
                <div className={`flex items-center justify-center rounded-full p-3 transition-colors duration-300 
                    ${active ? 'bg-white' : 'bg-gray-900 group-hover:bg-opacity-20'}`}
                >
                    <Icon size={24} color={active ? "#1DA1F2" : "white"} />
                </div>

                {/* Label for large screens */}
                <div className="hidden lg:flex lg:items-center lg:space-x-3">
                    <span className={`text-md font-semibold transition-colors duration-300 
                        ${active ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
                        {label}
                    </span>
                </div>
            </div>
       </>
    );

    return href ? (
        <a href={href} className="w-full">
            {content}
        </a>
    ) : (
        content
    );
};

export default SidebarItems;
