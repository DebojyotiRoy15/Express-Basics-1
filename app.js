const express = require('express');

const app = express();

/* app.use((req, res, next) => {
    console.log('Middleware 1');
    next();
})

app.use((req, res, next) => {
    console.log('Middleware 2');
}) */

app.use('/user', (req, res, next) => {
    res.send('<h1>User</h1>');
})

app.use('/', (req, res, next) => {
    res.send('<h1>Homepage</h1>');
})

app.listen(3001);