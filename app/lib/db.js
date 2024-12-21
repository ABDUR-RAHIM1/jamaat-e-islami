import mongoose from "mongoose"
import { MONGO_URL } from "../constans/constans"

const connectDb = async () => {
    try {
        await mongoose.connect(MONGO_URL)
        console.log("Databse Connect")
    } catch (error) {
        console.log("Database Not Connect" + error.message)
    }
}

export default connectDb