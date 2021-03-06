import React from "react";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksGroup,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksGroup>
          <FooterLinkTitle>About Us</FooterLinkTitle>
          <FooterLink to="home">How it works</FooterLink>
          <FooterLink to="home">Testimonials</FooterLink>
          <FooterLink to="home">Careers</FooterLink>
          <FooterLink to="home">Investors</FooterLink>
          <FooterLink to="home">Terms of Service</FooterLink>
        </FooterLinksGroup>
        <FooterLinksGroup>
          <FooterLinkTitle>Contact Us</FooterLinkTitle>
          <FooterLink to="home">Contact</FooterLink>
          <FooterLink to="home">Support</FooterLink>
          <FooterLink to="home">Destinations</FooterLink>
          <FooterLink to="home">Sponsorships</FooterLink>
        </FooterLinksGroup>
      </FooterWrap>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to="home">MyComp</SocialLogo>
          <WebsiteRights>
            MyComp &#169; {new Date().getFullYear()} All rights reserved.
          </WebsiteRights>
          <SocialIcons>
            <SocialIconLink
              href="https://facebook.com"
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink
              href="https://instagram.com"
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink
              href="https://youtube.com"
              target="_blank"
              aria-label="Youtube"
            >
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink
              href="https://twitter.com"
              target="_blank"
              aria-label="Twitter"
            >
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink
              href="https://linkedin.com"
              target="_blank"
              aria-label="Linkedin"
            >
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
};

export default Footer;
