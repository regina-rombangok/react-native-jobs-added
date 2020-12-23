import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const onPress = () => {
    console.log('AAA');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>General Contractor Selection Process!</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
        <Text style={styles.buttonLabel}>Start</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
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
  title: {
    fontSize: 20,
    margin: 16,
  },
  button: {
    width: 200,
    borderRadius: 20,
    backgroundColor: '#3234a8',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonLabel: {
    fontSize: 20,
    color: 'white',
  }
});
