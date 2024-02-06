const noteModel = require('../models/noteModel');

const create = async (req, res) => {
    const { title, content } = req.body;
    try {
        if (!title) {
            throw new Error('Title is required');
        }
        const note = await noteModel.create({title, content});
        res.status(201).json(note)
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
}

const get = async (req, res) => {
    const notes = await noteModel.find();
    res.json(notes);
}

module.exports = {
    create,
    get
}

