const rp = require('request-promise');

function parse(str) {
    const y = str.substr(0,4),
        m = str.substr(4,2),
        d = str.substr(6,2);
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];
    return(`${monthNames[parseInt(m) - 1]} ${d}, ${y}`);
}


const companyInfo = (req,res) => {
    let {query: {ticker_key : tickerKey }} = req
    const options = {
        url: `http://www.rankandfiled.com/data/filer/${tickerKey}/all?start=0`,
        json: true
    }
    let companyDataList = [];
    rp(options)
        .then((data)=>{ 
            for(let companyData of data.filings){
                if(companyData.includes('*SEC*') || companyData.includes('*Q*')){
                    companyData = companyData.replace('*SEC*', '*SEC Correspondence*');
                    companyData = companyData.replace('*Q*', '*Quarterly Report*');
                    let x = companyData.split('*');
                    companyDataList.push({
                        date: parse(x[x.length - 1]),
                        description: x[2],
                        form: x[1],
                        detail: x[4]
                    });
                }
            }
            res.send({
                'info': companyDataList
            });
        })
        .catch((err) => res.status(err.statusCode).send(err.message));
}

module.exports = companyInfo;
