import React from 'react';
import { View, TextInput, StyleSheet,   Text, TouchableOpacity } from 'react-native';
import { COLORS } from '../../theme/colors';
import { Send } from 'lucide-react-native';


export default function ChatInput() {



  return (
    <View style={styles.wrapper}>
      <TextInput
        placeholder="Type message here..."
        placeholderTextColor={COLORS.muted}
        style={styles.input}
      />
      <TouchableOpacity style={styles.btn}>

        <Text style={styles.btnText}>Send</Text>
        <Send size={14} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    alignSelf: 'flex-start',
    backgroundColor: '#7B0FCB',
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 6,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },

  btnText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  wrapper: {
    padding: 12,
    backgroundColor: COLORS.inputbywhole,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    justifyContent: 'space-between',
  },
  input: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 13,
    shadowRadius: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
  },
});
