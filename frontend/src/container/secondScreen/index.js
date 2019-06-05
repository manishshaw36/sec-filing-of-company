import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import LatestNews from '../../components/layout/latestNews';
import CompanyInfo from '../../components/layout/companyInfo';
import { getCompanyNews, getCompanyInfo } from "../../actions/action";
import Loader from 'react-loader-spinner';

class ScreenTwo extends Component {

    componentWillMount(){
        const { match: { params: { tickerKey } } } = this.props
        this.props.getCompanyInfo(tickerKey);
        this.props.getCompanyNews(tickerKey);
    }

    componentWillReceiveProps(props) {
        const { error, history } = props;
        if(error !== null) history.push('/error')
    }

    render() {
        const { companyName, companyInfo, companyNews } = this.props;
        return companyName !== '' ?
                <div className="row my-3">
                    <div className="col-lg-6">
                        <LatestNews companyNews={companyNews} companyName={companyName}/>
                    </div>
                    <div className="col-lg-6 mt-lg-5 pt-lg-5">
                        <CompanyInfo companyInfo={companyInfo} />
                    </div>
                </div> :
                <div className="text-center my-5">
                    <Loader type="Puff" color="#00BFFF" height="100" width="100" />
                </div> 
    }
}

const mapStateToProps = (state) => {
    const { 
        companyInfo,
        companyNews,
        companyName,
        error
    } = state.secondScreenReducer;

    return {
        companyInfo,
        companyNews,
        companyName,
        error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCompanyNews: (props) => {
            return dispatch(getCompanyNews(props));
        },
        getCompanyInfo: (props) => {
            return dispatch(getCompanyInfo(props));
        },
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ScreenTwo));    