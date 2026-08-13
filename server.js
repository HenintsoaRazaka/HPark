require('dotenv').config();
const express = require('express');
const path = require('path');
const http=require('http');
const authRoutes = require('./src/routes/authRoutes');
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'Public')));

app.get('/HPark', (req, res) => {
    res.sendFile(path.join(__dirname, 'Public', 'Login.html'));
});

app.get('/HPark/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'Public', 'dashboard.html'));
});

app.use('/api/HPark', authRoutes);

const PORT = process.env.PORT;
const serveur=http.createServer(app);

serveur.listen(PORT,'0.0.0.0', ()=>{
    console.log("serveur lancé")
});