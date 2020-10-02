import React from 'react';
import './App.css';
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import Header from './components/Header.component';
import HomePage from './pages/HomePage';
import AddMovie from './pages/AddMovie';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Header />
    <Switch>
    <Route exact path='/' component={HomePage} />
    <Route path='/addmovie' component={AddMovie} />
    </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
