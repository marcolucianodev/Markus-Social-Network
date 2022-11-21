import React from "react";
import { Container } from "./styles";
import  Logo  from "../_assets/img/logo.png";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';


export const Footer = () => {
    return (
        <Container>
            <a href="/" className="link-logo-footer">
                <div className="footer-logo">
                    <img src={Logo} alt="Logo Markus" />
                    <div className="title-box">
                        <div className="title-logo">
                            <h2>Markus</h2>
                        </div>
                        <div className="desc-logo">
                            <h3>Social Network</h3>
                        </div>
                    </div>
                </div>
            </a>
          <div className="footer-description">
            <p>Conecte-se com amigos e o mundo ao seu redor no Markus Social Network.</p>
          </div>
          <div className="footer-social-icons">
            <a href="/">
              <FacebookIcon />
            </a>
            <a href="/">
              <TwitterIcon />
            </a>
            <a href="/">
              <PinterestIcon />
            </a>
            <a href="/">
              <YouTubeIcon />
            </a>
            <a href="/">
              <InstagramIcon />
            </a>
          </div>
        </Container>
    )
}