import { StyleSheet } from "react-native";
import colors from "../colors";

const generalStyles = StyleSheet.create({

    roundedAvatar:  {
            resizeMode: 'cover',
            width: 35,
            height: 35,
            borderRadius: 35 / 2,
            overflow: "hidden",
            borderWidth: 3,
            borderColor: colors.WHITE
   },
   borderAlternate:{
    borderColor: colors.ALTERNATE
   },
   row:{
    flexDirection:"row"
   },
   container:{
    flex:1,
    backgroundColor:colors.PRIMARY,
    padding:"3%",
},
scrollView:{
    flex:1,
    backgroundColor:"none",
    height:"100%",
    paddingBottom:30,
},
whiteContainer:{
    flex:1,
    backgroundColor:colors.WHITE,
    padding:"3%",
},
flexed:{
    justifyContent:"center",
    alignItems:"center"
},
padded10:{
    padding:10
},
padded20:{
    padding:20
},
padded30:{
    padding:30
},
greylabel:{
    color:colors.WHITE,
    textTransform:"uppercase",
    fontWeight:"600",
},
textSuccess:{
    color:colors.SUCCESS
},
textDanger:{
    color:colors.DANGER
},
textWhite:{
    color:colors.WHITE
},
textPrimary:{
    color:colors.PRIMARY
},
textAlternate:{
    color:colors.ALTERNATE
},
textSecondary:{
  color:colors.SECONDARY
},
textBold:{
  fontWeight:"bold"
},
bgPrimary:{
    backgroundColor:colors.PRIMARY
},
textCenter:{
  textAlign:"center"
},
bgSecondary:{
  backgroundColor:colors.SECONDARY
},
bgAlternate:{
  backgroundColor:colors.ALTERNATE
},
bgWhite:{
    backgroundColor:colors.WHITE,
},
btn:{
    height:50,
    borderRadius:30,
    justifyContent:"center",
    alignItems:"center",
    minWidth:"100%",
    marginVertical:10
},
btnHalf:{
  height:50,
  borderRadius:30,
  justifyContent:"center",
  alignItems:"center",
  minWidth:"48%",
  marginVertical:10,
  marginHorizontal:2
},
btnPrimaryOutline:{
    borderColor:colors.PRIMARY,
    borderWidth:1
},
input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor:colors.WHITE,
    borderRadius:5,
    width:"100%"
  },
  mt10:{
    marginTop:10
  },
  mt120:{
    marginTop:20
  },
  mt30:{
    marginTop:30
  },
  logoText:{
    fontSize:30,
    color:colors.ALTERNATE,
    fontWeight:"400"
  },
  simpleHeading:{
    width:"100%",
    padding:10,
    fontWeight:"bold",
    textAlign:"center",
    fontSize:18
  },
  subHeading:{
    width:"100%",
    padding:10,
    fontWeight:"bold",
    textAlign:"center",
    color:colors.WHITE
  },
  spacedText:{
    letterSpacing:20
  },
  noVerticalSpace:{
    paddingVertical:0,
    marginTop:-10
  },
  spacer:{
    width:"100%",
    height:20
  },
  alignLeft:{
    textAlign:"left"
  }
    
});

export default generalStyles;