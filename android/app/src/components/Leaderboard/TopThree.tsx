import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { COLORS } from '../../theme/colors';

export default function TopThree() {
  return (
    <View style={styles.container}>
      {/* SECOND */}
      <View style={styles.side}>
        <Image source={require('../../assets/avatars/two.png')} style={styles.avatarSmall} />
        <Text style={styles.name}>@tiojuniar</Text>
        <Text style={styles.sub}>2jt tiket</Text>
      </View>

      {/* FIRST */}
      <View style={styles.center}>
        <Text style={styles.crown}>👑</Text>
        <Image source={require('../../assets/avatars/one.png')} style={styles.avatarBig} />
        <Text style={styles.name}>@bobbybow</Text>
        <Text style={styles.sub}>5jt tiket</Text>
      </View>

      {/* THIRD */}
      <View style={styles.side}>
        <Image source={require('../../assets/avatars/three.png')} style={styles.avatarSmall} />
        <Text style={styles.name}>@garryjake</Text>
        <Text style={styles.sub}>1jt tiket</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    marginVertical: 24,
  },
  side: {
    alignItems: 'center',
    marginTop: 28,
  },
  center: {
    alignItems: 'center',
  },
  crown: {
    fontSize: 22,
    marginBottom: 6,
  },
  avatarBig: {
    width: 76,
    height: 76,
    borderRadius: 38,
    borderWidth: 4,
    borderColor: '#FFD700',
  },
  avatarSmall: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },
  name: {
    color: COLORS.white,
    fontSize: 12,
    marginTop: 6,
  },
  sub: {
    color: COLORS.gray,
    fontSize: 11,
  },
});
