import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
    title: { type: String, required: true },
    image: String,
    parentId: { type: String, default: '0' },
}, {
    timestamps: true,
});

const Category = mongoose.model('Category', categorySchema);

export default Category;