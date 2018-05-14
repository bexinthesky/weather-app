const request = require('request');

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia&key=AIzaSyDgbVoF2ua2Fnh-G_CrJgmP1Y7SGyjS5d8',
    json: true
}, (error, response, body) => {
    console.log(body);
});