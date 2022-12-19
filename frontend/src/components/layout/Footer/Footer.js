import React from 'react';
import { Link } from "react-router-dom";
import "./Footer.css"
import appStore from "../../../images/Appstore.png";
import playStore from "../../../images/playstore.png";

const Footer = () => {
  return (
       <footer id="footer">
            <div className="leftFooter">
                <h4>DOWNLOAD OUR APP</h4>
                <p>Download our App for Android and IOS mobile phone</p>
                <img src={playStore} alt="playstore" />
                <img src={appStore} alt="appstore" />
            </div>
            <div className="midFooter">
                    <h1>rgHanks</h1>
                    <p>High quality is our first priority.</p>
                    <p>Copyright 2022 &copy; rgHanks</p>
            </div>
            <div className="rightFooter">
                    <h4>Follow Us </h4>
                    <Link to="" >Instagram</Link>             
                    <Link to="" >Facebook</Link>             
                    <Link to="" >Twitter</Link>                                 
            </div>
       </footer>
  )
}

export default Footer