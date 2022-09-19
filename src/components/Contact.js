import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = ({contactEmail, socialLinks})=>{
    return (
      <div className="contact_container">
        <h1>Feel free to contact me :)</h1>
        <div className="social_links">
          <ul>
            <li>
              <a id="end" href={`mailto:${contactEmail}`}>
                <FaEnvelope/>
              </a>
            </li>
            <li>
              <a href={socialLinks[0].url}>
                <FaLinkedin/>
              </a>
            </li>
            <li>
              <a href={socialLinks[1].url}>
                <FaGithub/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
}

export default Contact

//import Peepo from './Peepo';
//<Peepo style={{position: "absolute", height: "5%", top: 0.0001, bottom: 0, right: 0}}/>
