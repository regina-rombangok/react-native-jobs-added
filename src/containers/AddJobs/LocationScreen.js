import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const DATA = [
  {
    id: 1,
    title: 'Bexar',
  },
  {
    id: 2,
    title: 'Travis',
  },
  {
    id: 3,
    title: 'Tarrant',
  },
  {
    id: 4,
    title: 'Dallas',
  },
  {
    id: 5,
    title: 'Harris',
  },
];

export default function LocationScreen({ route, navigation }) {
  const { neededService } = route.params;
  const [location, setLocation] = useState('Bexar');

  const onPress = () => {
    navigation.navigate('Description', {
      neededService, location
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <Picker
        selectedValue={location}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue) => setLocation(itemValue)}>
        <Picker.Item label="Bexar" value="Bexar" />
        <Picker.Item label="Travis" value="Travis" />
        <Picker.Item label="Tarrant" value="Tarrant" />
        <Picker.Item label="Dallas" value="Dallas" />
        <Picker.Item label="Harris" value="Harris" />
      </Picker>
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
        <Text style={styles.buttonLabel}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: StatusBar.currentHeight,
    alignItems: 'center',
    justifyContent: 'space-evenly',
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
