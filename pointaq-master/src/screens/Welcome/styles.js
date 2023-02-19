import { Dimensions, StyleSheet } from "react-native";
import colors from "../../assets/colors";

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        alignItems:"center",
        paddingTop:"8%",
        backgroundColor:colors.PRIMARY
    },
    circular:{
           width:"100%",
           height:300,
           flexDirection:'row',
           alignItems:"center",
           justifyContent:"center",
           marginTop:40
    },
    circleLeft:{
        minWidth:deviceWidth*(60/100),
        maxWidth:deviceWidth*(60/100),
        minHeight:deviceWidth*(60/100),
        maxHeight:deviceWidth*(60/100),
        borderWidth:40,
        borderColor:colors.WHITE,
        borderRadius:deviceWidth/2,
        marginLeft:-110,
        marginRight:10
},
    circleRight:{
        minWidth:deviceWidth*(40/100),
        maxWidth:deviceWidth*(40/100),
        minHeight:deviceWidth*(40/100),
        maxHeight:deviceWidth*(40/100),
        borderWidth:30,
        borderColor:colors.WHITE,
        borderRadius:deviceWidth/2,
        marginRight:-110
    },
    bottomContainer:{
        position:'absolute',
        bottom:0,
        paddingTop:10,
        paddingBottom:10,
        paddingHorizontal:20
    },
    logoWrapper:{
        maxHeight:10
    },
    buttonsRow:{
        width:"100%",
        flexDirection:'row',
        alignItems:"center",
        justifyContent:"center",
        marginTop:5,
   },
   notesRow:{
     width:"100%",
     alignItems:"center",
     bottom:0,
     padding:10
   }
   
});

export default styles;