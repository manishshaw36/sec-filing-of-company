const rp = require('request-promise');
const NewsAPI = require('newsapi');

const newsapi = new NewsAPI('b9ef8fe293404a27995f80ff9e3f6355');

const newsInfo = (req,res) => {
    let {query: {ticker_key : tickerKey }} = req
    const options = {
        url: 'https://mapping-api.herokuapp.com/cik/' + tickerKey,
        json: true
    }
    rp(options)
        .then((data)=>{
            const companyName = data[0].name; 
            newsapi.v2.everything({
                q: companyName,
                language: 'en',
            }).then(response => {
                res.send({
                    'news': response.articles,
                    'name': companyName
                }) 
            }).catch((err) => res.status(err.statusCode).send(err.message));
        })
        .catch((err) => res.status(err.statusCode).send(err.message));
}

module.exports = newsInfo;
