import React from 'react';
import { withRouter } from 'react-router';
import LatestNews from './latestNews';
import CompanyInfo from './companyInfo';

const ScreenTwo = () => (
    <div className="row my-3">
        <div className="col-lg-6">
            <LatestNews />
        </div>
        <div className="col-lg-6 mt-lg-5 pt-lg-5">
            <CompanyInfo />
        </div> 
    </div>
)
    
export default withRouter(ScreenTwo)