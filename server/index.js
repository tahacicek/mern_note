const express = require('express');
const mongoose = require('mongoose');
const env = require('dotenv');
const notRouter = require('./routes/notes');
const notModel = require('./models/noteModel');

env.config();
const app = express();
port = process.env.PORT || 4000;

app.use((req, res, next) => {
    // res.header('Access-Control-Allow-Origin', '*');
    // res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    // res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    console.log(`${req.method} - ${req.path}`);
    next();
});

app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
}).then(() => {
    app.listen(port, () => {
        console.log(`Database connected. Server is running on port http://localhost:${port}`);
    });
}).catch((err) => {
    console.log(err);
});

app.use('/api/notes', notRouter);

