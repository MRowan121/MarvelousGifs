import React, { Component } from 'react';
import Header from '../Header/Header';
import './App.css'
import characterList from '../Character-Data/characterList';
import GifDisplay from '../GifDisplay/GifDisplay';
import { Route } from 'react-router-dom';
import NameDisplay from '../NameDisplay/NameDisplay';
import InfoDisplay from '../InfoDisplay/InfoDisplay';

class App extends Component {
  constructor() {
    super()
    this.state = {
      characters: [],
    }
  }

  componentDidMount() {
    this.setState({ characters: characterList})
  }

  render() {
    return (
      <main className='app'>
        <Header />
          <Route exact path='/' render={() => {
            return(
              <div>
                <InfoDisplay 
                  // selection={''} 
                  characterList={this.state.characters} 
                />
                <NameDisplay characters={this.state.characters} />
              </div>
            )
          }}/>
          <Route exact path={`/character/:selection`} render={({ match }) => {
            let selection = match.params.selection
            return (
              <div>
                <InfoDisplay selection={selection} />
                <GifDisplay selection={selection} />
              </div>
            )
          }}/>
      </main>
    )
  }
}

export default App;