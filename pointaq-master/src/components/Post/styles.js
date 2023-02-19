import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../assets/colors';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width,
    height,
    minHeight: Dimensions.get('window').height,
    borderColor:colors.PRIMARY,
    backgroundColor:colors.PRIMARY
  },
  hidden:{
    display:'none'
  },
  videPlayButton: {
    position: 'absolute',
    top: '40%',
    left: '45%',
    bottom: 0,
    right: 0,
    zIndex: 100,
  },
  video: {
    position: 'absolute',
    height:Dimensions.get('window').height,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    borderColor:colors.PRIMARY,
    backgroundColor:colors.PRIMARY
  },
  uiContainer: {
    height: '100%',
    justifyContent: 'flex-end',
    borderColor:colors.PRIMARY
  },
  topContainer: {
    position: 'absolute',
    top: 0,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'space-between',
    width:'100%'
  },
   headerContainer: {
    position: 'absolute',
    top: 0,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    width:'100%'
  },
  logo:{
    color:colors.ALTERNATE,
    alignSelf:"flex-start",
    fontSize:20
   },
  actionsContainer: {
    position: 'absolute',
    top: 30,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'space-between',
    width:'100%'
  },
  bottomContainer: {
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom:68,
    borderColor:colors.PRIMARY
  },
  authorRow:{
    flexDirection: 'row',
    alignItems:'center',
    paddingBottom:5
  },
  handle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 10,
    paddingHorizontal:10
  },
  description: {
    color: colors.WHITE,
    fontSize: 13,
    fontWeight: '900',
    marginBottom: 10,
  },
  songRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width:'100%'
  },
  songName: {
    color: colors.ALTERNATE,
    fontWeight: '900',
    fontSize: 16,
    marginLeft: 5,
    alignSelf:'flex-start'
  },

  songImage: {
    width: 30,
    height: 30,
    borderRadius: 25,
    borderWidth: 5,
    borderColor: colors.ALTERNATE,
    display:'none'
  },

  //  right container
  rightContainer: {
    display:'none',
    alignSelf: 'flex-end',
    height: 300,
    justifyContent: 'center',
    marginRight: 5,
    marginTop:0
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#fff',
  },

  iconContainer: {
    alignItems: 'center',
    padding:12
  },
  statsLabel: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 5,
  },
  carousel:{
    position: 'absolute',
    zIndex:2000
  }
});

export default styles;