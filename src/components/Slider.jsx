import React from "react";
import styled from "styled-components";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { sliderContent } from "../data/sliderData";

const Container = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  position: relative;
  z-index: 1;
  overflow: hidden;
`;

const ImgContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding-right: 2rem;
`;
const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Image = styled.img`
  height: 70%;
`;

const Title = styled.h1`
  font-size: 3rem;
`;
const Button = styled.button`
  background-color: #fff;
  color: #292930;
  box-shadow: 0 16px 32px 0 rgb(103 103 103 / 6%);
  border: none;
  padding: 15px 40px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  font-family: "Ubuntu", sans-serif;
  overflow: hidden;
  &:hover {
    transform: scale(1.1);
    transition: all 0.5s ease;
  }
`;

const Span = styled.span`
  font-weight: 500;
  margin-left: 1rem;
`;

const InfoDetails = styled.div`
  padding-left: 5rem;
`;
const Desc = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  margin-top: 1rem;
  max-width: 450px;
  line-height: 30px;
`;

const SliderContent = styled.div`
  display: flex !important;
  width: 100%;
  background: ${(props) => props.bg};
`;

const Slider = () => {
  return (
    <Container>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {sliderContent.map((item) => (
          <SwiperSlide key={item.id}>
            <SliderContent bg={item.bgcolor}>
              <InfoContainer>
                <InfoDetails>
                  <Title>{item.title}</Title>
                  <Desc>{item.desc}</Desc>
                  <Button>
                    <ShoppingCartOutlinedIcon />
                    <Span>Shop Now</Span>
                  </Button>
                </InfoDetails>
              </InfoContainer>
              <ImgContainer>
                <Image src={item.img} />
              </ImgContainer>
            </SliderContent>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Slider;
