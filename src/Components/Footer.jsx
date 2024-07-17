import React from 'react';
import { IoCallOutline } from "react-icons/io5";
import { TiSocialPinterest } from "react-icons/ti";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { MdOutlineEmail } from "react-icons/md";
import { BsPersonFill } from "react-icons/bs";
const Footer = () => {
  return (
    <>
      <div className="page-content"></div>
      <div className='footer-content'>
        <div className='content-row'>
          <div className='content'>
            <h1 className='content-heading'>Get in Touch</h1>
            <p className='footer-desc'>
              Explore rich, natural flavors with our organic spice blends. At [Your Startup
              Name], we're committed to ethically sourced, additive-free ingredients that elevate every dish.
              Discover pure culinary excellence with us.
            </p>
            <div className='social-icons'>
              <div>
                <TiSocialPinterest className="icons" />
              </div>
              <div >
                <TiSocialFacebook  className="icons"/>
              </div>
              <div >
                <TiSocialLinkedin className="icons" />
              </div>
              <div >
                <TiSocialTwitter className="icons" />
              </div>
            </div>
          </div>

          <div className="flex">
            <div className="email">
              <div >
                <MdOutlineEmail className="icons"/>
              </div>
              <p className='footer-text'>abc@gmail.com</p>
              <p className='footer-text'>abc@gmail.com</p>
            </div>

            <div className="email">
              <div >
                <IoCallOutline className="icons"/>
              </div>
              <p className='footer-text'>abc@gmail.com</p>
              <p className='footer-text'>abc@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
