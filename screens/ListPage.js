import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import ListItems from '../components/ListItems';

const ListPage = ({route, navigation}) => {
  const {name} = route.params;

  const listOFItems = [
    {
        id: 1,
        name: "Lorem Ipsum",
        year: "2022",
        genre: "Lorem"
    },
    {
        id: 2,
        name: "Ipsum Dolor",
        year: "2021",
        genre: "Dolor"
    },
    {
        id: 3,
        name: "Dolor Ipsum",
        year: "2020",
        genre: "Ipsum"
    },
    {
        id: 4,
        name: "Lorem Ipsum Dolor",
        year: "2019",
        genre: "Dolor"
    },
    {
        id: 5,
        name: "Ipsum Dolor Lorem",
        year: "2022",
        genre: "Dolor"
    },
    {
        id: 6,
        name: "Lorem Ipsum",
        year: "2022",
        genre: "Lorem"
    },
    {
        id: 7,
        name: "Ipsum Dolor",
        year: "2021",
        genre: "Dolor"
    },
    {
        id: 8,
        name: "Dolor Ipsum",
        year: "2020",
        genre: "Ipsum"
    },
    {
        id: 9,
        name: "Lorem Ipsum Dolor",
        year: "2019",
        genre: "Dolor"
    },
    {
        id: 10,
        name: "Ipsum Dolor Lorem",
        year: "2022",
        genre: "Dolor"
    }
  ]

  return (
    <View style={styles.container}>
      <Text style={styles.mainHeader}> Welcome {name}! </Text>

      <Text style={styles.suggestionText}> Top 10 Suggestions for you</Text>

      <FlatList data={listOFItems} renderItem={({item}) => {
        return (
            <View>
           <ListItems item={item}/>
            </View>
        )
      }}/>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <View style={styles.btnContainer}>
          <Text style={styles.loginButton}>Logout</Text>
        </View>
      </TouchableOpacity>
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
    marginBottom:25
  },
  suggestionText: {
    fontSize: 25,
    // alignContent: 'center',
    marginBottom:25,
    color: "#0047AB"
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
export default ListPage;
