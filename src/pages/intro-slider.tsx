import React from 'react';
import { Page, Navbar, Block, Popup, SwiperSlide, Swiper } from 'framework7-react';

const IntroSlider = () => {
    return (
        <Popup
            className="demo-popup"
            opened={true}

        >
            <Page>
                <Swiper pagination navigation>
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                </Swiper>
            </Page>
        </Popup>
    )
};

export default IntroSlider;
