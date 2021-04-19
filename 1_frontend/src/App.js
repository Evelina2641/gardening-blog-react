import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
// Pages
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
// Components
import Header from './components/Header';
import Footer from './components/Footer';
import BlogDetails from './pages/BlogDetails';
import ProtectedRoute from './ProtectedRoute';

export const AuthenticationConext = React.createContext();

function App() {
  const [autheticated, setAutheticated] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('authenticated')) setAutheticated(true);
  }, []);

  return (
    <div className='App'>
      <AuthenticationConext.Provider value={{ autheticated, setAutheticated }}>
        <Router>
          <Header />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/about'>
              <About />
            </Route>
            <Route exact path='/blog'>
              <Blog />
            </Route>
            <Route path='/blog/:id'>
              <BlogDetails />
            </Route>
            <Route path='/contact'>
              <Contact />
            </Route>
            <Route path='/admin'>
              <ProtectedRoute />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthenticationConext.Provider>
    </div>
  );
}

export default App;
