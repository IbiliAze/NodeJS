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
    if (error) {
        console.log(response)
        return console.log(`ERR: ${error}`);

    } else if (response.statusCode === 404) {
        console.log('Unable to find');

    } else if (response.statusCode === 400) {
        console.log('Bad request');

    } else {
        console.log(`Status code: ${response.statusCode}`);
        const temp = response.body.current.temperature;
        console.log(`The current temp is ${temp}`);
    }
});

console.log('start message')

