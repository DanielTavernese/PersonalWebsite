import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Jobs from './components/pages/Jobs';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Projects from './components/pages/Projects';

function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/PersonalWebsite' exact component={Home} />
          <Route path='/jobs' exact component={Jobs} />
          <Route path='/projects' exact component={Projects} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
