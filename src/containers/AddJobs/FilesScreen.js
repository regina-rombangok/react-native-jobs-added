import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, StatusBar, TouchableOpacity, TextInput, View } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';

export default function FilesScreen({ route, navigation }) {
  const { neededService, location, description } = route.params;
  const [file1, setFile1] = useState('');
  const [file2, setFile2] = useState('');
  const [file3, setFile3] = useState('');

  const onPress = () => {
    console.log('AAA');
  }

  const onUpload = async (number) => {
    let result = await DocumentPicker.getDocumentAsync({});

    if (number == 1) 
      setFile1(result.name);
    else if (number == 2)
      setFile2(result.name);
    else if (number == 3)
      setFile3(result.name);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.label}>Upload any docs you wish to be seen</Text>
      <View>
        <View style={styles.fileWrapper}>
          <TextInput
            value={file1}
            editable={false}
            style={styles.textInput}
          />
          <TouchableOpacity
            style={styles.browserButton}
            onPress={() => onUpload(1)}
          >
            <Text style={styles.buttonLabel}>Browse</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.fileWrapper}>
          <TextInput
            value={file2}
            editable={false}
            style={styles.textInput}
          />
          <TouchableOpacity
            style={styles.browserButton}
            onPress={() => onUpload(2)}
          >
            <Text style={styles.buttonLabel}>Browse</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.fileWrapper}>
          <TextInput
            value={file3}
            editable={false}
            style={styles.textInput}
          />
          <TouchableOpacity
            style={styles.browserButton}
            onPress={() => onUpload(3)}
          >
            <Text style={styles.buttonLabel}>Browse</Text>
          </TouchableOpacity>
        </View>
      </View>
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
  },
  label: {
    fontSize: 20,
    marginHorizontal: 16,
    textAlign: 'center',
  },
  textInput: {
    width: 300,
    borderWidth: 1,
    borderRadius: 15,
    padding: 8,
    fontSize: 16,
    marginHorizontal: 8,
  },
  fileWrapper: {
    flexDirection: 'row',
    margin: 8,
  },
  browserButton: {
    width: 80,
    borderRadius: 8,
    backgroundColor: '#3234a8',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
