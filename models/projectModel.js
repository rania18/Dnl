import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },
    desc: { type: String, required: true },
}, {
    timestamps: true,
});

const Project = mongoose.model('Project', projectSchema);

export default Project;