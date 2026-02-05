import React from 'react';
import { View, Text, Image, StyleSheet, Touchable, TouchableOpacity } from 'react-native';
import { COLORS } from '../../theme/colors';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/AppNavigator';

export default function DirectMessageCard({ name, message, time, image, online }: any) {
   const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('ChatScreen')}>
    <View style={styles.card}>
      <View>
        <Image source={image} style={styles.avatar} />
        {online && <View style={styles.dot} />}
      </View>

      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.message} numberOfLines={1}>
          {message}
        </Text>
      </View>

      <Text style={styles.time}>{time}</Text>
    </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.darkCard,
    borderRadius: 16,
    padding: 14,
    marginBottom: 14,
    borderEndEndRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderWidth: 1,
    borderColor: COLORS.divider,
    
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    marginRight: 12,
  },
  dot: {
    position: 'absolute',
    right: 2,
    bottom: 2,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#4CFF4C',
    borderWidth: 2,
    borderColor: COLORS.darkCard,
  },
  info: {
    flex: 1,
  },
  name: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: '600',
  },
  message: {
    color: COLORS.gray,
    fontSize: 12,
    marginTop: 2,
  },
  time: {
    color: COLORS.gray,
    fontSize: 11,
  },
});
