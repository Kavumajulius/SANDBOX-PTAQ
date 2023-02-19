import React, {useEffect, useRef, useState} from 'react';
import {View, TouchableWithoutFeedback, Text, Image, TouchableOpacity, ActivityIndicator} from 'react-native';

import Video from 'react-native-video';
import styles from './styles';

import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import avatar from '../../assets/images/avatar.jpg';
import colors from '../../assets/colors';
import generalStyles from '../../assets/generalstyles';
import InViewport from '../InViewPort';
import PostCarousel from '../PostCarousel';

const Post = (props) => {

  const [post, setPost] = useState(props.post);
  const [isLiked, setIsLiked] = useState(false);
  const [videoUri, setVideoUri] = useState('');


  const [paused, setPaused] = useState(false);
  const [forcePaused, setForcePaused]  = useState(false);
  const [isPreloading,setIsPreloading] = useState(true);
 
  const onPlayPausePress = () => {
    setPaused(!paused);
    setForcePaused(!forcePaused);
  };

  const onLikePress = () => {
    const likesToAdd = isLiked ? -1 : 1;
    setPost({
      ...post,
      likes: post.likes + likesToAdd,
    });
    setIsLiked(!isLiked);
  };

  const getVideoUri = async () => {
    
    setVideoUri(post.videoUri);

    if (post.videoUri.startsWith('http')) {
      setVideoUri(post.videoUri);
      return;
    }
    return null;
   // setVideoUri(await Storage.get(post.videoUri));
  };

  useEffect(() => { getVideoUri(); },[]);

  const handlePlaying = (isVisible) => {
    setPaused(!isVisible);
  }


  return (
    <View style={styles.container}>
      {isPreloading &&
            <ActivityIndicator
                animating
                color={colors.WHITE}
                size="large"
                style={{ flex: 1, position:"absolute", top:"50%", left:"45%" }}
            />
        }
      <TouchableWithoutFeedback onPress={onPlayPausePress} style={ isPreloading? styles.hidden: null}>
        <InViewport  onChange={handlePlaying}>
          <Video
            onLoadStart={() => setIsPreloading(true)}
            onReadyForDisplay={() => setIsPreloading(false)}
            source={{uri: videoUri}}
            style={styles.video}
            onError={(e) => console.log(e)}
            resizeMode={'cover'}
            repeat={true}
            paused={paused || forcePaused}
          />

          <View style={styles.uiContainer}>

            <TouchableOpacity style={ (paused || forcePaused) ? styles.videPlayButton : styles.hidden} onPress={onPlayPausePress}>
                <Entypo name={'controller-play'} size={50} color={'white'} />
            </TouchableOpacity>
            
          <View style={styles.topContainer}>

          <View style={styles.headerContainer}>
              <TouchableOpacity onPress={onLikePress}>
                 <Text style={styles.logo} >Pointaq</Text>
              </TouchableOpacity>
              <View style={[generalStyles.row]}>
                <TouchableOpacity style={styles.iconContainer} onPress={onLikePress}>
                  <FontAwesome5 name={'capsules'} size={20} color={colors.LIGHT_BLUE} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconContainer} onPress={onLikePress}>
                  <Feather name={'send'} size={20} color={colors.LIGHT_BLUE} />
                </TouchableOpacity>
              </View>
            </View>
            
            <View style={styles.actionsContainer}>
              <TouchableOpacity style={styles.iconContainer} onPress={onLikePress}>
                <Fontisto name={'language'} size={25} color={isLiked ? 'red' : 'white'} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconContainer} onPress={onLikePress}>
                <Fontisto name={'music-note'} size={25} color={isLiked ? 'red' : 'white'} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconContainer} onPress={onLikePress}>
                <MaterialCommunityIcons name={'bullseye'} size={25} color={isLiked ? 'red' : 'white'} />
              </TouchableOpacity>
            </View>

            </View>
            
            <View style={styles.bottomContainer}>
              <View>

                <View style={styles.authorRow}>
                  <Image
                source={avatar}
                resizeMode={'cover'}
                style={[generalStyles.roundedAvatar,generalStyles.borderAlternate]}
                />
                <Text style={styles.handle}>@{post.user.username}</Text>
                </View>

                <Text style={styles.description}>{post.description}</Text>

                <View style={styles.songRow}>
                  <Entypo name={'beamed-note'} size={24} color="white" />
                  <Text style={styles.songName}>{post.song.name}</Text>
                  <Image
                    style={styles.songImage}
                    source={{uri: post.song.image}}
                  />
                </View>

               <PostCarousel />

              </View>

            </View>
          </View>
          </InViewport>

      </TouchableWithoutFeedback>
    </View>
  );
};

export default Post;