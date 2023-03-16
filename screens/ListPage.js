import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  TextInput,
  Keyboard,
} from 'react-native';
import ListItems from '../components/ListItems';

const ListPage = ({route, navigation}) => {
  const {name} = route.params;

  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=25')
      .then(response => response.json())
      .then(json => setPosts(json));
  }, []);
  // console.log(posts);

  return (
    <View style={styles.container}>
      <Text style={styles.mainHeader}> Welcome {name}! </Text>
      <Text style={styles.suggestionText}> Top 10 posts for you</Text>

      <View style={styles.userInput}>
        <TextInput
          autoCapitalize="none"
          placeholder="search here.."
          autoCorrect={false}
          onChangeText={searchTerm => setSearch(searchTerm)}
          value={search}
        />
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={posts}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          if (search === '') {
            return (
              <View>
                <ListItems item={item} />
              </View>
            );
          }
          if (item.title.toLowerCase().includes(search.toLocaleLowerCase()) ) {
            return (
              <View>
                <ListItems item={item} />
              </View>
            );

          }
          
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
    display: 'flex',
    alignItems: 'center',
  },
  mainHeader: {
    fontSize: 30,
    alignContent: 'center',
    marginBottom: 25,
  },
  suggestionText: {
    fontSize: 25,
    marginBottom: 25,
    color: '#0047AB',
  },
  btnContainer: {
    marginTop: 20,
    backgroundColor: '#0096FF',
    borderWidth: 1,
    borderRadius: 5,
    alignContent: 'center',
    marginVertical: 30,
  },
  loginButton: {
    padding: 5,
    color: 'white',
    alignSelf: 'center',
    fontSize: 15,
  },

  userInput: {
    borderRadius: 5,
    borderColor: 'lightgrey',
    borderWidth: 2,
    fontSize: 18,
    marginTop: 5,
    width: '70%',
    marginBottom: 10,
  },
});
export default ListPage;
