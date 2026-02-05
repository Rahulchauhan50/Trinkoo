import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../../theme/colors';

export default function ProfileHeader() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backArrow}>‹</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Profile</Text>

        {/* Spacer to keep title centered */}
        <View style={{ width: 24 }} />
      </View>

      {/* Avatar */}
      <View style={styles.avatarWrapper}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/150' }}
          style={styles.avatar}
        />

        {/* Edit icon ON avatar */}
        <TouchableOpacity style={styles.editIcon}>
          <Text style={styles.editText}>✎</Text>
        </TouchableOpacity>
      </View>

      {/* Name */}
      <Text style={styles.name}>Wan Sabrina Mayzura</Text>
      <Text style={styles.username}>
        @wansabrina | +6281247029597
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingBottom: 24,
    paddingHorizontal: 16,
    alignItems: 'center',
    backgroundColor: COLORS.primary,
  },

  /* ---------- Top Bar ---------- */
  topBar: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  backArrow: {
    color: COLORS.white,
    fontSize: 42,
    fontWeight: '600',
  },

  title: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '600',
  },

  /* ---------- Avatar ---------- */
  avatarWrapper: {
    position: 'relative',
    marginBottom: 12,
  },

  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    borderWidth: 2,
    borderColor: COLORS.white,
  },

  editIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
  },

  editText: {
    fontSize: 12,
    color: COLORS.primary,
    fontWeight: '700',
  },

  /* ---------- Text ---------- */
  name: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: '700',
    marginTop: 4,
  },

  username: {
    color: '#E0C9FF',
    fontSize: 13,
    marginTop: 2,
  },
});
