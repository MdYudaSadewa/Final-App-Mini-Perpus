import React from 'react';
import { Icon } from 'react-native-elements'
import { material } from 'react-native-typography';

import { StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,

} from 'react-native';


const gambar = require("./gambar/main_logo.png");


class Login extends React.Component {
    static navigationOptions={
        header: null,
      }

   
  render() {
   return (

      <View style={styles.containerMain}>
        <View >
            <Icon
                raised
                name='user'
                type='font-awesome'
                color='#ff9999'
                size = {20}
                onPress={()=> this.props.navigation.navigate('Layar9')}
              />
        </View>

        <View style={styles.box} >
         <Text style={material.display2White}>MINI PERPUS</Text>
        </View>
        
        <View style={styles.logobox} >
            <Image 
            style={styles.gambar}
            source={gambar}
            resizeMode = "cover"
            />   
        </View>
        
        <View style={styles.box1}>
             <TouchableHighlight activeOpacity={0.5} style={styles.buttonStyle} onPress={()=> this.props.navigation.navigate('Layar4')}>
                 <Text style={styles.buttonText}>DATA BUKU</Text>
             </TouchableHighlight>
             
   
             <TouchableHighlight activeOpacity={0.5} style={styles.buttonStyle}  onPress={()=> this.props.navigation.navigate('Layar7')}>
                 <Text style={styles.buttonText}>PEMINJAMAN BUKU</Text>
             </TouchableHighlight>

             <TouchableHighlight activeOpacity={0.5} style={styles.buttonStyle}  onPress={()=> this.props.navigation.navigate('Layar12')}>
                 <Text style={styles.buttonText}>KEMBALIKAN BUKU</Text>
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
    alignItems: 'center'
   },
  
  icon:{
   paddingLeft: 500
   
  },
   
  logobox:{
    paddingTop: 20
  },
  
  box:{
    paddingTop: 30
  },

  box1: {
    width: "100%",
    paddingTop: 10,
    marginLeft: 2,
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    textAlign: 'center'
  },

  box2: {
    width: "100%",
    paddingTop: 50,
    marginLeft: 2,
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    textAlign: 'center'
  },

  buttonText: {
      textAlign: "center",
      height: 40,
      width: "100%",
      marginTop: 10,
      color: "black",
      fontSize: 18
  },
  buttonStyle: {
    paddingTop: 10,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
    backgroundColor: "#c6cccd",
    marginTop: 20,
    marginBottom: 20,
    height: 60,
    width: "80%",
    borderRadius: 36,

},

text1:{
  textAlign: 'center',
  fontSize: 20,
  paddingTop: 20 
},
gambar: {
  width: 150,
  height: 150,
  
  },
});
export default Login;





