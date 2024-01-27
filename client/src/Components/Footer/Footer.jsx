import React from 'react'
import {Link} from "react-router-dom"

import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiInstagram } from "react-icons/si";

import "./style.css";

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="footIcons">
            <FaGithub className='footIcon'/>
            <FaXTwitter className='footIcon'/>
            <SiInstagram className='footIcon'/>
        </div>
        <div className="footSec2">
            <div className="footLinks2">
                <Link to="/UserAgreement" className='footLinks1'>User Agreement</Link>
                <Link to="/ContentPolicy" className='footLinks1'>Content Policy</Link>
            </div>
            <div className="footLinks2">
                <Link to="/PrivacyPolicy" className='footLinks1'>Privacy Policy</Link>
                <Link to="/stars/codeOfConduct" className='footLinks1'>Stars Code of Conduct</Link>
            </div>
            <p className="copyRightFooter">
                &copy; Semicolon Pvt. Ltd.
            </p>
        </div>
    </footer>
  )
}

export default Footer