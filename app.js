const express = require('express');
const path = require('path');
const app = express();

const publicPath = path.resolve(__dirname, "./public");

app.use(express.static(publicPath));

app.get('/', (req, res) => {
    res.sendFile(path.resolve('./views/home.html'));
});

app.post('/', (req, res) => {
    res.sendFile(path.resolve('./views/home.html'));
});

app.get('/register.html', (req, res) => {
    res.sendFile(path.resolve('./views/register.html'));
});

app.get('/login.html', (req, res) => {
    res.sendFile(path.resolve('./views/login.html'));
});

app.listen(3030, () =>
    console.log('Server running in 3030 port')
);