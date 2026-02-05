import React from 'react';
import { View, Text, StyleSheet, Touchable, TouchableOpacity } from 'react-native';
import Confirmed from '../../assets/icons/confirmed.svg';
import Cart from '../../assets/icons/cart.svg';
import Review from '../../assets/icons/review.svg';
import { RootStackParamList } from '../../navigation/AppNavigator';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


export default function RewardStatusCard() {
          const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.card} onPress={()=> navigation.navigate("Redemptions")} >
      <Text style={styles.title}>Reward Redemption Status</Text>

      <View style={styles.row}>
        {/* Confirmed */}
        <View style={styles.item}>
          <View style={styles.iconWrapper}>
            <Confirmed width={60} height={60} fill="#2C2C2C" />
           
          </View>
          <Text style={styles.label}>Confirmed</Text>
        </View>

        {/* Being Shipped */}
        <View style={styles.item}>
          <View style={styles.iconWrapper}>
            <Cart width={60} height={60} fill="#2C2C2C" />
          </View>
          <Text style={styles.label}>Being Shipped</Text>
        </View>

        {/* Review */}
        <View style={styles.item}>
          <View style={styles.iconWrapper}>
            <Review width={60} height={60} fill="#2C2C2C" />
          </View>
          <Text style={styles.label}>Leave a Review</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#8B3FE4',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },

  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 16,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  item: {
    alignItems: 'center',
    width: '33%',
  },

  iconWrapper: {
    // width: 56,
    // height: 56,
    borderRadius: 28,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginBottom: 8,
  },

  badge: {
    position: 'absolute',
    top: -4,
    right: -4,
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#FF3B30',
    alignItems: 'center',
    justifyContent: 'center',
  },

  badgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '700',
  },

  label: {
    color: '#E6FF4F',
    fontSize: 13,
    fontWeight: '600',
    textAlign: 'center',
  },
});
