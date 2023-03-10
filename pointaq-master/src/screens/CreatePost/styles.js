import { StyleSheet } from 'react-native';
import colors from '../../assets/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  textInput: {
    margin: 10,
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: colors.ALTERNATE,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    height: 50,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: 'bold',
  }
});

export default styles;