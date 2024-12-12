import { Stack } from "expo-router";

export default function ZebraLayout() {
    return(
        <Stack screenOptions={{
            headerStyle: {
              backgroundColor: '#00994c',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}>
            <Stack.Screen name = "zebra" options={{title: 'Zebra'}} />
            <Stack.Screen name = "zebra2" options={{title: 'Zebra2'}} />
        </Stack>
    )
}