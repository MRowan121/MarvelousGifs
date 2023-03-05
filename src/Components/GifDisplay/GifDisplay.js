import React, { Component } from "react";
import { getGifs } from '../../Utilities/apiCalls'
import './GifDisplay.css';
import swal from 'sweetalert'
import PropTypes from 'prop-types'
import GifSlides from "../GifSlides/GifSlides";

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
        return (
            <div>
                <section className="info-display">
                    <div className="text-container">
                        <h1>{this.props.urlPath}</h1>
                    </div>
                </section>
                <section className="gif-display">
                    <GifSlides gifs={this.state.characterGifs} />
                </section>
            </div>
        )
    }
}

export default GifDisplay;

GifDisplay.propTypes = {
    urlPath: PropTypes.string
}