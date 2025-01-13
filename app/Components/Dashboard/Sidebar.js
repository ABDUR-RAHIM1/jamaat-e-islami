"use client";
import React, { useState } from "react";
import sidebarItems from "@/app/Data/Dashboard/SidebarItems";
import Link from "next/link";

export default function Sidebar() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleChildItems = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="w-64 h-screen bg-gray-800 text-white flex flex-col absolute md:static top-[55px] left-0">
         
            <ul className="flex-1 p-4 space-y-2">
                {sidebarItems.map((parent, index) => (
                    <li key={index}>
                        <div
                            className="flex justify-between items-center px-3 py-2 text-sm font-medium rounded hover:bg-gray-700 cursor-pointer"
                            onClick={() => toggleChildItems(index)}
                        >
                            {parent.item}
                            <span>{activeIndex === index ? "▲" : "▼"}</span>
                        </div>
                        {activeIndex === index && (
                            <ul className="pl-6 mt-2 space-y-1">
                                {parent.childItems.map((child, childIndex) => (
                                    <li key={childIndex}>
                                        <Link
                                            href={child.path}
                                            className="block px-3 py-1 text-sm font-medium rounded hover:bg-gray-700"
                                        >
                                            {child.item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
