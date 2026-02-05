import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';


import RedemptionTabs from '../components/Redemption/RedemptionTabs';
import RedemptionCard from '../components/Redemption/RedemptionCard';
import { COLORS } from '../theme/colors';

export default function RedemptionsScreen() {
    const navigation = useNavigation();
  return (
    <LinearGradient
      colors={[COLORS.primary, COLORS.primaryDark]}
      style={styles.container}
    >
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backArrow}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Redemptions</Text>
        <View style={{ width: 26 }} />
      </View>

      {/* Content */}
      <View style={styles.content}>
        <RedemptionTabs />
        <RedemptionCard />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: COLORS.white,
    paddingTop: 84,
    paddingBottom: 16,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
  },
  content: {
    padding: 16,
  },
   backArrow: {
    color: COLORS.black,
    fontSize: 42,
    fontWeight: '600',
  },
});
