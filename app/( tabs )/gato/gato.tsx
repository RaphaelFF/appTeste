import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function gato () {
  return (
    <View style={styles.container}>
      <Link href ="/gato/gato2"> ir para a tela do gato2</Link>
      <Text style={styles.text}>estou na tela GATO</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    color: '#fff'
  },
  text: {
    color: 'red'
  }
});
