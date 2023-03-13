import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';

import {StyleSheet, Text, View} from 'react-native';
import HomePage from './screens/Home';
import ListPage from './screens/ListPage';

const HelloWorldApp = () => {

  
const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" component={HomePage} />
        <Stack.Screen name="List" component={ListPage} />

      </Stack.Navigator>
    </NavigationContainer>    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
  },
});
export default HelloWorldApp;
