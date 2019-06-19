import React from 'react';
import { Icon } from 'react-native-elements'
import { material } from 'react-native-typography';
import axios from 'axios';
import { StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
  Alert,
  FlatList

} from 'react-native';


class Editprofil extends React.Component {
    static navigationOptions={
        header: null,
      }

    constructor(props) {
    super(props);
    this.state = {
        Fname:'',
        Lname:'',
        email:'',
        id_user:  this.props.navigation.state.params.id_user,
    };
  }
  componentDidMount(){ 
    axios.get("https://apiperpus.000webhostapp.com/API/getUser.php?id_user="+ this.state.id_user ).then((response)=>{ 
    console.log(response.data); 
    this.setState({ data:response.data }); 
    }) 
    .catch(function (error) { 
        console.log(error); 
    }); 
} 

  
  render() {
    const { navigation } = this.props;

    handleSubmit = event => {
        axios.post('https://apiperpus.000webhostapp.com/API/update_user.php', {
            nama_depan: this.state.Fname,
            nama_belakang: this.state.Lname,
            email: this.state.email,
            id_user: this.state.id_user,
            

          })
          .then(function (response) {
            console.log(response);
           
           Alert.alert(
            'Mini Perpus',
            'Data berhasil Berhasil Disimpan',
           
            [
              {text: 'OK', onPress: () =>  navigation.navigate("Layar9")},
            ],
            { cancelable: false }
          )

          })
          .catch(function (error) {
            console.log(error);
          });
    }
  return (
   
      <View style={styles.containerMain}>
        <View >
            <Icon
                raised
                name='close'
                type='font-awesome'
                color='#ff9999'
                size = {17}
                onPress={()=> this.props.navigation.navigate('Layar3')}
              />
              
        </View>

            
      
        <View style={styles.box} >
         <Text style={material.display1White}>Ubah Data</Text>
        </View>
        <FlatList
                  
                  keyExtractor={(item, index) => index.toString()} 
                  data={this.state.data} 
                  renderItem={({ item }) => ( 
        <View style={styles.box2}>           
        <View style={styles.box1}>
            <TextInput
                placeholder={item.nama_depan} 
                style={styles.textInput}
                onChangeText={Fname => this.setState({ Fname })}
            />
        </View>

        <View style={styles.box1}>
            <TextInput
                placeholder={item.nama_belakang} 
                style={styles.textInput}
                onChangeText={Lname => this.setState({ Lname })}
            />
        </View>

        <View style={styles.box1}>
            <TextInput
                placeholder={item.email} 
                style={styles.textInput}
                onChangeText={email => this.setState({ email })}
            />
        </View>
        </View>
            )} 
               /> 

        <View style={styles.box1}>
             <TouchableHighlight activeOpacity={0.5} style={styles.buttonStyle} onPress={()=> handleSubmit()} >
                 <Text style={styles.buttonText}>Simpan</Text>
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
    paddingTop: 100,
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
export default Editprofil;





