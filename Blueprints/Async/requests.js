const request = require('request');

const url = 'http://api.weatherstack.com';
const api_key = '774e6c2166990c9ef0de1c4eca7977c4';
const query = 'london'
const uri = `${url}/current?access_key=${api_key}&query=${query}`

const headers = {
    'Content-Type': "application/json",
    Accept: "application/json"
};



request({uri: uri, json: true, headers:headers}, (error, response) => {
    console.log(response.body.current);
});

