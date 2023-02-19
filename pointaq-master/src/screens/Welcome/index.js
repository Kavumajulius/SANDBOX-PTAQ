import React from "react";
import { View,Text,Button, TouchableOpacity,TextInput, ScrollView ,Image} from "react-native";
import generalStyles from "../../assets/generalstyles";
import Ionicons from "react-native-vector-icons/Ionicons"
import colors from "../../assets/colors";
import styles from "./styles";
import logo from '../../assets/images/logo.png';

const WelcomeScreen = ({ navigation,route }) => {
    return (
    <ScrollView style={styles.scrollView} 
    showsVerticalScrollIndicator={false} 
    contentContainerStyle={ {flex:1}}>
    <View style={styles.container}>

      <Text style={generalStyles.logoText}>Pointaq</Text>
      <View style={styles.logoWrapper}>
          <Image  source={logo} resizeMode={'contain'} />
      </View>

      <View style={styles.circular}>
        
        <View style={styles.circleLeft}/>
        <View style={styles.circleRight}/>

      </View>

      <View style={styles.bottomContainer}>

       <TouchableOpacity
        style={[generalStyles.btn,generalStyles.bgSecondary]}
        title="Sign In"
        onPress={ () =>navigation.navigate("Root", { screen: "Home" }) }
        >
        <Text style={generalStyles.textWhite}>Sign Up</Text>

        </TouchableOpacity>

        <TouchableOpacity
        style={[generalStyles.btn,generalStyles.bgSecondary,generalStyles.mt10]}
        title="Register"
        onPress={ () =>navigation.navigate("Root", { screen: "Home" }) }
        >
        <Text style={generalStyles.textWhite}>Sign in with Email</Text>

        </TouchableOpacity>

        <View style={styles.buttonsRow}>
          <TouchableOpacity
          style={[generalStyles.btnHalf,generalStyles.bgAlternate]}
          title="Sign In"
          onPress={ () =>navigation.navigate("Root", { screen: "Home" }) }
          >
            <Text style={[generalStyles.textSecondary,generalStyles.textBold]}>Google</Text>
          </TouchableOpacity>

          <TouchableOpacity
          style={[generalStyles.btnHalf,generalStyles.bgAlternate]}
          title="Sign In"
          onPress={ () =>navigation.navigate("Root", { screen: "Home" }) }
          >
            <Text style={[generalStyles.textSecondary,generalStyles.textBold]}>Apple ID</Text>
          </TouchableOpacity>
        </View>
        
      <View style={styles.notesRow}>
        <Text style={[generalStyles.textWhite,generalStyles.textCenter]}>By Continuing, you agree to the Terms and Conditions</Text>
      </View>
      
      </View>
      
    </View>
    </ScrollView>
    );
  };

  export default WelcomeScreen;