import axios from 'axios';

export const setValue = (type, value) => {
    return {
        type,
        value
    }
}

export const getCompanyList = () => {
    let companyData;
    let companyOption  = [];
    return function(dispatch) {
        axios.get('http://localhost:4001/getData')
            .then((res) => {
                companyData =  res.data.company;
                companyData.map((ele, index) => {
                    return companyOption.push({
                        key: index, value: ele.name, text: ele.name, ticker: ele.ticker, cik: ele.cik
                    });
                });
                dispatch(setValue('GET_COMPANY_DETAILS', companyOption));
            })
            .catch((err) => dispatch(setValue('ERROR', err)));
    }
    
}

export const getCompanyInfo = (tickerKey) => {
    const path = 'http://localhost:4001/getInfo/?ticker_key=' + tickerKey
    return function(dispatch) {
        axios.get(path)
        .then(res => 
            dispatch(setValue('GET_COMPANY_INFO', res.data.info)))
        .catch(err => 
            dispatch(setValue('ERROR', err)))
    }
    
}

export const getCompanyNews = (tickerKey) => {
    const path = 'http://localhost:4001/newsInfo/?ticker_key=' + tickerKey;
    return function(dispatch) {
        axios.get(path)
        .then(res => 
            dispatch(setValue('GET_COMPANY_NEWS', res.data)))
        .catch(err => 
            dispatch(setValue('ERROR', err)))
    }
}
