import React from 'react';
import {StyleSheet, Text, View, Button, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const ListItems = ({item}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.name}> Post # {item.id} </Text>
        <Text style={styles.year}> Title : {item.title} </Text>
        <Button
          title="Details"
          onPress={() =>
            navigation.navigate('Details', {
              id: item.id,
            })
          }
        />
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
    fontSize: 20,
    color: '#0047AB',
  },
});
export default ListItems;
