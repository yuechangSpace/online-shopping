import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignPage from './pages/sign-in-sign-up/sign-in-sign-up.component';
import { auth , getUserProfile } from './firebase/firebase.utils.js';

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
            //if the authState change to signed out (user = null): clear the user state of our App
            //else if the user just signed in: getUserProfile and save it into our App
            if (!user) this.setState({currentUser:user})
            else if (user){           
                //getUserProfile: returns the userRef from firebase
                //it means to get OR create a user profile 
                getUserProfile(user)
                .then(userRef=>{
                    userRef.get()
                        .then(doc=>{
                            console.log(doc.data())
                            if(doc.exists) 
                                this.setState({ currentUser:doc.data() },
                                console.log("current user signed in"))
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
                <Header currentUser={this.state.currentUser}/>
                <Switch>
                    <Route  exact path='/online-shopping' component = { HomePage } />
                    <Route exact path='/shop' component = { ShopPage } />
                    <Route exact path='/signin' component = { SignPage } />
                </Switch>
            </div>
          );
      }
}

export default App;
