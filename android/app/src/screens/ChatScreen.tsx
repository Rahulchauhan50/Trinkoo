import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import ChatHeader from '../components/Chat/ChatHeader';
import ChatBubble from '../components/Chat/ChatBubble';
import ChatInput from '../components/Chat/ChatInput';
import { COLORS } from '../theme/colors';

export default function ChatScreen() {
  return (
    <LinearGradient
      colors={[COLORS.primary, COLORS.primaryDark]}
      style={styles.container}
    >
      <ChatHeader />

      <View style={styles.chatBox}>
        <Text style={styles.day}>Today</Text>

        <ScrollView
          contentContainerStyle={styles.messages}
          showsVerticalScrollIndicator={false}
        >
          <ChatBubble text="Hey 😄 are you free to play a game right now?" />
          <ChatBubble text="Hey 😄 are you free to play a game right now? I just got some free time." />
          <ChatBubble
            text="Yeah 😄 I'm free now. Which game do you want to play?"
            isSender
          />
          <ChatBubble text="Nicee! Let's play the running multiplayer game 🏃‍♂️🔥 I need more points." />
        </ScrollView>
      </View>

      <ChatInput />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chatBox: {
    flex: 1,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingTop: 16,
  },
  day: {
    alignSelf: 'center',
    backgroundColor: '#F1F1F1',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 12,
    fontSize: 12,
    color: '#555',
    marginBottom: 10,
  },
  messages: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
});
