import React from 'react';
import {Router, Scene} from 'react-native-router-flux';
import {EditPage, HomePage, LoginPage} from './pages/index';

export default function Navigation() {
  return (
    <Router>
      <Scene key="root">
        <Scene key="loginPage" hideNavBar component={LoginPage} initial />
        <Scene key="homePage" hideNavBar component={HomePage} />
        <Scene key="editPage" hideNavBar component={EditPage} />
      </Scene>
    </Router>
  );
}
