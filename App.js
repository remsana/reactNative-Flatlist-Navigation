import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';

import {StyleSheet} from 'react-native';
import HomePage from './screens/Home';
import ListPage from './screens/ListPage';
import Details from './screens/Details';

const HelloWorldApp = () => {

  
const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" component={HomePage} options={{
          title:""         
          
        }}/>
        <Stack.Screen name="List" component={ListPage} />
        <Stack.Screen name="Details" component={Details} />
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
