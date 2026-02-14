import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';
// import { GAMES } from '../../constants/games';

const GAME_URL = 'https://www.gamezop.com/en/game/battleships-armada/rkt7TzJv9k7';

const injectedJS = `
  (function () {
    // Block window.open
    window.open = function() { return null; };

    // Block all anchor clicks
    document.addEventListener('click', function(e) {
      let el = e.target;
      while (el && el.tagName !== 'A') {
        el = el.parentElement;
      }
      if (el && el.tagName === 'A') {
        e.preventDefault();
        e.stopPropagation();
      }
    }, true);

    // Prevent location change
    Object.defineProperty(window.location, 'href', {
      writable: false
    });
  })();
`;



export default function ShipScreen() {
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: GAME_URL }}
        javaScriptEnabled
        domStorageEnabled
        injectedJavaScript={injectedJS}
        setSupportMultipleWindows={false}

        startInLoadingState
        renderLoading={() => (
          <ActivityIndicator size="large" color="#7B0FCB" />
        )}
        onShouldStartLoadWithRequest={(request) => {
          // ✅ allow initial game load
          if (request.url === GAME_URL) {
            return true;
          }

          return false;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});
