import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import styles from './styles';

const CreatePost = () => {
    
  const [description, setDescription] = useState('');
  const [videoKey, setVideoKey] = useState(null);

  const route = useRoute();
  const navigation = useNavigation();

  const uploadToStorage = async (filePath) => {
   //
   setVideoKey("000000");

  };

  useEffect(() => {
    uploadToStorage(route.params.videoUri);
  }, []);


  const onPublish = async () => {
    // create post to the API
    if (!videoKey) {
      console.warn('Video is still uploading, please wait');
      return;
    }
    navigation.navigate("Root", { screen: "Home" });
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={description}
        onChangeText={setDescription}
        numberOfLines={5}
        placeholder={'Description'}
        style={styles.textInput}
      />
      <TouchableOpacity onPress={onPublish}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Publish</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CreatePost;