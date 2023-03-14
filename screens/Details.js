import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, FlatList} from 'react-native';
import ListItems from '../components/ListItems';

const Details = ({route, navigation}) => {
  const [post, setPost] = useState();
  const [comments, setComments] = useState();

  const id = route.params.id;
  console.log(id);

  useEffect(() => {
    fetch(
      'https://jsonplaceholder.typicode.com/posts?_start=0&_limit=10&id=' + id,
    )
      .then(response => response.json())
      .then(json => setPost(json));
  }, []);
  //console.log(post);

  useEffect(() => {
    fetch(
      'https://jsonplaceholder.typicode.com/comments?&postId=' + id,
    )
      .then(response => response.json())
      .then(json => setComments(json));
  }, []);
  //console.log(comments);

  return (
    <View style={styles.container}>
      <FlatList
        data={post}
        renderItem={({item}) => {
          return (
            <View>
              <Text style={styles.name}>{item.id}. {item.title}</Text>
              <Text>{item.body}</Text>
              <View style={styles.commentSection}>
                <Text style={styles.commentMainText}>Comments</Text>
                <FlatList
                  data={comments}
                  renderItem={({item}) => {
                    return (
                      <View style={styles.commentContainer}>
                        <Text style={styles.comment}>{item.body}</Text>
                      </View>
                    );
                  }}></FlatList>
              </View>
            </View>
          );
        }}></FlatList>
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
  name: {
    fontSize: 20,
    color: '#0047AB',
  },
  commentSection: {
    marginTop: 30,
    display: 'flex',
    alignItems: 'center',
  },
  commentMainText: {
    fontSize: 20,
    color: '#0047AB',
  },
  commentContainer: {
    // borderWidth: 1,
    margin: 5,
    padding:10,
    borderBottomWidth : 5

  },
});
export default Details;
