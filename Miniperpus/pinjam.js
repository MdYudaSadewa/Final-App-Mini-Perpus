import React from 'react';
import axios from 'axios';
import { StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
  Alert

} from 'react-native';


class Pinjam extends React.Component {
    static navigationOptions={
        header: null,
      }

    constructor(props) {
    super(props);
    this.state = {
        id_user:'',
      id_detailKategori:'',
    };
  }
  static navigationOptions = {
    title: 'Pinjam Buku',
    headerStyle: {
      backgroundColor: '#ff9999',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  render() {
    const { navigation } = this.props;
    handleSubmit = event => {
        axios.post('https://apiperpus.000webhostapp.com/API/pinjamBuku.php', {
            id_user: this.state.id_user,
            id_detailKategori: this.state.id_detailKategori,
           

          })
          .then(function (response) {
            console.log(response);
              Alert.alert(
              'Mini Perpus',
              'Anda berhasil Meminjam Buku',
             
              [
                {text: 'OK', onPress: () =>  navigation.navigate("Layar3")},
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
      <View style={styles.box1}>
        <Text>Petunjuk</Text>
        <Text>1. Scan buku untuk mendapatkan "Kode Input"</Text>
        <Text>2. Masukkan "Kode Input" untuk meminjam buku</Text>
        <Text>3. Hanya boleh meminjam satu jenis saja</Text>
        <Text>4. Waktu peminjaman selama satu minggu</Text>
       
        

      </View>
      <View style={styles.box1}>
            <TextInput
                placeholder="ID User" 
                style={styles.textInput}
                onChangeText={id_user => this.setState({ id_user })}
            />
        </View>
        <View style={styles.box1}>
            <TextInput
                placeholder="Kode Input" 
                style={styles.textInput}
                onChangeText={id_detailKategori => this.setState({ id_detailKategori })}
            />
        </View>
       <View style={styles.box2}>
             <TouchableHighlight activeOpacity={0.5} style={styles.buttonStyle} onPress={()=> handleSubmit()} >
                 <Text style={styles.buttonText}>Tambah Peminjaman</Text>
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
    height: '100%'
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
    paddingBottom: 30,
    marginLeft: 2,
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    textAlign: 'center'
  },

  box2: {
    width: "100%",
    paddingTop: 10,
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
export default Pinjam;





