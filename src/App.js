import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignPage from './pages/sign-in-sign-up/sign-in-sign-up.component';
import { auth } from './firebase/firebase.utils.js';

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            currentUser:null
        }
    }
    unsubscribe = null;
    componentDidMount(){
        //returns a unsubscribe function
        this.unsubscribe = auth.onAuthStateChanged(user => {
            this.setState({ currentUser:user })
            console.log("current user changed!", user)
        })
    }
    componentWillUnmount(){
        console.log(this.unsubscribe)
    }
    render(){
        return (
            <div>
                <Header currentUser={this.state.currentUser}/>
                <Switch>
                    <Route  exact path='/' component = { HomePage } />
                    <Route exact path='/shop' component = { ShopPage } />
                    <Route exact path='/signin' component = { SignPage } />
                </Switch>
            </div>
          );
      }
}

export default App;
