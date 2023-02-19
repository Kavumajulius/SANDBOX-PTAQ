import React from 'react';
import {View, Text,FlatList} from 'react-native';
import styles from './styles';
import notifications from '../../data/notifications';

const NotificationsScreen = () => {

  const Item = ({ comment }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{comment.description}</Text>
    </View>
  )

  const renderItem = ({ item }) => (
    <Item comment={item} />
  );

  return (
    <View>
      <FlatList
        data={notifications}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default NotificationsScreen;
