import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ListItems = ({item}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.name}> Name: {item.name} </Text>
        <Text style={styles.year}> Year: {item.year} </Text>
        <Text style={styles.genre}> Genre: {item.genre} </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 250,
    backgroundColor: '#F0FFFF',
    margin: 5,
    padding: 5,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#0000FF',
  },
  name: {
    fontSize:20,
    color: "#0047AB"
  }
});
export default ListItems;
