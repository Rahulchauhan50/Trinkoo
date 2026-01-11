import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { COLORS } from '../theme/colors';
import HistoryCard from '../components/History/HistoryCard';

export default function HistoryScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Recently played</Text>

        <TouchableOpacity style={styles.search}>
          <Text style={{ color: COLORS.white }}>🔍</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.list}>
        <HistoryCard
          title="Fast Running Game (Multiplayer)"
          points="24 points earned"
          time="10:23 min"
          image={require('../assets/games/fast.png')}
        />

        <HistoryCard
          title="Jump Dash (Multiplayer)"
          points="54 points earned"
          time="09:04 min"
          image={require('../assets/games/jump.png')}
        />

        <HistoryCard
          title="Tap Runner (Multiplayer)"
          points="56 points earned"
          time="20:26 min"
          image={require('../assets/games/tap.png')}
        />

        <HistoryCard
          title="Sky Hopper (Multiplayer)"
          points="123 points earned"
          time="50:09 min"
          image={require('../assets/games/sky.png')}
        />

        <HistoryCard
          title="Bounce Hero (Multiplayer)"
          points="89 points earned"
          time="42:23 min"
          image={require('../assets/games/bounce.png')}
        />

        <HistoryCard
          title="Speed Jump (Multiplayer)"
          points="233 points earned"
          time="59:23 min"
          image={require('../assets/games/tap.png')}
        />
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: '700',
  },
  search: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(0,0,0,0.25)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    paddingHorizontal: 20,
    paddingBottom: 120,
  },
});
