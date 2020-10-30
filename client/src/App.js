import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './containers/HomeScreen';
import ProductScreen from './containers/ProductScreen';
import CartScreen from './containers/CartScreen';
import LoginScreen from './containers/LoginScreen';
import RegisterScreen from './containers/RegisterScreen';
import ProfileScreen from './containers/ProfileScreen';


const App = () => {
  return (
      
        <Router>
          <Header />
        <main className='py-3' >
          <Container>
          <Route path='/login' component={LoginScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/profile' component={ProfileScreen} />
          <Route path='/product/:id' component={ProductScreen} />
          <Route path='/cart/:id?' component={CartScreen} />
          <Route path='/' component={HomeScreen} exact />
          </Container>
        </main>
          <Footer />
        </Router>
      
  );
}

export default App;
