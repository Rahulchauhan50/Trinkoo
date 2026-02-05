import React from 'react';
import { useEffect } from "react";
import { configureGoogleSignIn } from "./android/app/src/config/googleSignin";
import { Provider } from "react-redux";
import { store } from "./android/app/src/redux/store";
import AppNavigator  from './android/app/src/navigation/AppNavigator';

export default function App() {

   useEffect(() => {
    configureGoogleSignIn();
  }, []);

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  )
}
