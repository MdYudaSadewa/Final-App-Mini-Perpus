
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = (props) => {
    return (
        <View style={styles.BoxHeader}>
            <Text style={styles.TextHeader}> {props.HeaderInfo} </Text>
        </View>
    );
}
const styles = StyleSheet.create({
  BoxHeader: {
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 10,
        paddingTop: 10,
        position: "relative",
        height: 60,
        width: '100%'
    },
    TextHeader: {
        fontSize: 20,
        color: "black",
        textAlign: "center"
    },

});
export default Header;
