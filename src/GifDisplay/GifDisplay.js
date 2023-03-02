import React, { Component } from "react";
import './GifDisplay.css';
import { getGifs } from '../apiCalls'


class GifDisplay extends Component {
    constructor() {
        super()
        this.state = {
            characterGifs: []
        }
    }
    
    componentDidMount() {
        const cleanData = []
        getGifs(this.props.character)
            .then(data => {
                console.log(data)
                data.data.forEach(obj => {
                    const gif = {}

                    gif.url = obj['embed_url']
                    gif.title = obj['title']
                    cleanData.push(gif)
                    this.setState({ characterGifs: cleanData})
                })
            })
    }
    
    render() {
        const gifs = this.state.characterGifs.map((gif, index) => {
            return (
                <iframe 
                    key={index} 
                    src={gif.url} 
                    width="480" 
                    height="270" 
                    frameBorder="0" 
                    className="giphy-embed" 
                    style={{'pointerEvents': 'none'}} 
                    title={gif.title}
                />
            )
        })
        
        return (
            <section className="gif-display">
                {gifs}
            </section>
        )
    }
}

export default GifDisplay;