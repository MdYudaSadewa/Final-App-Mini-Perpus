import React from 'react';
import { Icon } from 'react-native-elements'
import { material } from 'react-native-typography';
import axios from 'axios';
import { StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
  Image,
  Alert

} from 'react-native';


const gambar = require("./gambar/main_logo.png");


class Login extends React.Component {
    static navigationOptions={
        header: null,
      }

    constructor(props) {
    super(props);
    this.state = {
        username:'',
        password:'',
       
    };
  }
  
  render() {
    const { navigation } = this.props;
    
    handleSubmit = event => {
      axios
        .post("https://apiperpus.000webhostapp.com/API/login.php", {
          username: this.state.username,
          password: this.state.password
        })
        .then(function(response) {
          console.log(response);
          
          if (response.data.username == "Mydas") {
             navigation.navigate("Layar3");
            
          } else {
            Alert.alert(response.data.pesan);
          }
        });
    };

  return (

      <View style={styles.containerMain}>
        <View >
            <Icon
                raised
                name='close'
                type='font-awesome'
                color='#ff9999'
                size = {17}
                onPress={()=> this.props.navigation.navigate('Utama')}
              />
        </View>

        <View style={styles.logobox} >
         <Image 
          style={styles.gambar}
          source={gambar}
          resizeMode = "cover"
        />   
      
        </View>

        <View style={styles.box} >
         <Text style={material.display1White}>MINI PERPUS</Text>
        </View>
    

        <View style={styles.box1}>
            
            <TextInput
                placeholder="Username" 
                style={styles.textInput}
                onChangeText={username => this.setState({ username })}
            />
        </View>
        
        <View style={styles.box1}>
        
                <TextInput 
                  placeholder="Password"  
                  style={styles.textInput}
                  onChangeText={password => this.setState({ password })}
                />
        </View>

         <View style={styles.box2}>
             <TouchableHighlight activeOpacity={0.5} style={styles.buttonStyle} onPress={handleSubmit.bind(this)}>
                 <Text style={styles.buttonText}>Login</Text>
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
    paddingTop: 50
  },
  
  box:{
    paddingTop: 20
  },

  box1: {
    width: "100%",
    paddingTop: 20,
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

textInput: {
  width: 220,
  height: 50,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#ff9999",
  borderWidth: 1,
  borderColor: "white",
  borderRadius:20,  
  textAlign: "center",
  color: "white"
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





