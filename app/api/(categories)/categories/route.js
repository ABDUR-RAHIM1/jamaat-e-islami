import connectDb from "@/app/lib/db"
import CategoriesModel from "@/app/lib/models/categoriesModel"
import { NextRequest, NextResponse } from "next/server"

/// categories model
export const GET = async () => {
    try {
        await connectDb()
        return NextResponse.json({ message: "User APi" })
    } catch (error) {
        console.log(error)
    }
}



export const POST = async (req) => {
    try {
        await connectDb()
        const { name, description } = await req.json();

        const isExistCategories = await CategoriesModel.findOne({ name })

        if (isExistCategories) {
            return NextResponse.json({ message: `Already Created ${name} Categories` })
        } 

        const newCategori = new CategoriesModel({
            name,
            description
        });

        await newCategori.save()

        return NextResponse.json({
            message: "Categories Created Successfuly",
            data: newCategori
        }, { status: 201 })


    } catch (error) { 
        return NextResponse.json({
            message: "User Registration Failed !",
        }, { status: 500 })
    }
}