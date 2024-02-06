const { ObjectId } = require('mongodb');
const noteModel = require('../models/noteModel');

const create = async (req, res) => {
    const { title, content } = req.body;
    try {
        if (!title) {
            throw new Error('Title is required');
        }
        const note = await noteModel.create({ title, content });
        res.status(201).json(note)
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
}

const get = async (req, res) => {
    const notes = await noteModel.find().sort({ createdAt: -1 });
    res.status(200).json(notes);
}

const getById = async (req, res) => {
    if (req.params.id !== ObjectId) {
        return res.status(400).json({ message: 'Invalid id' });
    }

    const note = await noteModel.findById(req.params.id);

    if (!note) { return res.status(404).json({ message: 'Note not found' }); }

    res.status(200).json(note);
}

const update = async (req, res) => {
    const { id } = req.params;

    if (req.body.title === '') {
        return res.status(400).json({ message: 'Title is required' });
    }

    const note = await noteModel.findOneAndUpdate({ _id: id }, {
        ...req.body,
        updatedAt: new Date().toISOString()
    }, { new: true });

    if (!note) { return res.status(404).json({ message: 'Note not found' }); }

    res.status(200).json(note);
}


const deleted = async (req, res) => {
    const note = await noteModel.findByIdAndDelete(req.params.id);
    res.status(200).json(note);
}


module.exports = {
    create,
    get,
    getById,
    update,
    deleted
}

