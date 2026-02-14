import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from '../../theme/colors';
import { RootStackParamList } from '../../navigation/AppNavigator';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export default function CreditCard({ credit, price, subscribe }: any) {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  
  return (
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('PaymentScreen')}>
      {subscribe && <View style={styles.badge}><Text style={styles.badgeText}>Subscribe</Text></View>}

      <Text style={styles.credit}>{credit} Credit</Text>

      <View style={styles.priceBox}>
        <Text style={styles.price}>{price}</Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  card: {
    width: '30%',
    backgroundColor: COLORS.white,
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 16,
  },
  credit: {
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.primary,
  },
  priceBox: {
    marginTop: 10,
    backgroundColor: COLORS.primary,
    borderRadius: 16,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  price: {
    color: COLORS.white,
    fontSize: 11,
    fontWeight: '600',
  },
  badge: {
    position: 'absolute',
    top: -8,
    backgroundColor: COLORS.lime,
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  badgeText: {
    fontSize: 9,
    fontWeight: '700',
    color: '#000',
  },
});
