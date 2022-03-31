import React, {useState} from 'react';
import {Alert} from 'react-native';
import {Actions} from 'react-native-router-flux';
import userList from '../../json/userList';
import LoginPageComponent from '../component/LoginPageComponent';

export default function LoginPageContainer() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [visibility, setVisibility] = useState(true);
  const [icon, setIcon] = useState(require('../../assets/visible.png'));

  function onLogin() {
    if (
      userList.filter(x => x.username === username && x.password === password).length > 0
    ) {
      Actions.homePage();
    } else {
      Alert.alert('Kullanıcı bilgilerini kontrol edin..');
    }
  }

  function visibilityFunc() {
    if (visibility === true) {
      setVisibility(false);
      setIcon(require('../../assets/unvisible.png'));
    } else {
      setVisibility(true);
      setIcon(require('../../assets/visible.png'));
    }
  }

  return (
    <LoginPageComponent
      onLogin={onLogin}
      setUsername={setUsername}
      setPassword={setPassword}
      visibilityFunc={visibilityFunc}
      visibility={visibility}
      username={username}
      password={password}
      icon={icon}
    />
  );
}
