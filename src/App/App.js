import React, { Component } from 'react';
import Header from '../Header/Header';
import './App.css'
import characterList from '../Character-Data/characterList';
import Form from '../Form/Form';
import GifDisplay from '../GifDisplay/GifDisplay';

class App extends Component {
  constructor() {
    super()
    this.state = {
      characters: [],
      userSelection: '',
    }
  }

  componentDidMount() {
    this.setState({ characters: characterList})
  }

  handleCallback = (selection) => {
    this.setState({ userSelection: selection})
  }

  render() {
    const nameDisplay = this.state.characters.map((name, index) => {
      return (
        <p key={index}>{name}</p>
      )
    })
    
    return (
      <main className='app'>
        <Header />
        {!this.state.userSelection ? 
          <div>
            <section className='info-display'>
              <div className='text-container'>
                <h2>FIND GIFS FOR YOUR FAVORITE HEROES & VILLAINS</h2>
                <h3>Search in the form or select a character to get started</h3>
                <Form names={this.state.characters} handleCallback={this.handleCallback} />
              </div>
            </section>
            <section className='bottom-container'>
              <div className='character-list'>
                {nameDisplay}
              </div>
            </section>

          </div>
        :
          <div>
            <section className='info-display'>
              <h1>{this.state.userSelection}</h1>
            </section>
            <GifDisplay character={this.state.userSelection} />
          </div>
        }
      </main>
    )
  }
}

export default App;