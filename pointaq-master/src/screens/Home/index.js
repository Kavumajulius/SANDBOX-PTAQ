import React, { useEffect, useState } from 'react';
import {View, Text,FlatList, Dimensions} from 'react-native';
import colors from '../../assets/colors';
import Post from '../../components/Post';
import posts from '../../data/posts';
const Home = () => {
 
 // const [posts, setPosts] = useState(allposts);

  useEffect(() => {

    const fetchPosts = async () => {
      // fetch all the posts
      try {
        
        //const response = await API.graphql(graphqlOperation(listPosts));
        //setPosts(response.data.listPosts.items);
       // setPosts(allposts);

      } catch (e) {
        console.error(e);
      }
    };

    fetchPosts();

  }, []);


  return (
    <View style={{backgroundColor:colors.PRIMARY}}>
      <FlatList style={{backgroundColor:colors.PRIMARY}}
        data={posts}
        initialScrollIndex={0}
        renderItem={({item}) => <Post post={item} />}
        showsVerticalScrollIndicator={false}
        snapToInterval={Dimensions.get('window').height}
        snapToAlignment='start'
        decelerationRate={'fast'}
      />
    </View>
  );
};

export default Home;