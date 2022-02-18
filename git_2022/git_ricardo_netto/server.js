const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send({ message: 'Olá mundo estou funcionando!'});
});

app.listen(3000, () => {
    console.log('Api rondando na porta 3001')
});