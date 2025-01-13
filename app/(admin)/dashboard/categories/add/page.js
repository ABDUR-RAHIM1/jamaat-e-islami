"use client"
import Inputs from '@/app/Components/globals/Inputs'
import DHeading from '@/app/Utilities/DHeading'
import Spinner from '@/app/Utilities/Spinner'
import React, { useState } from 'react'

export default function CategorieAdd() {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        description: ""
    })
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    };

    const handleSubmitCategories = (e) => {
        e.preventDefault();
        try {
            console.log(formData);
            alert("proccesing...")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className=' px-5 w-full min-h-screen '>
            <form
                onSubmit={handleSubmitCategories}
                className='w-full  md:w-[50%] m-auto my-20 dContent p-3 rounded-md'
            >
                <DHeading text={"Craete a Categories"} />

                <Inputs
                    name="name"
                    label="Categories Name"
                    inputChange={handleInputChange}
                />

                <Inputs
                    name="description"
                    label="Categories Description"
                    inputChange={handleInputChange}
                />
                <button className=' bgPrimary my-3 w-full'>
                    {
                        loading ?
                            <Spinner />
                            : "Submit"
                    }
                </button>
            </form>
        </div>
    )
}
