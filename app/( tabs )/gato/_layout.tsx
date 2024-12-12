import { Stack } from 'expo-router';

export default function Tela1Layout() {
  return (
    <Stack  screenOptions={{
      headerStyle: {
        backgroundColor: '#00994c',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
      <Stack.Screen name="gato" options={{ title: 'Gato'  }} />
      <Stack.Screen name="gato2" options={{ title: 'Detalhes da Tela gato2' }} />
    </Stack>
  );
}