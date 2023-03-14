import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, FlatList} from 'react-native';
import ListItems from '../components/ListItems';

const ListPage = ({route, navigation}) => {
  const {name} = route.params;

  const [posts, setPosts] = useState([]);
 

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=10')
      .then(response => response.json())
      .then(json => setPosts(json));

  }, []);
  // console.log(posts);

  return (
    <View style={styles.container}>
      <Text style={styles.mainHeader}> Welcome {name}! </Text>
      <Text style={styles.suggestionText}> Top 10 Suggestions for you</Text>

      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => {
          return (
            <View>
              <ListItems item={item} />
            </View>
          );
        }}
      />

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
    marginBottom: 25,
  },
  suggestionText: {
    fontSize: 25,
    // alignContent: 'center',
    marginBottom: 25,
    color: '#0047AB',
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
