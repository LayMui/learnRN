import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

const HomeScreen = (props) => {
  console.log(props.navigation);
  return (
    <View>
    <Text style={styles.text}>Hi there!</Text>
    <Button 
      onPress={ () => props.navigation.navigate('Components')}
      title="Components Demo"/>
      <TouchableOpacity onPress={() => props.navigation.navigate('List')}>
        <Text>Go to List demo</Text>
      </TouchableOpacity>
      <Button 
      onPress={ () => props.navigation.navigate('Image')}
      title="Image Demo"/>
      <Button 
      onPress={ () => props.navigation.navigate('Counter')}
      title="Counter Demo"/>
</View>
  );

};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
