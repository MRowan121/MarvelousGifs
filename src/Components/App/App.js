import React, { Component } from 'react';
import Header from '../Header/Header';
import './App.css'
import characterList from '../../Character-Data/characterList';
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

  handleCallback = (selection) => {
    this.setState({ userSelection: selection})
  }

  render() {
    return (
      <main className='app'>
        <Header />
          <Route exact path='/' render={() => {
            return(
              <NameDisplay 
                characterList={characterList} 
                handleCallback={this.handleCallback}
              />
            )
          }}/>
          <Route exact path={`/:selection`} render={({ match }) => {
            let urlPath = match.params.selection
            return (
              <GifDisplay 
                characterList={this.state.characters} 
                urlPath={urlPath}
              />
            )
          }}/>
      </main>
    )
  }
}

export default App;