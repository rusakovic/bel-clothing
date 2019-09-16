import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    }
  }

  // when the user log-in we want to get user information from firebase, and we store it into the state
  // but we should remove this info from the state when the components are Unmount
  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
     if (userAuth) {
       const userRef = await createUserProfileDocument(userAuth);
      // with onSnaphot we can see the actual data in our DB document
      // snaphot itself contains the ID of the user. Data() all other info we stored
      userRef.onSnapshot(snapShot => {
         this.setState({
           currentUser: {
             id: snapShot.id,
             ...snapShot.data()
           }
         });
       })
     } else { // but if the user Logged out we should setState to 'userAuth => null' after logging out 
      this.setState({ currentUser: userAuth })
    }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth = null;
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
