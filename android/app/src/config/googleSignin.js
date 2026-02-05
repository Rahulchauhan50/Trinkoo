import { GoogleSignin } from "@react-native-google-signin/google-signin";

export const configureGoogleSignIn = () => {
  GoogleSignin.configure({
    webClientId: "571867034037-4kjj1r1n7n6n2kpt62a8jjgn2bd6iuht.apps.googleusercontent.com",
    // Request offline access to receive a refresh token from Google
    offlineAccess: true
  });
};
