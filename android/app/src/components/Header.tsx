import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/slices/authSlice';
import { View, Text, StyleSheet, Image, Pressable, Modal, TouchableOpacity } from 'react-native';
import AppLogo from '../components/AppLogo';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { useSelector } from 'react-redux';



export default function Header() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const dispatch = useDispatch();

  const [menuVisible, setMenuVisible] = useState(false);
  const user = useSelector((state: any) => state.auth.user);

  return (
    <View style={styles.header}>
      <Text style={styles.coin}>🏆 270</Text>
      <AppLogo size={160} />
      <Pressable onPress={() => setMenuVisible(true)}>
        <Image
          source={ user?.photo ? { uri: user.photo } : { uri: 'https://i.pravatar.cc/100' } }
          style={styles.avatar}
        />
      </Pressable>
      <Modal
        transparent
        animationType="fade"
        visible={menuVisible}
        onRequestClose={() => setMenuVisible(false)}
      >
        <Pressable style={styles.overlay} onPress={() => setMenuVisible(false)}>
          <View style={styles.menu}>

            <Pressable style={styles.menuItem}>
              <TouchableOpacity onPress={() => {setMenuVisible(false);navigation.navigate('Profile')}}>
                <Text >Profile</Text>
              </TouchableOpacity>
            </Pressable>
            <Pressable style={styles.menuItem}>
              <Text>Settings</Text>
            </Pressable>
            <Pressable onPress={async () => {setMenuVisible(false); try { await AsyncStorage.removeItem('token'); await AsyncStorage.removeItem('user'); } catch(e){} dispatch(logout()); navigation.reset({ index: 0, routes: [{ name: 'Login' }] }); }} style={styles.menuItem}>
              <Text style={{ color: 'red' }}>Logout</Text>
            </Pressable>
          </View>
        </Pressable>
      </Modal>
      {/* <Image source={{ uri: 'https://i.pravatar.cc/100' }} style={styles.avatar} /> */}

    </View>
  );
}

const styles = StyleSheet.create({
  menu: {
    position: 'absolute',
    top: 90,
    right: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 8,
    width: 160,
    elevation: 5,
  },
  menuItem: {
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  header: {
    paddingTop: 50,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  coin: {
    backgroundColor: '#000',
    color: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    fontSize: 12,
  },
  logo: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
});
