
import mongoose from "mongoose";


const categorySchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String },
    createdAt: { type: Date, default: Date.now },
});

const CategoriesModel = mongoose.models.categories || mongoose.model("categories", categorySchema);

export default CategoriesModel