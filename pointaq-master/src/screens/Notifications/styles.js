import {StyleSheet, Dimensions,StatusBar} from 'react-native';
import colors from '../../assets/colors';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      padding: 10,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 17,
    },
  });

  export default styles;