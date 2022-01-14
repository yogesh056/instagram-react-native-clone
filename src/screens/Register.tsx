import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  TextInput,
  View,
  Text,
  Linking,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icon from '../components/Icon';
import {FacebookIcon} from '../constants/icons';
import {useTextInput} from '../components/FormHook';
import store from '../store';
import {addUser} from '../store/actions';
const Register: React.FC<any> = ({navigation}) => {
  const [mobileNoOrEmail, setMobileNoOrEmail, mobileNoOrEmailInput] =
    useTextInput('', '', 'Mobile Number or email', true, '');
  const [password, setPassword, passwordInput] = useTextInput(
    '',
    '',
    'Password',
    true,
    '',
  );
  const [userName, setUserName, userNameInput] = useTextInput(
    '',
    '',
    'Username',
    true,
    '',
  );
  const [fullName, setFullName, fullNameInput] = useTextInput(
    '',
    '',
    'Fullname',
    true,
    '',
  );

  const onSignUp = () => {
    store.newUser = {userName, fullName, mobileNoOrEmail, password};
    store.addUser();
    Alert.alert('Signed up Successfully!');
    navigation.navigate('Login');
  };
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={require('../assets/Logo.png')} />
      <Text style={styles.headText}>
        Sign up to see photos and videos from your friends.
      </Text>
      <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
        <Icon url={FacebookIcon} style={{width: 16, height: 16}} />
        <Button
          color="#385185"
          title="Login with facebook"
          onPress={() => onSignUp()}
        />
      </TouchableOpacity>
      <Text style={styles.text}>OR</Text>
      {mobileNoOrEmailInput}
      {userNameInput}
      {fullNameInput}
      {passwordInput}
      <TouchableOpacity style={styles.button}>
        <Button color="#fff" title="Sign Up" onPress={() => onSignUp()} />
      </TouchableOpacity>
      <Text style={styles.text}>
        {
          'By signing up, you agree to our Terms , Data Policy and Cookies Policy .'
        }
      </Text>
      <Text style={styles.signUpText}>
        {'Have an account? '}
        <Text
          style={styles.linkText}
          onPress={() => navigation.navigate('Login')}>
          Log in
        </Text>
      </Text>
    </SafeAreaView>
  );
};
export default Register;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 45,
  },
  text: {
    margin: 10,
    color: '#8e8e8e',
    textAlign: 'center',
    fontSize: 13,
  },
  signUpText: {
    margin: 10,
    textAlign: 'center',
    fontSize: 13,
  },
  linkText: {
    textAlign: 'center',
    color: '#0095f6',
  },
  headText: {
    textAlign: 'center',
    color: '#8e8e8e',
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 20,
    marginBottom: 20,
  },
  button: {
    color: '#fff',
    backgroundColor: '#0095f6',
    borderRadius: 5,
    width: '100%',
    fontWeight: '400',
    marginTop: 5,
    marginBottom: 5,
  },
  logo: {
    width: '70%',
    height: '10%',
    margin: 20,
  },
});
