import React from 'react';
import {View, Text, Image} from 'react-native';
import color from '../../UI/color';
import styles from '../../styles/loginPage';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

export default function LoginPageComponent({
    onLogin,
    setUsername,
    setPassword,
    visibilityFunc,
    visibility,
    username,
    password,
    icon
}) {
  return (
    <LinearGradient
      colors={[color.purpleStart, color.purpleEnd]}
      start={{x: 0, y: 1}}
      end={{x: 1, y: 0}}
      style={styles.container}>
      <View style={styles.logo}>
        <Image style={styles.logoImg} source={require('../../assets/logo.png')} />
      </View>

      <View style={styles.topContainer}>
        <View style={styles.inputContainer}>
          <View style={styles.textInput1}>
            <Image
              style={styles.inputLogo}
              source={require('../../assets/user.png')}
              resizeMode="contain"
            />
            <TextInput
              style={styles.inputText}
              placeholder="Kullanıcı Adı"
              value={username}
              onChangeText={username => setUsername(username)}></TextInput>
          </View>
          <View style={styles.textInput2}>
            <Image
              style={styles.inputLogo}
              resizeMode="contain"
              source={require('../../assets/password.png')}
            />
            <View style={{flex: 3}}>
              <TextInput
                style={styles.inputText}
                placeholder="Şifre"
                secureTextEntry={visibility}
                value={password}
                onChangeText={password => setPassword(password)}></TextInput>
            </View>
            <View style={styles.visButtonCont}>
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => visibilityFunc()}
                style={styles.visButton}>
                <Image style={styles.visIcon} source={icon} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.loginButton}>
          <TouchableOpacity style={styles.button} onPress={() => onLogin()}>
            <Image
            resizeMode="contain"
              style={styles.buttonImage}
              source={require('../../assets/arrow.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity>
          <Text>Şifremi Unuttum</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}
