import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../theme/colors';

type Props = {
  text: string;
  isSender?: boolean;
};

export default function ChatBubble({ text, isSender }: Props) {
  return (
    <View
      style={[
        styles.container,
        isSender ? styles.right : styles.left,
      ]}
    >
      <Text style={isSender ? styles.text : styles.textwhite}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    maxWidth: '80%',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 16,
    marginVertical: 6,
  },
  left: {
    backgroundColor: COLORS.bubble,
    alignSelf: 'flex-start',
    borderTopLeftRadius: 0,
  },
  right: {
    backgroundColor: COLORS.white,
    alignSelf: 'flex-end',
    borderTopRightRadius: 0,
  },
  text: {
    color: '#000',
    fontSize: 13,
  },
  textwhite: {
    color: '#ffffff',
    fontSize: 13,
  },
});
