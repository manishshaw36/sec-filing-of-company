import React, { Component } from "react";
import Dropdown from '../../components/layout/dropdown';

import { connect } from 'react-redux';
import { getCompanyList, setValue } from "../../actions/action";
import Loader from 'react-loader-spinner';

class HomeComponent extends Component {

    componentWillMount() {
        this.props.getCompanyList();
    }

    componentWillReceiveProps(props) {
        const { error, history } = props;
        if(error !== null) history.push('/error')
    }

    handleSelected = (selected) => {
        let tickerOpt = [];
        tickerOpt.push({key: selected.cik, value: selected.ticker, text: selected.ticker, cik: selected.cik, name: selected.value})
        this.props.handleSelected(tickerOpt)
    };

    handleTicker = (ticker) => this.props.tickerSelected(ticker);

    getData = () => {
        const { companyOption, tickerOption, ticker } = this.props;
        return  <div className="my-5 row">    
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
    }
    
    render() {
        const { companyOption, error, history } = this.props;
        return error === null ? companyOption.length !== 0 ? 
            this.getData() :
            <div className="text-center my-5">
                <Loader type="Puff" color="#00BFFF" height="100" width="100" />
            </div> : history.push('/error')
    }
}

const mapStateToProps = (state) => {
    const { 
        companyOption,
        tickerOption,
        ticker,
        error
    } = state.firstScreenReducer;

    return {
        companyOption,
        tickerOption,
        ticker,
        error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCompanyList: () => {
            return dispatch(getCompanyList());
        },
        handleSelected: (selectedOption) => {
            return dispatch(setValue('HANDLE_SELECTED', selectedOption));
        },
        tickerSelected: (ticker) => {
            return dispatch(setValue('TICKER', ticker));
        }
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);