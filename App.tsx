import React from 'react';
import { useEffect } from "react";
// import { configureGoogleSignIn } from "./android/app/src/config/googleSignin";
import { Provider } from "react-redux";
import { store } from "./android/app/src/redux/store";
import AppNavigator  from './android/app/src/navigation/AppNavigator';
import {
  GoogleSignin,
} from '@react-native-google-signin/google-signin';
import { GOOGLE_IOS_CLIENT_ID, GOOGLE_WEB_CLIENT_ID } from './android/app/src/config/key';

GoogleSignin.configure({
  
  webClientId: GOOGLE_WEB_CLIENT_ID, // client ID of type WEB for your server. Required to get the `idToken` on the user object, and for offline access.
  scopes: ['email', 'profile'],
  forceCodeForRefreshToken: false, // [Android] related to `serverAuthCode`, read the docs link below *.
  iosClientId: GOOGLE_IOS_CLIENT_ID,
});


export default function App() {

   useEffect(() => {
    // configureGoogleSignIn();
  }, []);

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  )
}
