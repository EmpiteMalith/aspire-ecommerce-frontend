import React from "react";
import styled from "styled-components";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";

const FooterDiv = styled.div`
  position: relative;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 3rem 5rem;
  background: #292930;
`;

const Box = styled.div`
  flex: 1;
`;

const Title = styled.h3`
  margin-bottom: 1rem;
  font-weight: 500;
  color: #ffffff;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;
const ListItem = styled.li`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  color: #cfcfcf;
`;
const Icon = styled.span`
  margin-right: 0.5rem;
`;
const SocialContainer = styled.div`
  display: flex;
  margin-top: 10px;
`;
const SocialIcon = styled.div`
  margin-right: 15px;
  background: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.3rem;
`;

const Newsletter = styled.div`
  display: flex;
  margin-top: 20px;
`;

const NewsInput = styled.input`
  width: 200px;
  height: 35px;
  padding-left: 0.5rem;
  border: 1px solid #fff;
  outline: none;
  background: transparent;
  color: #cfcfcf;
`;

const NewsLetterButton = styled.button`
  height: 35px;
  background-color: #ffffff;
  color: #292930;
  font-weight: 600;
  font-family: "Ubuntu", sans-serif;
  padding: 0 10px;
  cursor: pointer;
  border: none;
  margin-left: 0.5rem;
  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

const NewsTitle = styled.span`
  font-weight: 400;
  color: #cfcfcf;
`;

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
