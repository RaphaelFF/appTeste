import { Text, View, StyleSheet , } from 'react-native';
import { Link } from 'expo-router';


export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Testando texto </Text>
      <Text style = {styles.texto2}> testando texto 2</Text>
      <Link style={styles.text} href={"/gato/gato"}>gato</Link>
      <Link style={styles.text} href={"/tela2"}>TELA 2</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
  texto2: {
    color: 'red',
  }
})