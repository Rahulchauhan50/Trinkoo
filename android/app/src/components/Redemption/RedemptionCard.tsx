import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../../theme/colors';
import Amazon from '../../assets/icons/amazon.svg';
import Flipkart from '../../assets/icons/flipcart.svg';

export default function RedemptionCard() {
  return (
   <View style={styles.parent}>
     <View style={styles.card}>
      {/* Top Row */}
      <View style={styles.row}>
        <View style={styles.iconBox}>
          {/* <Ionicons name="gift" size={22} color={COLORS.primary} /> */}
          <Amazon width={42} height={42} fill={COLORS.primary} />
        </View>

        <View style={{ flex: 1 }}>
          <Text style={styles.title}>
            Amazon Gift voucher worth ₹200
          </Text>
          <Text style={styles.subTitle}>
            200 Credits have been used
          </Text>
        </View>
      </View>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Bottom Row */}
      <View style={styles.bottomRow}>
        <View style={styles.statusRow}>
          <Ionicons
            name="checkmark-circle"
            size={16}
            color={COLORS.green}
          />
          <Text style={styles.statusText}>
            Your Amazon gift voucher has been successfully generated
            and is now ready to use anytime.
          </Text>
        </View>

        <TouchableOpacity>
          <Text style={styles.copyText}>Copy code</Text>
        </TouchableOpacity>
      </View>
    </View>

    <View style={styles.card}>
      {/* Top Row */}
      <View style={styles.row}>
        <View style={styles.iconBox}>
                    <Flipkart width={42} height={42} fill={COLORS.primary} />

        </View>

        <View style={{ flex: 1 }}>
          <Text style={styles.title}>
           Flipkart gift card worth 500 rupee
          </Text>
          <Text style={styles.subTitle}>
            200 Credits have been used
          </Text>
        </View>
      </View>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Bottom Row */}
      <View style={styles.bottomRow}>
        <View style={styles.statusRow}>
          <Ionicons
            name="checkmark-circle"
            size={16}
            color={COLORS.green}
          />
          <Text style={styles.statusText}>
            You can redeem the tickets you’ve collected by tapping the redeem button below.
          </Text>
        </View>

        <TouchableOpacity>
          <Text style={styles.copyText}>Copy code</Text>
        </TouchableOpacity>
      </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {
    // paddingVertical: 16,
    gap: 12,
    marginTop: 12,
  },
  card: {
    backgroundColor: '#5A0094',
    borderRadius: 16,
    padding: 14,
  },
  row: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  },
  iconBox: {
    width: 42,
    height: 42,
    // backgroundColor: COLORS.white,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: COLORS.white,
    fontWeight: '700',
    fontSize: 14,
  },
  subTitle: {
    color: COLORS.textLight,
    fontSize: 12,
    marginTop: 2,
  },
  divider: {
    borderTopWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#8F3EDB',
    marginVertical: 12,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  statusRow: {
    flexDirection: 'row',
    gap: 6,
    flex: 1,
  },
  statusText: {
    color: COLORS.textLight,
    fontSize: 11,
    flex: 1,
  },
  copyText: {
    color: COLORS.yellow,
    fontWeight: '700',
    fontSize: 12,
  },
});
