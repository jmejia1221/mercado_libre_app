const express = require('express');
const app = express();
const port = 8080;

const router = require('./routes/products');

app.use('/', router);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})