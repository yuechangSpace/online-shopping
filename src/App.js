import React from 'react';
import { auth , getUserProfile } from './firebase/firebase.utils.js';
import {  connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import { setCurrentUser } from './redux/reducer/user/user.actions.js';
import { selectCurrentUser } from './redux/reducer/user/user.selector.js';
import { createStructuredSelector } from 'reselect';

import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';
import Header from './components/header/header.component';
import SignPage from './pages/sign-in-sign-up/sign-in-sign-up.component';

class App extends React.Component {
    unsubscribe = null;
    componentDidMount(){
        console.log("props",this.props)
        const { setCurrentUser } = this.props;
        // console.log("prps: ",this.props)
        //returns a unsubscribe function
        this.unsubscribe = auth.onAuthStateChanged(user => {
            //if the authState change to signed out (user = null): clear the user state of our App
            //else if the user just signed in: getUserProfile and save it into our App
            if (!user) setCurrentUser(user)
            else if (user){           
                //getUserProfile: returns the userRef from firebase
                //it means to get OR create a user profile 
                getUserProfile(user)
                .then(userRef=>{
                    userRef.get()
                    .then(doc=>{
                            if(doc.exists) 
                                setCurrentUser(doc.data())
                            console.log("current user signed in")
                        })
                })
            }
        })
    }
    componentWillUnmount(){
        this.unsubscribe();
    }
    render(){
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path='/online-shopping' component = { HomePage } />
                    <Route exact path='/shop' component = { ShopPage } />
                    <Route exact path='/signin' render = { ()=> this.props.currentUser?<Redirect to='/online-shopping'/>:<SignPage /> } />
                    <Route exact path='/checkout' component={ CheckoutPage } />
                </Switch>
            </div>
          );
      }
}

const mapStateToProps = createStructuredSelector({
    currentUser:selectCurrentUser
})

//define the action we are taking in from user.actions
//pass the 'dispatch' function into "App", for storing the 'setState' function 
const mapDispatchToProps = (dispatch) =>{
    // console.log(dispatch)
    //dispatch is the built-in func that was brought in by redux
    return {
    setCurrentUser:(user)=>dispatch(setCurrentUser(user))
}}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
