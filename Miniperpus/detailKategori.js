import React from 'react'; 
import { View,FlatList } from 'react-native' 
import { ListItem } from 'react-native-elements' 
import axios from 'axios';
import Header from "./header";

class Detailkategori extends React.Component{ 
    constructor(props) { 
      super(props); 
        this.state = { 
             data: [],
             id_kategori : this.props.navigation.state.params.id_kategori, 
             
        }; 
    } 
    
    componentDidMount(){ 
        axios.get("https://apiperpus.000webhostapp.com/API/getDetailKategori.php?id_Kategori="+ this.state.id_kategori).then((response)=>{ 
        console.log(response.data); 
        this.setState({ data:response.data }); 
        }) 
        .catch(function (error) { 
            console.log(error); 
        }); 
    } 
   
    static navigationOptions = {
        title: 'Daftar Buku',
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
            <View> 
                <FlatList 
                    keyExtractor={(item, index) => index.toString()} 
                    data={this.state.data} 
                    renderItem={({ item }) => ( 
                        <ListItem style={{ paddingTop:2, backgroundColor:'#d2d4d8'}}
                            title={item.Judul} 
                            leftAvatar={{source: { uri:"https://apiperpus.000webhostapp.com/GambarBuku/"+ item.gambar},}} 
                            subtitle={item.lokasi }
                           
                        /> 
                    ) 
                    } 
                /> 
            </View> 
        ) 
    } 
} 

export default Detailkategori; 