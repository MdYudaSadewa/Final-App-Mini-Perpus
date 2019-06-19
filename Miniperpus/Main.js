import React from 'react';
import { StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image

} from 'react-native';


import { material } from 'react-native-typography';
const gambar = require("./gambar/main_logo.png");

class Main extends React.Component {
  static navigationOptions={
    header: null,
  }
  render() {
  return (

      <View style={styles.containerMain}>
      <View style={styles.box} >
          <Text style={material.display2}>MINI PERPUS</Text>
         
      </View>
      <Image 
          style={styles.gambar}
          source={gambar}
          resizeMode = "cover"
          />

        <View style={styles.box1}>
             <TouchableHighlight activeOpacity={0.5} style={styles.buttonStyle} onPress={()=> this.props.navigation.navigate('Layar1')}>
                 <Text style={styles.buttonText}>Login</Text>
             </TouchableHighlight>
   
             <TouchableHighlight activeOpacity={0.5} style={styles.buttonStyle}  onPress={()=> this.props.navigation.navigate('Layar2')}>
                 <Text style={styles.buttonText}>Sign In</Text>
             </TouchableHighlight>
         </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#ff9999',
    flex: 1,
    alignItems: 'center',
   },
 
  box:{
    paddingTop: 100
  },

  box1: {
    paddingTop:30,
    width: 500,
   justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    textAlign: 'center'
  },
 
buttonStyle: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
    backgroundColor: "#c6cccd",
    marginTop: 20,
    marginBottom: 20,
    height: 60,
    width: "60%",
    borderRadius: 36,
},

buttonText: {
  textAlign: "center",
  height: 40,
  width: "100%",
  marginTop: 10,
  color: "black",
  fontSize: 18
},

text1:{
  textAlign: 'center',
  fontSize: 20,
  paddingTop: 20 
},
gambar: {
  width: 200,
  height: 200
  },
});
export default Main;