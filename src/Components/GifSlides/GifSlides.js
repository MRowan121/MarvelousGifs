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
            breakpoints= {{
                250: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                  grid: {
                    fill: 'row',
                    rows: 2
                    }
                },
                550: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                    grid: {
                        fill: 'row',
                        rows: 2
                    }
                },
                850: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                    grid: {
                        fill: 'row',
                        rows: 2
                    }
                },
            }}
            autoplay={{
                delay: 3000,
                disableOnInteraction: true,
            }}
            keyboard={{
                enabled: true,
            }}
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