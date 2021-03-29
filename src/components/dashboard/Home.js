import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from "../logo.jpg";
import "../../App.css";

let Home = () => {
    return (
      <React.Fragment>
        <div className="title-section-container">
          <p className="title-section first-title">Invest in the future.</p>
          <p className="title-section first-title-text">With the innovative BPT Token, investing 
          in one of the leading biotech startups has never been easier. Holding our token 
          will ensure that you take part in our groundbreaking projects backed by 
          seasoned entrepreuneurs and young minds from top universities.</p>
          <button type="button" className="title-section buy-now">Buy Now</button>
          <svg className="blob1" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="rgba(255, 214, 0, 0.18)" d="M41.4,-55.1C52.3,-49,58.8,-35.1,58.5,-22.3C58.2,-9.4,51,2.4,43.6,10.7C36.1,19,28.4,23.7,21.1,37.1C13.7,50.6,6.9,72.9,-3,77C-12.9,81.2,-25.9,67.3,-30.7,53C-35.6,38.8,-32.3,24.1,-41.5,10.1C-50.6,-3.8,-72.1,-17.1,-71.9,-25.1C-71.7,-33.1,-49.9,-35.9,-34.3,-40.4C-18.7,-44.9,-9.3,-51.2,2.9,-55.2C15.2,-59.3,30.5,-61.1,41.4,-55.1Z" transform="translate(100 100)" />
          </svg>
          <img className="logo" src={logo}></img>
        </div>
        <div className="mid-page-container">
          <p className="general-title">Powering Berkeley Pharma Tech.</p>
          <p className="general-text">The BPT Token serves three distinct purposes:</p>
          <p className="general-text italicized">Incentivizing, Rewarding, and Investing.</p>
          <div className="info1">
            <p className="italicized it-title">Incentivizing,</p>
            <p className="info">Employees and interns at Berkeley Pharma 
            Tech are rewarded with BPT Tokens for going above and beyond. This 
            aspect of the token will make sure that there will constantly be a high 
            amount of demand for the token. </p>
          </div>
          <div className="info2">
            <p className="italicized it-title">Rewarding,</p>
            <p className="info">Those that partake in other projects at Berkeley Pharma 
            Tech will have a chance to earn BPT Tokens as well. For example, landing on the 
            top leaderboards in our new hit game, or publishing a scientific article with us, 
            to name a few. </p>
          </div>
          <div className="info3">
            <p className="italicized it-title">Investing.</p>
            <p className="info">Being a pre-IPO company, it is naturally hard to invest in Berkeley 
            Pharma Tech. The BPT Token changes the entire game. As Berkeley Pharma Tech continues to 
            produce brilliant and innovative projects, the associative BPT Token will rise in price to 
            reflect this. </p>
          </div>
        </div>
        <svg className="blob2" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="rgba(255, 214, 0, 0.18)" d="M52.9,-44.7C63,-29.6,61.7,-7.9,55.8,10.7C50,29.3,39.5,44.9,23.1,55.9C6.6,66.9,-15.9,73.3,-34.4,66.4C-52.9,59.4,-67.3,39,-72.5,16.5C-77.7,-6.1,-73.7,-30.8,-60,-46.7C-46.4,-62.7,-23.2,-69.9,-0.9,-69.1C21.4,-68.4,42.8,-59.8,52.9,-44.7Z" transform="translate(100 100)" />
        </svg>
      </React.Fragment>
    );
}



const mapStateToProps = (state) => {
    console.log(state);
    return {

    }
}

export default connect(mapStateToProps)(Home)
