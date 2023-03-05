import React, { Component } from "react";
import { getGifs } from '../../Utilities/apiCalls'
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

import './GifDisplay.css';
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
import swal from 'sweetalert'
import PropTypes from 'prop-types'

class GifDisplay extends Component {
    constructor() {
        super()
        this.state = {
            characterGifs: [],
        }
    }
    
    componentDidMount() {
        const cleanData = []
        if(getGifs(this.props.urlPath, 20) === undefined) {
            swal({
                title: `Character Not Found`,
                text: 'Lets go home and try again!',
                icon: 'error'
            }).then(() => {
                document.location.href = '/'
            });
        } else {
            getGifs(this.props.urlPath, 20)
            .then(data => {
                data.data.forEach(obj => {
                    const gif = {}
                    
                    gif.url = obj['embed_url']
                    gif.title = obj['title']
                    cleanData.push(gif)
                    this.setState({ characterGifs: cleanData})
                })
            })
        }
    }

    render() {
        const gifs = this.state.characterGifs.map((gif, index) => {
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
            <div>
                <section className="info-display">
                    <div className="text-container">
                        <h1>{this.props.urlPath}</h1>
                    </div>
                </section>
                <section className="gif-display">
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
                        {gifs}
                    </Swiper>
                </section>
            </div>
        )
    }
}

export default GifDisplay;

GifDisplay.propTypes = {
    urlPath: PropTypes.string
}