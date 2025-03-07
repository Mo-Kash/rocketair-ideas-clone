import React from 'react'
import '../styles/Footer.css'
import footerimg from '../assets/images/footer_img.svg'
import twittericon from '../assets/images/twitter_icon.svg'
import yticon from '../assets/images/youtube_icon.svg'
import instagramicon from '../assets/images/instagram_icon.svg'
import linkedinicon from '../assets/images/linkedin_icon.svg'

const Footer = () => {
  return (
    <div className="footer">
      <div className="left">
        <div className="text">
          <p className="heading">Fuel for Thought</p>
          <p className='caption'>A casual hello from the RocketAir Crew filled with insights, inspiration, and good vibes only</p>
        </div>
        <div className="image">
          <img src={footerimg} alt="" />
        </div>
        <div className="contact">
          <input type="email" placeholder='Email' id='email-input'/>
          <button type='button' id='subscribe-btn'>Subscribe</button>
        </div>
      </div>
      <div className="right">
        <div className="work"><p>Work</p></div>
        <div className="about"><p>About</p></div>
        <div className="services"><p>Services</p></div>
        <div className="verticals"><p>Verticals</p></div>
        <div className="careers"><p>Careers</p></div>
        <div className="ideas"><p>Ideas</p></div>
        <div className="news"><p>News</p></div>
        <div className="contact-us"><p>Contact</p></div>
        <div className="socials">
          <div className="icons">
            <a href="https://twitter.com/rocketairagency" target='_blank'><object className='icon' data={twittericon} type="image/svg+xml">Twitter svg</object></a>
            <a href="https://www.linkedin.com/company/rocketair/?trk=ppro_cprof&originalSubdomain=fr" target='_blank'><object className='icon' data={linkedinicon} type="image/svg+xml">LinkedIn svg</object></a>
            <a href="https://www.youtube.com/channel/UCQZRWFejYexfLdePM7gjLTA" target='_blank'><object className='icon' data={yticon} type="image/svg+xml">YT svg</object></a>
            <a href="https://www.instagram.com/rocketairagency/" target='_blank'><object className='icon' data={instagramicon} type="image/svg+xml">Instagram svg</object></a>
          </div>
          <div className="links">
            <a href="https://www.rocketair.com/privacy" target='_blank'>Privacy Policy</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
