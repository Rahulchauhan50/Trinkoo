import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';
// import { GAMES } from '../../constants/games';

const GAME_URL = 'https://razorpay.com/emidemo/';

const injectedJS = `
(function() {
var pageEl = document.getElementById('page');
    if (pageEl) {
      pageEl.style.display = 'none';
    }
  function clickButton() {
   
    var btn = document.getElementById('paybtn');
    if (btn) {
      btn.click();
    } else {
      setTimeout(clickButton, 500); // retry until found
    }
  }

  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    clickButton();
  } else {
    document.addEventListener('DOMContentLoaded', clickButton);
  }

  true;
})();
`;



export default function PaymentScreen() {
  const [showWebView, setShowWebView] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWebView(true);
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: GAME_URL }}
        javaScriptEnabled
        domStorageEnabled
        injectedJavaScript={injectedJS}
        setSupportMultipleWindows={false}
        style={{ opacity: showWebView ? 1 : 0 }}
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
      {!showWebView && (
        <ActivityIndicator size="large" color="#7B0FCB" style={styles.loader} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  loader: {
    position: 'absolute',
    alignSelf: 'center',
    top: '50%',
  },
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});
