const express = require('express');
const app = express();
const port = 8080;
const axios = require('axios');

app.get('/', (req, res) => {
    axios.get('https://api.mercadolibre.com/sites/MLA/search?q=${silla}&&limit=4')
        .then(response => {
            res.status(200).json(response.data);
            // res.json(response)
        })
        .catch(err => {
            res.status(500).json({ message: err });
        })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})