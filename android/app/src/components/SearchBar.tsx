import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { COLORS } from '../theme/colors';

export default function SearchBar() {
  return (
    <View style={styles.wrapper}>
      <TextInput  placeholderTextColor="#BDBDBD" placeholder="Type something..." style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    margin: 20,
    backgroundColor: '#fff',
    borderRadius: 30,
    paddingHorizontal: 20,
  },
  input: {
    height: 44,
    
  },
});
