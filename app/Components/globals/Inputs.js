"use client"
import React from 'react';

export default function Inputs(props) {
    const { width, type, name, label , inputChange } = props;
    return (
        <div className={`${width ? width : "w-full"} mb-4`}>
            <label
                className="block mb-2 text-sm font-medium text-gray-700"
                htmlFor={name}
            >
                {label}
            </label>
            <input
                type={type || "text"}
                name={name}
                id={name}
                onChange={inputChange}
                className="w-full py-3 px-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-green-700 transition duration-200"
            />
        </div>
    );
}
