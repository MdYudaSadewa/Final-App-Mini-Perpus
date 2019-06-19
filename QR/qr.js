'use strict';
 
import React, { Component } from 'react';
 
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  View,
  Button,
  Alert
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import axios from 'axios';
 
class Qr extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataqr: '',
      status: 'Ready'
    };
  }
 
 
  onSuccess(e) {
    this.setState({
      dataqr:this.state.dataqr+', '+e.data,
      status: 'Coba Lagi'
    })
    Alert.alert(
      'Mini Perpus',
      ''+e.data,
      [
        {text: 'OK', onPress: () =>  this.props.navigation.navigate("Layar8")},
      ],
      { cancelable: false }
    )
  }

  static navigationOptions = {
    title: 'Scan Buku',
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
    return (
      <View style={styles.con}>
      <QRCodeScanner
      style={styles.qrs}
      showMarker={true}
      onRead={this.onSuccess.bind(this)}
      ref={(node) =>{this.scanner = node}}
      
      bottomContent={
        <View style={styles.CodeText}>
        <Button 
       
          onPress={() => {
            this.scanner.reactivate()
            this.setState({status:'Ready'})
            }
          }
          title={this.state.status}
        />
       
      </View>                   
      }
      />
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  con:{
    backgroundColor:'#ff9999',
    flex:1
  },
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    
    paddingTop: 20,
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

  CodeText:{
    paddingTop:50
  },
  qrs:{
    height:10
  },
});
 

export default Qr;