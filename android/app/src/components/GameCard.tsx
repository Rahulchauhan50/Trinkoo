import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

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
};

export default function GameCard({ title, mode, image }: Props) {
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

          <TouchableOpacity style={styles.btn}>
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
     height: 200,
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
