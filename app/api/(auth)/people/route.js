import connectDb from "@/app/lib/db"
import { NextResponse } from "next/server"


export const GET = async () => {
    try {
        await connectDb()
        return NextResponse.json({ message: "User API" })
    } catch (error) {
        console.log(error)
    }
}



export const POST = async (req) => {
    try {
        const body = await req.json();
        console.log(body)
    } catch (error) {
        return NextResponse.json({
            message: "User Registration Failed !",
        }, { status: 500 })
    }
}