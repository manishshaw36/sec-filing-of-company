import React, { Component } from "react";
import Dropdown from './dropdown';
import axios from 'axios';

class HomeComponent extends Component {
    // initialize our state 
    state = {
        selectedCompany: {},
        companyOption: [],
        tickerOption: []
    };

    componentWillMount() {
        let companyData;
        let companyOpt  = [];
        axios.get('http://localhost:4001/getData')
            .then((res) => {
                companyData =  res.data.company;
                companyData.map((ele, index) => {
                    return companyOpt.push({
                        key: index, value: ele.name, text: ele.name, ticker: ele.ticker, cik: ele.cik
                    });
                });
                this.setState({ companyOption: companyOpt });
            })
            .catch((err) => console.log(err));
    }

    handleSelected = (selected) => {
        let tickerOpt = [];
        tickerOpt.push({key: selected.cik, value: selected.ticker, text: selected.ticker, cik: selected.cik, name: selected.value})
        this.setState({ tickerOption: tickerOpt });
    };

    handleTicker = (ticker) => this.setState({ ticker: ticker }, console.log(ticker));
    
    render() {
        const { companyOption, tickerOption, ticker } = this.state;
        return (
            <div className="my-5 row">    
                <div className="my-3 col-lg-6">
                    <Dropdown 
                        dataPlaceHolder='Select the company name' 
                        companyOption={companyOption} 
                        getSelectedData={this.handleSelected}
                    />
                </div>
                <div className="my-3 col-lg-6">
                    <Dropdown 
                        dataPlaceHolder='Enter ticker symbol' 
                        companyOption={tickerOption} 
                        getSelectedData={this.handleTicker}
                    />
                </div>
                <a 
                    href={ticker ? `/result/${ticker.key}`: '/'} 
                    className="my-5 mx-auto btn btn-secondary form-control w-50 text-center">
                    Get SEC with Quarterly Reports 
                </a>
            </div>      
        )
    }
}

export default HomeComponent;