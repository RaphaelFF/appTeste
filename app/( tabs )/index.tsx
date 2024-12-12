import { Text, View, StyleSheet, } from 'react-native';
import { Link } from 'expo-router';
import { Card } from 'react-native-paper';


export default function Index() {
  return (
<View style={styles.container}>
  <Card style={styles.cards}>
    <Card.Cover  source={require('./NOVOPRESIDENTEADAO.jpg') }  />
  </Card>
  <View style={styles.servicos}>
    <Card style={styles.card}>
      <Card.Content>
        <Text style={styles.texto}>tipo1</Text>
      </Card.Content>
    </Card>
    <Card style={styles.card}>
      <Card.Content>
        <Text style={styles.texto}>tipo1</Text>
      </Card.Content>
    </Card>
    <Card style={styles.card}>
      <Card.Content >
        <Text style={styles.texto}>tipo1</Text>
      </Card.Content>
    </Card>
    <Card style={styles.card}>
      <Card.Content>
        <Text style={styles.texto}>tipo1</Text>
      </Card.Content>
    </Card>
    <Card style={styles.card}>
      <Card.Content>
        <Text style={styles.texto}>tipo1</Text>
      </Card.Content>
    </Card>

  </View>
</View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcfcfc',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    
  },

  
  cards: {
    fontSize: 50,
    width: '95%',
    marginTop: 2,
    
    
  },
  card: {
    margin: 2,
    marginTop: 8,
    backgroundColor: '#00994c',
    width: '18%',
    height: 70,
    alignItems:'center',
    justifyContent:'center',
    borderWidth: 2,
    borderColor: '#0000FF'
    
  },

  texto: {
    color: '#fff'
  },
  servicos: {
    flexDirection:'row',
    width: '100%',
    justifyContent:'space-around',
    padding: 5

  }
});