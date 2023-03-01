import React, { Component } from 'react';
import Header from '../Header/Header';
import './App.css'
import characterList from '../Character-Data/characterList';

class App extends Component {
  constructor() {
    super()
    this.state = {
      characters: []
    }
  }

  componentDidMount() {
    this.setState({ characters: characterList})
  }

  render() {
    return (
      <main className='app'>
        <Header />
        <section className='info-display'>

        </section>
      </main>
    )
  }
}

export default App;