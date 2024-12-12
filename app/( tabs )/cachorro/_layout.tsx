import { Stack } from "expo-router";

export default function CachorroLayout() {
    return(
        <Stack screenOptions={{
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}>
            <Stack.Screen name = "cachorro" options={{title: 'Cachorro'}} />
            <Stack.Screen name = "cachorro2" options={{title: 'Cachorro2'}} />
        </Stack>
    )
}