const express = require('express');
const pfinApiConfig = require('config').get('pfinApi');

//express setup
const app = express();
const port = pfinApiConfig.port;

//express middlewares
app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req ,res) => {
    res.send('Hello pfinApi');
});

app.listen(port, () => {
    console.log(`listening on port: ${port}`);
});
