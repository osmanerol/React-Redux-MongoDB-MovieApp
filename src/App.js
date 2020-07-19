import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css';
import { Route } from 'react-router-dom';
import { Container} from 'semantic-ui-react';
import Footer from './components/Footer';
import Header from './components/Header';
import MoviesPage from './components/pages/MoviesPage';
import NewMoviePage from './components/pages/NewMoviePage';
import HomePage from './components/pages/HomePage';

class App extends Component {
  render() {
    return (
      <div>
        <Header />

        <Container text>
          <Route path='/' exact strict component={HomePage} />
          <Route path='/movies' exact strict component={MoviesPage} />
          <Route path='/movies/new' exact strict component={NewMoviePage} />
          <Route path='/movie/:_id' exact strict component={NewMoviePage} />
        </Container>

        <Footer /> 
        
      </div>
    )
  }
}

export default App;