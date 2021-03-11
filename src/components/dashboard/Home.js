import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from "../logo.jpg";
import "../../App.css";

let Home = () => {
    console.log(logo);
    return (
      <React.Fragment>
        <div className="logo-container">
          <div className="text-container">
            <p className="title logo-title">Invest in the Future.</p>
            <p className="text logo-text"> With the innovative BPT Token, investing in one of
            the leading biotech startups has never been easier. Holding our token will ensure that
            you take part in our groundbreaking projects backed by seasoned entrepreuneurs and
            young minds from top universities.  </p>
          </div>
          <img src={logo} alt="Image failed to load." className="logo"></img>
        </div>
        <div className="container">
            <p className="title">What is the BPT Token?</p>
            <p className="text">As a young startup company, naturally one of Berkeley Pharma Tech’s
            main concerns is funding. In order to effectively carry out the Berkeley Pharma Tech mission,
            it is important to raise enough funds to have sufficient resources to fuel projects, which
            often proves difficult for a pre-ipo company. Due to it not yet being listed on any stock exchange,
            investors may find trouble in finding opportunities to help support Berkeley Pharma Tech, causing projects
            to face obstacles as they don’t have enough capital to back research.

            This is where the BPT Token comes in. By purchasing BPT Tokens, investors are helping fund the countless innovative
            projects at Berkeley Pharma Tech, from groundbreaking biomedical research all the way to the development
            of captivating mobile games.

            Aside from being purchased, there are many other ways that BPT Tokens are distributed. Within
            the company, the BPT Token is used as a bonus to reward employees and interns for going above and beyond.
            Also, those that publish their scientific research articles with us also get rewarded with these tokens.
            Finally, gamers on top of our leaderboard in our new hit game will also receive BPT Tokens.</p>
        </div>
        <div className="container">
            <p className="title">Supply</p>
            <p className="text">Unlike the tokens of other blockchains, the BPT Token isn’t mined or awarded over time.
            Instead, 1 billion tokens were created when the BPT Token was launched, and no more tokens will be created
            over time. This will ensure that each and every token remains valuable and will not be inflated over time.</p>
        </div>
        <div className="container">
            <p className="title">How to buy and store BPT Token</p>
            <p className="text">Buying and storing your BPT Tokens has never been easier! With a simple click of a button,
            you can both purchase and safely store your BPT Tokens in our high-security digitial wallets. Or if you prefer to
            hold on to your tokens yourself, you may purchase them and store them in your own personal wallet as well. </p>
        </div>
        <div className="container">
            <p className="title">Future of the token</p>
            <p className="text">Although the current state of the token is already extremely innovative, the team at Berkeley
            Pharma Tech has more advancement plans in the near future for the token. See our token’s whitepaper for more details. </p>
        </div>
      </React.Fragment>
    );
}



const mapStateToProps = (state) => {
    console.log(state);
    return {

    }
}

export default connect(mapStateToProps)(Home)
