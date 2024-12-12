import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
        screenOptions={{
        headerStyle: {
          backgroundColor: '#0000FF',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Tabs.Screen name="index" options={{title: 'Home'}} />
      <Tabs.Screen name="gato" options={{headerShown: false}} />
      <Tabs.Screen name="zebra"  options={{headerShown: false}}/>
      <Tabs.Screen name="cachorro"  options={{headerShown: false}} />
    </Tabs>
    
  );
}
