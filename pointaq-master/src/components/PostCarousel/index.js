import React, {useEffect, useRef, useState} from 'react';
import {View, FlatList, Text, Image, Pressable} from 'react-native';
import { Placeholder,PlaceholderMedia,Progressive} from 'rn-placeholder';
import avatar from '../../assets/images/avatar.jpg';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

const PostCarousel = () => {

  const [showCarousel, setShowCarousel] = useState(false);

  const toggleCarousel = () => {
    setShowCarousel(!showCarousel);
  }

  return (
  <View>
    <View style={styles.toggleIconWrapper}>

    <Pressable  onPress={toggleCarousel} >
      {showCarousel &&
      <AntDesign name={'downsquare'} size={30} color="white" />
      }
      {!showCarousel &&
          <AntDesign name={'upsquare'} size={30} color="white" />
      }
    </Pressable>

  </View>
  {showCarousel &&
    <FlatList
        contentContainerStyle={{paddingLeft: 1, paddingRight: 5,paddingBottom:5,paddingTop:5,zIndex:4000}}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={[1, 2, 3, 4, 5,6,7,8,9,10]}
        keyExtractor={(item, index) => `Popular${index}`}
        renderItem={({item, index}) => {
          return (
            <View style={[styles.popularItem, {marginLeft: 8}]}>
                <Image
                  source={avatar}
                  style={{width:120, height: 150, borderRadius: 8}}
                />
            </View>
          );
        }}
      />
   }

  </View>
  );

}
export default PostCarousel;