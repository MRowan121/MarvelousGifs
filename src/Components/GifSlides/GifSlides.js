import React from "react";
import PropTypes from 'prop-types'
import { 
    Swiper, 
    SwiperSlide
} from "swiper/react";
import { 
    Autoplay, 
    Grid,
    Keyboard,
    Navigation
} from "swiper";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";


const GifSlides = ({ gifs }) => {
    const slides = gifs.map((gif, index) => {
        return (
            <SwiperSlide key={index} className="slide">
                <iframe 
                    title={gif.title}
                    src={gif.url}
                    width="100%" 
                    height="100%" 
                    frameBorder="0" 
                    className="giphy-embed" 
                    style={{'pointerEvents': 'none'}}
                    allowFullScreen
                />
            </SwiperSlide>
        )
    })
    
    return (
        <Swiper
            slidesPerView={4}
            autoplay={{
                delay: 3000,
                disableOnInteraction: true,
            }}
            grid={{
                rows: 2,
            }}
            keyboard={{
                enabled: true,
            }}
            spaceBetween={30}
            navigation={true}
            modules={[Autoplay, Grid, Keyboard, Navigation]}
            className="mySwiper"
        >
            {slides}
        </Swiper>
    )
}

export default GifSlides;

GifSlides.propTypes = {
    gifs: PropTypes.array,
}