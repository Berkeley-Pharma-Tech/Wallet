import React, {Component, useState, useEffect} from "react";
import {Helmet} from "react-helmet";
import TokenConfig from '../../BPTTokenconfig/src/js/tokenconfig.js'
// Fix this
// import render from "../../BPTTokenconfig/src/js/tokenconfig.js";


let FrontEnd = () => {

  // render();
  const initContract = TokenConfig()
  return (
    <React.Fragment>
      <Helmet>
        <meta charset="utf-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>BPTtoken Sale</title>
        <link href="css/bootstrap.min.css" rel = "stylesheet"/>
      </Helmet>
      <div className="container" style={ {width: "650px"} }>
        <div className="row">
          <div className="col-lg-12">
              <h1 className="text-center">BPTtoken Wallet</h1>
              <hr></hr>
              <br></br>
          </div>
          <div id="loader">
            <p className = "text-center">Loading...</p>
          </div>
          <div id ="content" className = "text-center">
            <p>
              Introducing Berkeley Pharma Tech's crypto token.
              Token price is <span className="token-price"></span> Ether.
              You currently have <span className="bpt-balance"></span>&nbsp; BPTtoken.
            </p>
            <br></br>
            <form role = "form">
              <div className="form-group">
                <div className="input-group">
                  <input id="numberOfToken" className = "form-control input-lg" type = "number" name = "number" value = "1" min = "1"
                  pattern = "[0-9]" >
                  </input>
                  <span className="input-group-btn">
                    <button type = "submit" className = "btn btn-primary btn-lg">Buy Tokens</button>
                  </span>
                </div>
              </div>
            </form>
            <br></br>
              <div className = "progress">
                <div id="progress" className = "progress-bar progress progress-bar-striped-active" aria-valuemin = "0" aria-valuemax="100">
                </div>
              </div>
            <p><span className = "tokens-sold"></span> / <span className = "tokens-available"></span> tokens sold</p>
            <hr></hr>
            <p id="accountAddress"></p>
          </div>
        </div>
      </div>
      <Helmet>
        <script src = "https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js" />
        <script src = "js/bootstrap.min.js" type="text/babel"/>
        <script src = "js/web3.min.js" type="text/babel"/>
        <script src = "js/truffle-contract.min.js" type="text/babel"/>
        <script src = "js/tokenconfig.js" type="text/babel"/>
      </Helmet>
    </React.Fragment>
    );
};


export default FrontEnd;
