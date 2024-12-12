import React from 'react';
import { Card, Icon } from 'react-native-paper';
import { Text, StyleSheet, View } from 'react-native';

export default function MyCard() {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Card style={styles.card}>
          <Card.Title title="Título do card" />
          <Card.Content style = {{justifyContent: 'center', alignItems: 'center',}}>
            <Icon source="cat"  size={54} color="#3498db" />
            <Text>Descrição do card</Text>
          </Card.Content>
        </Card>
        <Card style={styles.card}>
          <Card.Title title="Título do card" />
          <Card.Content>
            <Icon source="cat" size={54} color="#3498db" />
            <Text>Descrição do card</Text>
          </Card.Content>
        </Card>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  card: {
    width: '45%',
  },
});