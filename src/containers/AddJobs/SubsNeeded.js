import React from 'react';
import { Text, View, FlatList, SafeAreaView, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';

const DATA = [
  {
    id: 1,
    title: 'Cleaning prep',
  },
  {
    id: 2,
    title: 'Concrete',
  },
  {
    id: 3,
    title: 'Drywall & plastering',
  },
  {
    id: 4,
    title: 'Electrical',
  },
  {
    id: 5,
    title: 'Excavation & leveling',
  },
  {
    id: 6,
    title: 'Fencing',
  },
  {
    id: 7,
    title: 'Flooring',
  },
  {
    id: 8,
    title: 'Foundation / cement',
  },
  {
    id: 9,
    title: 'Framing',
  },
  {
    id: 10,
    title: 'Glass & mirror',
  },
  {
    id: 11,
    title: 'HVAC',
  },
  {
    id: 12,
    title: 'Lawn & garden',
  },
  {
    id: 13,
    title: 'Masonry',
  },
  {
    id: 14,
    title: 'Painting',
  },
  {
    id: 15,
    title: 'Plumbing',
  },
  {
    id: 16,
    title: 'Post construction cleaning',
  },
  {
    id: 17,
    title: 'Roofing',
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default function DetailsScreen() {
  const renderItem = ({ item }) => <Item title={item.title} />;
  const onPress = () => {
    console.log('AAA');
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={DATA} renderItem={renderItem} keyExtractor={item => item.id} style={styles.list} />
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
  },
  list: {
    marginBottom: 8,
  },
  item: {
    padding: 8,
    marginHorizontal: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
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
