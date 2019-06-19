import React from 'react'; 
import { View,FlatList, StyleSheet } from 'react-native' 
import { ListItem } from 'react-native-elements' 
import axios from 'axios';
import Header from "./header";

class Kategori extends React.Component{ 
    constructor(props) { 
      super(props); 
        this.state = { 
             data: [], 
        }; 
    } 
    componentDidMount(){ 
    axios.get("https://apiperpus.000webhostapp.com/API/getKategoriBuku.php").then((response)=>{ 
        console.log(response.data); 
        this.setState({ data:response.data }); 
        }) 
        .catch(function (error) { 
            console.log(error); 
        }); 
    } 
    static navigationOptions = {
        title: 'Kategori Buku',
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
            
             <FlatList
                   
                    keyExtractor={(item, index) => index.toString()} 
                    data={this.state.data} 
                    renderItem={({ item }) => ( 
                    <ListItem style={{ paddingTop:2, backgroundColor:'#d2d4d8'}}
                        onPress={()=> this.props.navigation.navigate('Layar5',{id_kategori: item.id_kategori})}
                        title={item.NamaKategori} 
                        leftAvatar={{source: { uri:"https://apiperpus.000webhostapp.com/GambarBuku/"+ item.gambar},}} 
                    /> 
                    )} 
                /> 
                
            </View> 
        ) 
    } 
} 



const styles = StyleSheet.create({
    containerMain: {
      backgroundColor: 'white',
      flex: 1,
    
     },
})
export default Kategori; 