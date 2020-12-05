const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const weatherRoute = require('./router/weather');

const cors = require('cors');
app.use(cors());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST, GET");
    res.header("Access-Control-Allow-Header", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.use(express.json());

app.use(weatherRoute);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});