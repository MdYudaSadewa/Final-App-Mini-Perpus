import React from 'react';
import { StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  FlatList

} from 'react-native';
import axios from 'axios';


import { material } from 'react-native-typography';
const gambar = require("./gambar/main_logo.png");

class Profil extends React.Component {
    constructor(props) { 
        super(props); 
          this.state = { 
               data: [],
               id_user : '1', 
              
               
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
   
    

    static navigationOptions = {
        title: 'Profil',
        headerStyle: {
          backgroundColor: '#ff9999',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      };
  render() {
    
  return (
      
      <View style={styles.containerMain}>
  
         
          <View style={styles.box} > 
            
            <FlatList
                  
                   keyExtractor={(item, index) => index.toString()} 
                   data={this.state.data} 
                   renderItem={({ item }) => ( 
                    
                        <View>
                            <View style={styles.box1}>
                                <Text style={material.display2}>Halo {item.username}</Text>
                            </View>

                            <View style={styles.box3} >    
                               <View style={styles.box4}>
                                <Text style={styles.Texts}>ID User : </Text>
                                <Text style={styles.Texts1}>  {item.id_user} </Text>
                                </View>
                                <View style={styles.box4}>
                                <Text style={styles.Texts}>Nama Depan : </Text>
                                <Text style={styles.Texts1}>  {item.nama_depan} </Text>
                                </View>
                                <View style={styles.box4}>
                                <Text style={styles.Texts}>Nama Belakang :</Text>
                                <Text style={styles.Texts1}>  {item.nama_belakang} </Text>
                                </View>
                                <View style={styles.box4}>
                                <Text style={styles.Texts}>Email :</Text>
                                <Text style={styles.Texts1}>  {item.email} </Text>
                                </View>
                                
                              
                                  </View>



                                <View style={styles.box2}>
                                <TouchableHighlight activeOpacity={0.5}  onPress={()=> this.props.navigation.navigate('Layar11',{id_user: item.id_user})} style={styles.buttonStyle} >
                                    <Text style={styles.buttonText}>Edit Profil</Text>
                                </TouchableHighlight>
                                
                                <TouchableHighlight activeOpacity={0.5} onPress={()=> this.props.navigation.navigate('Layar10',{id_user: item.id_user})} style={styles.buttonStyle} >
                                    <Text style={styles.buttonText}>Riwayat</Text>
                                </TouchableHighlight>
                                </View>
                            </View>
                       
                   )} 
               /> 
           </View> 
        </View>

   
    );
  }
}


const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#ff9999',
    flex: 1,
   
   },
 
  box:{
    paddingTop: 10
  },

  box1: {
    paddingTop:20,
    width: '100%',
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
  box3:{
    paddingTop: 20  
  },
  box4:{
    paddingLeft: 25,
    paddingTop: 15,
    backgroundColor:'#f29d9d'  
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
buttonStyle1: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
    backgroundColor: "#ff9999",
    marginTop: 20,
    marginBottom: 20,
    height: 70,
    width: "100%",
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

  Texts:{
    fontSize:17,
    
  },
  Texts1:{
    fontSize:27,

  }
});
export default Profil;