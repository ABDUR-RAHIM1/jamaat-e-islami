"use client"
import React, { useState } from 'react'
import { IoIosMenu } from "react-icons/io";
export default function DashboardHeader() {

    const [isOpen, setIsOpen] = useState(false);

    const handleOpenSidebar = () => {
        setIsOpen(!isOpen)
    }


    return (
        <div className=' bg-gray-200 w-full flex items-center justify-between sticky top-0 overflow-hidden'>
            <div className='w-64 h-full py-5 text-center text-white bg-gray-800 border-b border-gray-700'>
                <h3 className='hidden md:block'>  Sidebar Menu</h3>
                <div onClick={handleOpenSidebar} className=' block md:hidden px-5 cursor-pointer'>
                    <IoIosMenu className=' text-3xl' />

                </div>
            </div>
            <div className=' flex-1 px-3 flex items-center justify-between'>
                <p>login</p>
                <div className='w-16 h-16 rounded-full border-2 flex items-center justify-center font-bold cursor-pointer'>A</div>
            </div>
        </div>
    )
}
