import React, { Component } from 'react';
import Header from '../Header/Header';
import './App.css'
import characterList from '../Character-Data/characterList';
import Form from '../Form/Form';
import GifDisplay from '../GifDisplay/GifDisplay';
import { Route } from 'react-router-dom';
import NameDisplay from '../NameDisplay/NameDisplay';

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
                <NameDisplay characters={this.state.characters} />
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