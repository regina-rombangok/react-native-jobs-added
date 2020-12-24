import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, StatusBar, TouchableOpacity, TextInput, View, Alert } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function MaxBidScreen({ route, navigation }) {
  const { neededService, location, description } = route.params;
  const [maxBid, setMaxBid] = useState('$45000');
  const [isSelected, setSelection] = useState(false);

  const onPress = async () => {
    try {
      await AsyncStorage.setItem('contractInfo', JSON.stringify({neededService, location, description, maxBid}));
      Alert.alert(
        "Success",
        "Your info has been stored in local successfully",
        [
          { text: "OK", onPress: () => navigation.popToTop() }
        ],
        { cancelable: false }
      );
    } catch (error) {
      Alert.alert(
        "Failed",
        "Please try again!",
        [
          { text: "OK", onPress: () => navigation.popToTop() }
        ],
        { cancelable: false }
      );
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.label}>Maximum Bid</Text>
      <View style={styles.bidWrapper}>
        <TextInput
          onChangeText={(text) => setMaxBid(text)}
          value={maxBid}
          style={styles.textInput}
        />
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={isSelected}
            onValueChange={setSelection}
            style={styles.checkbox}
          />
          <Text style={styles.checkboxLabel}>I understand & accept maximum bid</Text>
        </View>
      </View>
      <TouchableOpacity
        style={{...styles.button, backgroundColor: isSelected ? '#3234a8' : 'grey'}}
        onPress={onPress}
        disabled={!isSelected}
      >
        <Text style={styles.buttonLabel}>Submit</Text>
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
    color: '#3234a8',
    fontSize: 32,
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  checkboxLabel: {
    margin: 8,
  },
  bidWrapper: {
    alignItems: 'center',
  }
});
