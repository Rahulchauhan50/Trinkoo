import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { COLORS } from '../theme/colors';
import BalanceCard from '../components/TopUp/BalanceCard';
import CreditCard from '../components/TopUp/CreditCard';

export default function TopUpScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.back}>‹</Text>
        <Text style={styles.title}>Top-up</Text>
        <View style={{ width: 20 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <BalanceCard />

        <View style={styles.grid}>
          <CreditCard credit="30" price="₹100.00" />
          <CreditCard credit="120" price="₹150.00" />
          <CreditCard credit="130" price="₹170.00" />
          <CreditCard credit="100" price="₹120.00" />
          <CreditCard credit="50" price="₹100.00" />
          <CreditCard credit="200" price="₹219.00" />

          <CreditCard credit="210" price="₹249.00" subscribe />
          <CreditCard credit="250" price="₹299.00" subscribe />
          <CreditCard credit="300" price="₹319.00" />

          <CreditCard credit="310" price="₹349.00" />
          <CreditCard credit="400" price="₹449.00" />
          <CreditCard credit="499" price="₹500.00" />
        </View>

        <TouchableOpacity style={styles.buyBtn}>
          <Text style={styles.buyText}>Buy Now</Text>
        </TouchableOpacity>
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
    paddingBottom: 16,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  back: {
    color: COLORS.white,
    fontSize: 22,
    marginRight: 12,
  },
  title: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: '700',
    flex: 1,
    textAlign: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 16,
  },
  buyBtn: {
    marginHorizontal: 20,
    marginTop: 28,
    marginBottom: 40,
    borderRadius: 30,
    borderWidth: 1.5,
    borderColor: COLORS.white,
    paddingVertical: 14,
    alignItems: 'center',
  },
  buyText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '600',
  },
});
