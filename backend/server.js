const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const rp = require('request-promise');

const API_PORT = 4001;
const app = express();
app.use(cors());

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));



// this is our get method
// this method fetches all available data in our database
app.get("/getdata", (req, res) => {
    const options = {
        url: 'https://mapping-api.herokuapp.com/exchange/NASDAQ%7CNYSE',
        json: true
    }
    rp(options)
        .then((data)=>{ 
            res.send({
                'company': data
            });
        })
        .catch((err) => res.send(err));
});

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));