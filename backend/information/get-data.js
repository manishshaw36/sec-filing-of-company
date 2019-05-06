const rp = require('request-promise');

const getData = (req, res) => {
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
        .catch((err) => res.status(err.statusCode).send(err.message));
}

module.exports = getData;
