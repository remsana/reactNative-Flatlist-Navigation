import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, Text, View, Alert} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const HomePage = ({navigation}) => {
  const [selectedValue, setSelectedValue] = useState('');

  const login = () => {
    if (selectedValue === 'company') {
      Alert.alert(`Company selected`);
      navigation.navigate('Login');
    } else if (selectedValue === 'service') {
      Alert.alert(`service selected`);
      navigation.navigate('Login');
    } else {
      Alert.alert(`nothing selected`);
      navigation.navigate('Home');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.mainHeader}>Welcome to the App!!</Text>
      <Text style={styles.mainHeader}>Choose your organisation</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedValue}
          style={{height: 20, width: 300, color: 'black'}}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
          <Picker.Item label="Choose organisation" key={'unselectable'} value="default" />
          <Picker.Item label="Company" value="company" />
          <Picker.Item label="Service" value="service" />
        </Picker>
      </View>

      <TouchableOpacity onPress={() => login()}>
        <View style={styles.btnContainer}>
          <Text style={styles.loginButton}>Login</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: 'center',
  },
  mainHeader: {
    fontSize: 20,
    alignContent: 'center',
    color: '#0047AB',
    marginBottom: 15,
  },
  pickerContainer: {
    borderWidth: 1,
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
