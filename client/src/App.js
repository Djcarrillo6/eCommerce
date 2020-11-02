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
import ShippingScreen from './containers/ShippingScreen';
import PaymentScreen from './containers/PaymentScreen';
import PlaceOrderScreen from './containers/PlaceOrderScreen';
import OrderScreen from './containers/OrderScreen';
import UserListScreen from './containers/UserListScreen';
import UserEditScreen from './containers/UserEditScreen';
import ProductListScreen from './containers/ProductListScreen';
import ProductEditScreen from './containers/ProductEditScreen';
import OrderListScreen from './containers/OrderListScreen';



const App = () => {
  return (
      
        <Router>
          <Header />
        <main className='py-3' >
          <Container>
          <Route path='/order/:id' component={OrderScreen} />
          <Route path='/shipping' component={ShippingScreen} />
          <Route path='/payment' component={PaymentScreen} />
          <Route path='/placeorder' component={PlaceOrderScreen} />
          <Route path='/login' component={LoginScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/profile' component={ProfileScreen} />
          <Route path='/product/:id' component={ProductScreen} />
          <Route path='/cart/:id?' component={CartScreen} />
          <Route path='/admin/userlist' component={UserListScreen} />
          <Route path='/admin/user/:id/edit' component={UserEditScreen} />

           <Route
            path='/admin/productlist'
            component={ProductListScreen}
            exact
          />
          <Route
            path='/admin/productlist/:pageNumber'
            component={ProductListScreen}
            exact
          />
          <Route path='/admin/product/:id/edit' component={ProductEditScreen} />
          <Route path='/admin/orderlist' component={OrderListScreen} />
          <Route path='/search/:keyword' component={HomeScreen} exact />
          <Route path='/page/:pageNumber' component={HomeScreen} exact />
          <Route
            path='/search/:keyword/page/:pageNumber'
            component={HomeScreen}
            exact
          />
          <Route path='/' component={HomeScreen} exact />
          </Container>
        </main>
          <Footer />
        </Router>
      
  );
}

export default App;
