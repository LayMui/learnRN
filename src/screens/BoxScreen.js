import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return <View style={styles.viewStyle}>
        <Text style={styles.text1Style}>Box Screen 1</Text>
        <Text style={styles.text2Style}>Box Screen 2</Text>
        <Text style={styles.text3Style}>Box Screen 3</Text>
    </View>
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'blue',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 200
    },
    text1Style: {
        borderWidth: 3,
        borderColor: 'red',
        flex:1
       
    },
     text2Style: {
        borderWidth: 3,
        borderColor: 'red',
       
    },
     text3Style: {
        borderWidth: 3,
        borderColor: 'red',
        alignSelf: 'stretch'
       
    }
});

export default BoxScreen;