'use strict';
 
import React, { Component } from 'react';
 
import {AppRegistry, StyleSheet, Text, Alert, View, Button
} from 'react-native';
 
import QRCodeScanner from 'react-native-qrcode-scanner';
 
class Newqr extends Component {
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
      'QR Code',
      'Code : '+e.data,
      [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    )
  }
 
  render() {
    return (
    
        <View style={styles.conMain}>
          <View style={styles.conHeader}>
              <Text style={styles.textHeader}> [REY1024] Contoh QR Code</Text>
          </View>

         
            <QRCodeScanner
              onRead={this.onSuccess.bind(this)}
              ref={(node) =>{this.scanner = node}}
              style={styles.conQR}
              topContent={
                <View>
                  <Text style={styles.centerText}>Silakan klik Coba Lagi untuk scan ulang</Text>
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
              bottomContent={
                <View>
                  <Text> Code {this.state.dataqr} </Text>
                </View>                    
              }
            />
          </View>
     
    );
  }
}
const styles = StyleSheet.create({
  conMain : {
    flex:1
  },
  conHeader : {
    height:100,
    backgroundColor: '#6200EE',
    alignItems: 'center',
    justifyContent: 'center',
    

  },
  textHeader : {
    fontSize: 18,
    color :'white'
  },
  conQR : {
   
    padding: 5
  },
  centerText: {
    fontSize: 12,
    color: '#777',
  }
});


//AppRegistry.registerComponent('Newqr', () => Newqr);
export default Newqr;