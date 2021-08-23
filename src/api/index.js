const express = require('express');
const app = express();
const port = 8080;
const cors = require('cors');

app.use(cors());

const router = require('./routes/products');

app.use('/api/v1', router);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})