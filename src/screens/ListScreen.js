import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const friends = [
    { name: 'Emily', age: 20 },
    { name: 'Florence', age: 21 },
    { name: 'Joel', age: 22 },
    { name: 'XuanYun', age: 23 },
    { name: 'Phoebe', age: 24 },
    { name: 'Priscilla', age: 25 },
    { name: 'Chloe', age: 26 },
    { name: 'Charissa', age: 27 },
    { name: 'Kitty', age: 28 }
  ];

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={friend => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 10
  }
});

export default ListScreen;
