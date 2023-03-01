import React, { Component } from 'react';
import Header from '../Header/Header';
import './App.css'
import characterList from '../Character-Data/characterList';
import Form from '../Form/Form';

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
        {!this.state.userSelection ? 
          <div>
            <section className='info-display'>
            
            </section>
            <Form names={this.state.characters} handleCallback={this.handleCallback} />
          </div>
        :
          <section className='info-display'>
            <h1>{this.state.userSelection}</h1>
          </section>
        }
      </main>
    )
  }
}

export default App;