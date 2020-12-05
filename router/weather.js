const express = require("express");
const router = new express.Router();
const request = require('request');

router.get('/weather', async (req, res) => {
    let url="https://api.weatherapi.com/v1/forecast.json?key=3738897fde7047f0a1822737203011&q=20171&days=1"
    request({ url, json: true }, (error, response, body) => {
        if (error) {
            res.status(400).send('Unable to connect to location service');
        }
        else if (body.error) {
            res.status(400).send(body.error);
        }
        else {
            let weather={
                current:{temp_f:body.current.temp_f},
                forecast:body.forecast.forecastday[0].hour.map(hr=>{return {time:hr.time, temp_f:hr.temp_f}})
            }
            res.status(200).send(weather)
        }
    })
})


module.exports = router;