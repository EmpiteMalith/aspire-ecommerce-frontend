import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { sliderContent } from "../data/sliderData";
import {
  Container,
  ImgContainer,
  InfoContainer,
  Image,
  Title,
  Button,
  Span,
  InfoDetails,
  Desc,
  SliderContent,
} from "./SliderStyles";

const Slider = () => {
  return (
    <Container>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 7500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
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
