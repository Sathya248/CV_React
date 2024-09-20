 import React from 'react';
import { Element } from "react-scroll";
import { IconButton } from "@mui/material"; // Use @mui/material for IconButton
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "./Contact.css";

const Contact = () => {
    return (
        <Element className="contact" id="contact">
            <h1>Contact</h1>
            <div className='contact__container'>
                <p>
                    Email: <span>Sathyakannan248@gmail.com</span>
                </p>
                <p>
                    Github Username: <span>Sathya248</span>
                </p>
                <div className='contact__icons'>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <IconButton>
                            <LinkedInIcon />
                        </IconButton>
                    </a>

                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <IconButton>
                            <FacebookIcon />
                        </IconButton>
                    </a>

                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <IconButton>
                            <InstagramIcon />
                        </IconButton>
                    </a>
                </div>
            </div>
        </Element>
    );
}

export default Contact;

