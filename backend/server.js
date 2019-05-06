const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const companyInfo = require('./information/company-info');
const newsInfo = require('./information/news-info');
const getData = require('./information/get-data');

const API_PORT = 4001;
const app = express();
app.use(cors());

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));



// this is our get method for fetching data
// here we are geting list of company
app.get("/getdata", (req, res) => {
    getData(req, res);
});

// here we are getting company information
app.get("/getinfo", (req, res) => {
    companyInfo(req, res);
});

// here we are getting company news
app.get("/newsInfo/", (req, res) => {
    newsInfo(req, res)
});

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
