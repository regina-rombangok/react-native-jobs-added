import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, StatusBar, TouchableOpacity, TextInput } from 'react-native';

export default function DescriptionScreen({ route, navigation }) {
  const { neededService, location } = route.params;

  const onPress = () => {
    navigation.navigate('Files', {
      neededService, location, description,
    });
  }

  const [description, setDescription] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        multiline={true}
        numberOfLines={5}
        onChangeText={(text) => setDescription(text)}
        value={description}
        placeholder='Please provide a brief description of your contract job...'
        style={styles.textInput}
      />
      <TouchableOpacity
        style={{...styles.button, backgroundColor: description ? '#3234a8' : 'grey'}}
        onPress={onPress}
        disabled={!description}
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
  },
  textInput: {
    width: 300,
    height: 150,
    borderWidth: 1,
    borderRadius: 15,
    padding: 8,
    fontSize: 16,
    textAlignVertical: 'top',
  }
});
