const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Database
mongoose.connect('mongodb://127.0.0.1:27017/user-manager', { useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to database...');
    }).catch(err => console.log(err));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const UserControl = require('./controllers/userControl');

app.post('/api/user/create', UserControl.create);
app.post('/api/user/update', UserControl.update);
app.get('/api/user/retrieve', UserControl.retrieve);
app.delete('/api/user/delete', UserControl.delete);


app.listen(3000, () => console.log("Servidor começou na porta 3000..."));


