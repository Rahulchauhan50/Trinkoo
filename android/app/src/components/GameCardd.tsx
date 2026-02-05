import React from 'react';
import { RootStackParamList } from '../navigation/AppNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';




import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

type Props = {
  title: string;
  mode: string;
  image: any;
  routeName: keyof RootStackParamList; 
  
};

export default function GameCardd({ title, mode, image, routeName }: Props) {

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  
  return (
    <View style={styles.wrapper}>
      <ImageBackground
        source={image}
        style={styles.card}
        imageStyle={styles.image}
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.mode}>{mode}</Text>

          <TouchableOpacity onPress={() => navigation.navigate(routeName)} style={styles.btn}>
            <Text style={styles.btnText}>Start Game</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    marginBottom: 16,
     height: 250,
    //  justifyContent: 'flex-end',
  },

  card: {
    // height: 120,                // ✅ FIXED HEIGHT
    borderRadius: 16,
    height: '100%',
    overflow: 'hidden',         // ✅ REQUIRED for rounded image
    // justifyContent: 'flex-end',
  },

  image: {
    borderRadius: 16,
  },

  overlay: {
    padding: 12,
    backgroundColor: 'rgba(0, 0, 0, 0.12)', // optional overlay
    flex: 1,
    justifyContent: 'flex-end',
    gap: 6,
  },

  title: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },

  mode: {
    color: '#ddd',
    fontSize: 14,
  },

  btn: {
    alignSelf: 'flex-start',
    backgroundColor: '#7B0FCB',
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 6,
  },

  btnText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});
