import React from "react";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import {
  FooterDiv,
  Box,
  Title,
  List,
  ListItem,
  Icon,
  SocialContainer,
  SocialIcon,
  NewsTitle,
  Newsletter,
  NewsInput,
  NewsLetterButton,
} from "../footer/FooterStyles";

const Footer = () => {
  return (
    <FooterDiv>
      <Box>
        <Title>ASPIRE</Title>
        <List>
          <ListItem>
            <Icon>
              <PlaceOutlinedIcon />
            </Icon>
            685 Market Street <br /> San Francisco, CA 94105, US
          </ListItem>
          <ListItem>
            <Icon>
              <PhoneOutlinedIcon />
            </Icon>
            (+01) 850-315-5862
          </ListItem>
          <ListItem>
            <Icon>
              <EmailOutlinedIcon />
            </Icon>
            shop@aspire.com
          </ListItem>
        </List>
        <SocialContainer>
          <SocialIcon>
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon>
            <FacebookOutlinedIcon />
          </SocialIcon>
          <SocialIcon>
            <PinterestIcon />
          </SocialIcon>
          <SocialIcon>
            <TwitterIcon />
          </SocialIcon>
        </SocialContainer>
      </Box>
      <Box>
        <Title>Account</Title>
        <List>
          <ListItem>My Account</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Shop</ListItem>
        </List>
      </Box>
      <Box>
        <Title>Quick Link</Title>
        <List>
          <ListItem>Privacy Policy</ListItem>
          <ListItem>Terms Of Use</ListItem>
          <ListItem>FAQ</ListItem>
          <ListItem>Contact</ListItem>
        </List>
      </Box>
      <Box>
        <Title>News Letter</Title>
        <NewsTitle>
          Get the latest updates on new <br /> products and upcoming sales
        </NewsTitle>
        <Newsletter>
          <NewsInput placeholder="Enter Your Email" />
          <NewsLetterButton>Subscribe</NewsLetterButton>
        </Newsletter>
      </Box>
    </FooterDiv>
  );
};

export default Footer;
