import React, { Component } from 'react';
import Header from '../Header/Header';
import './App.css'
import characterList from '../Character-Data/characterList';
import Form from '../Form/Form';
import GifDisplay from '../GifDisplay/GifDisplay';
import { Route, Link } from 'react-router-dom';

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
        <Link to={`/character/${name}`} key={index}>
          <p className='underline'>{name}</p>
        </Link>
      )
    })
    
    return (
      <main className='app'>
        <Header />
          <Route exact path='/' render={() => {
            return(
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
            )
          }}/>
          <Route exact path={`/character/:selection`} render={({ match }) => {
            let selection = match.params.selection
            return (
              <div>
                <section className='info-display'>
                  <h1>{selection}</h1>
                </section>
                <GifDisplay character={selection} />
              </div>
            )
          }}/>
      </main>
    )
  }
}

export default App;