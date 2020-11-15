import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

import './App.css';

class App extends React.Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     currentUser: null
  //   }
  // }

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          // Dispatch
          setCurrentUser({
            id: snapshot.id,     // action.payload on user.action setCurrentUser
            ...snapshot.data()
          });
        });
      } else {
        // will set currectUser to null, because it didnt pass conditional
        // this.setState({ currentUser: userAuth });
        setCurrentUser(userAuth); // dont need an object just current user, this stumped me now signin/out button
      }
      
      
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
          <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact
            path='/signin'
            render={ () => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)} 
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps =({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)) // calls setCurrentUser in user.action with user obj passed to it on props, see above
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
