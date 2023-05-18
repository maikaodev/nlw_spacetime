import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View className='bg-gray-900 flex-1 items-center justify-center'>
      <Text className='font-bold text-2xl text-zinc-50'>Open up App.js to start working on your app!</Text>
      <StatusBar style="light" translucent/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
