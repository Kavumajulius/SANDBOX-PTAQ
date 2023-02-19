import colors from '../../assets/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      width:'100%',
      borderColor:colors.PRIMARY,
      backgroundColor:colors.PRIMARY
    },
    toggleIconWrapper:{
      flexDirection:'row',
      alignItems:'flex-end',
      justifyContent:'flex-end'
    }

});

export default styles;