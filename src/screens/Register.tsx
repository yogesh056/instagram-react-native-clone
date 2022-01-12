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
} from 'react-native';
import Icon from '../components/Icon';
import {FacebookIcon} from '../constants/icons';
const Register: React.FC<any> = ({navigation}) => {
  const [mobileNoOrEmail, setMobileNoOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [fullName, setFullName] = useState('');

  const onSignUp = () => {};
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
      <TextInput
        style={styles.inputFiled}
        placeholder="Mobile Number or Email"
        onChangeText={mobileNoOrEmail =>
          setMobileNoOrEmail(mobileNoOrEmail)
        }></TextInput>
      <TextInput
        style={styles.inputFiled}
        placeholder="Username"
        onChangeText={userName => setUserName(userName)}></TextInput>
      <TextInput
        style={styles.inputFiled}
        placeholder="Full Name"
        onChangeText={fullName => setFullName(fullName)}></TextInput>
      <TextInput
        style={styles.inputFiled}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={password => setPassword(password)}></TextInput>
      <TouchableOpacity style={styles.button}>
        <Button color="#fff" title="Sign Up" onPress={() => onSignUp()} />
      </TouchableOpacity>
      <Text style={styles.text}>
        By signing up, you agree to our Terms , Data Policy and Cookies Policy .
      </Text>
      <Text style={styles.signUpText}>
        Have an account?{' '}
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
    fontWeight: '600',
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
