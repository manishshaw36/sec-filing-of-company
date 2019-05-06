import React, { Component } from 'react'
import { withRouter } from 'react-router'
import axios from 'axios'
import { Header, Message } from 'semantic-ui-react';

class LatestNews extends Component{

    state = {}

    componentWillMount (){
        let { history ,match: { params: { tickerKey } } } = this.props;
        let path = 'http://localhost:4001/newsInfo/?ticker_key=' + tickerKey;
        axios.get(path)
            .then(res => {
                this.setState({ companyNews: res.data.news, companyName: res.data.name });
            })  
            .catch(er => {
                history.push('/error');
            });
    }
    
    render() {
        const { companyNews = [], companyName = '' } = this.state;
        return (
            <div className="mb-5">
                <Header as='h2' className="text-secondary">Company Name: {companyName}</Header>
                <Header as='h3' className="text-secondary">Here are the latest news about the company.</Header>
                {companyNews.length > 0 ? companyNews.map((ele, index) => {
                    let list = [ ele.description ]
                    return ((index < 6) ? <Message header={ele.title} list={list} className="w-100"/> : '' )
                    }) : <p>Sorry no news</p>
                }
            </div>
        )
    }
}
export default withRouter(LatestNews)