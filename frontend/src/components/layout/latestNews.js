import React from 'react';
import { withRouter } from 'react-router';
import { Header, Message } from 'semantic-ui-react';

const LatestNews = (props) => {
    const { companyNews, companyName } = props;
    return (
        <div className="mb-5">
            <Header as='h2' className="text-secondary">Company Name: {companyName}</Header>
            <Header as='h3' className="text-secondary">Here are the latest news about the company.</Header>
            {companyNews.length > 0 ? companyNews.map((ele, index) => {
                let list = [ ele.description ]
                return ((index < 6) ? <Message key={index} header={ele.title} list={list} className="w-100"/> : '' )
                }) : <p>Sorry no news</p>
            }
        </div>
    )
}
export default withRouter(LatestNews)