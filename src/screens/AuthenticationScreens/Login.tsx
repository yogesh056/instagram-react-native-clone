import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useTextInput} from '../../components/Forms/FormHook';
import Icon from '../../components/Icon';
import {FacebookIcon} from '../../constants/icons';
import {authUser} from '../../store/actions/user';
import user from '../../store/user';

const Login: React.FC<any> = ({navigation}) => {
  const [mobileNoOrEmail, setMobileNoOrEmail, mobileNoOrEmailInput] =
    useTextInput('', '', 'Mobile Number or email', true, '');
  const [password, setPassword, passwordInput] = useTextInput(
    '',
    '',
    'Password',
    true,
    '',
  );

  const onLogin = () => {
    const existingUser = authUser(user.users, {mobileNoOrEmail, password});
    if (existingUser) {
      navigation.navigate('Home');
      Alert.alert('Logged in Successfully!');
    } else {
      Alert.alert('Not a valid Mobile no/email or Password');
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={require('../../assets/Logo.png')} />
      {mobileNoOrEmailInput}
      {passwordInput}
      <TouchableOpacity style={styles.button}>
        <Button color="#fff" title="Log in" onPress={() => onLogin()} />
      </TouchableOpacity>
      <Text style={styles.text}>OR</Text>
      <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
        <Icon url={FacebookIcon} style={{width: 16, height: 16}} />
        <Button color="#385185" title="Login with facebook" />
      </TouchableOpacity>

      <Text style={styles.text}>Forgot Password ?</Text>
      <Text style={styles.signUpText}>
        {"Don't Have an account? "}
        <Text
          style={styles.linkText}
          onPress={() => navigation.navigate('Register')}>
          Sign up
        </Text>
      </Text>
    </SafeAreaView>
  );
};
export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 45,
  },
  inputFiled: {
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#eaeaea',
    width: '100%',
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
