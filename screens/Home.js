import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';

const HomePage = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log(`Username : ${username} + password : ${password}`);

    if (username === 'remya' && password === 'test') {
      Alert.alert(`Welcome ${username}!`);
      navigation.navigate('List', {name:  `${username}`});
    } else {
      Alert.alert('Incorrect username or password!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.mainHeader}> Welcome! </Text>

      <View style={styles.formContainer}>
        <Text style={styles.formLabels}>Enter your username:</Text>
        <TextInput
          style={styles.userInput}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={username => setUsername(username)}
          value={username}></TextInput>
        <Text style={styles.formLabels}>Enter your password:</Text>
        <TextInput
          style={styles.userInput}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={password => setPassword(password)}
          value={password}
          secureTextEntry={true}></TextInput>
        <TouchableOpacity onPress={() => handleLogin()}>
          <View style={styles.btnContainer}>
            <Text style={styles.loginButton}>Login</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingHorizontal: 30,
    paddingTop: 30,
    backgroundColor: '#fff',
  },
  mainHeader: {
    fontSize: 30,
    alignContent: 'center',
  },
  formContainer: {
    marginTop: 50,
    paddingHorizontal: 10,
  },
  formLabels: {
    marginTop: 10,
  },
  userInput: {
    borderRadius: 5,
    borderColor: 'lightgrey',
    borderWidth: 1,
    fontSize: 18,
    marginTop: 5,
  },
  btnContainer: {
    marginTop: 20,
    backgroundColor: '#0096FF',
    borderWidth: 1,
    borderRadius: 5,
    alignContent: 'center',
  },
  loginButton: {
    padding: 5,
    color: 'white',
    alignSelf: 'center',
    fontSize: 15,
  },
});
export default HomePage;
