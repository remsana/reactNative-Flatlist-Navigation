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
        <View style={styles.button}>
          <Button
            title="Comments"
            onPress={() =>
              navigation.navigate('Details', {
                id: item.id,
              })
            }
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    margin: 5,
    padding: 5,
    borderWidth: 1,
    borderRadius: 8,
    width: 328,
    height: 197,
    borderColor: 'white',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  name: {
    fontSize: 20,
    color: '#0047AB',
  },
  button: {
    padding: 5,
    color: 'white',
    alignSelf: 'center',
    fontSize: 15,
  },
  


});
export default ListItems;
