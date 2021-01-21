import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, withRouter } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './Login/Login';
import { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/app_reduser';
import Preloader from './common/Preloader/Preloader';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/redux_store';
import { Provider } from 'react-redux';
import { withSuspense } from './hoc/withSuspense';

//import DialogsContainer from './components/Dialogs/DialogsContainer';
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
//import ProfileContainer from './components/Profile/ProfileContainer';
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/dialogs'
            render={withSuspense(DialogsContainer)} />
          <Route path='/profile/:userId?'
            render={withSuspense(ProfileContainer)} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
          <Route path='/users'
            render={() => <UsersContainer />} />
          <Route path='/login'
            render={() => <Login />} />
        </div>
      </div>
    );
  };
};

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
});

let AppContainer = compose(
  withRouter(connect(mapStateToProps, { initializeApp })(App)));

const SamuraiJSApp = (props) => {
  return <BrowserRouter>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </BrowserRouter>
};

export default SamuraiJSApp;