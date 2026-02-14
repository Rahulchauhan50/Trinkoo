import React from 'react';
import { COLORS } from '../theme/colors';
import AppLogo from '../components/AppLogo';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    StatusBar,
    KeyboardAvoidingView,
    ScrollView,
    Platform,
} from 'react-native';

import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { useDispatch } from "react-redux";
import { authStart, authSuccess, authError } from "../redux/slices/authSlice";
import { Image } from 'react-native';








export default function LoginScreen() {

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const dispatch = useDispatch();

    const handleGoogleLogin = async () => {
        try {
            dispatch(authStart());

            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();

            const idToken = userInfo?.idToken;

            const res = await googleLogin(idToken);


            dispatch(authSuccess(res.data.token));
            navigation.replace("HomeTabs");
        } catch (error) {
            console.log("Google Sign-In error:", error);
            dispatch(authError("Google sign-in failed"));
        }
    };


    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: COLORS.primary,
            justifyContent: 'center',
            paddingHorizontal: 20,

        },

        card: {
            backgroundColor: COLORS.white,
            borderRadius: 24,
            padding: 24,
            alignItems: 'center',

            marginBottom: 40,   // 👈 allows layout to settle after keyboard
        },

        appName: {
            fontSize: 22,
            fontWeight: '700',
            marginTop: 0,
            color: COLORS.black,
        },

        tagline: {
            fontSize: 14,
            color: '#777',
            marginBottom: 40,
        },

        welcome: {
            alignSelf: 'flex-start',
            fontSize: 16,
            fontWeight: '600',
            marginBottom: 2,
        },

        label: {
            alignSelf: 'flex-start',
            fontSize: 13,
            color: '#555',
            marginTop: 12,
            marginBottom: 6,
        },

        input: {
            width: '100%',
            height: 48,
            backgroundColor: '#F3F3F3',
            borderRadius: 10,
            paddingHorizontal: 14,
            fontSize: 14,
            color: COLORS.black,
        },

        button: {
            width: '100%',
            height: 48,
            backgroundColor: COLORS.primary,
            borderRadius: 12,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
        },

        buttonText: {
            color: COLORS.white,
            fontSize: 16,
            fontWeight: '600',
        },

        footer: {
            marginTop: 16,
            fontSize: 13,
            color: '#666',
        },

        link: {
            color: COLORS.primary,
            fontWeight: '600',
        },
        scrollContent: {
            flexGrow: 1,
        },
        googleButton: {
            width: "100%",
            height: 48,
            backgroundColor: "#fff",
            borderRadius: 12,
            borderWidth: 1,
            borderColor: "#ddd",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 12,
            flexDirection: 'row', // This aligns the icon and text horizontally
            paddingHorizontal: 20,
        },
        googleText: {
            color: "#000",
            fontWeight: "600"
        },


    });

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>

            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'android' ? undefined : 'padding'}
            //    keyboardVerticalOffset={Platform.OS === 'android' ? 24 : 0}
            >
                <StatusBar barStyle="light-content" />

                <ScrollView
                    contentContainerStyle={styles.scrollContent}
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.container}>
                        <View style={styles.card}>
                            {/* LOGO */}
                            <AppLogo size={120} />

                            <Text style={styles.appName}>Trinkoo</Text>
                            <Text style={styles.tagline}>Play, Chat & Earn</Text>

                            <Text style={styles.welcome}>Welcome back 👋</Text>



                            <Text style={styles.label}>E-mail</Text>
                            <TextInput
                                placeholder="example@gmail.com"
                                placeholderTextColor="#BDBDBD"
                                style={styles.input}
                                keyboardType="email-address"
                            />

                            <Text style={styles.label}>Password</Text>
                            <TextInput
                                placeholder="********"
                                placeholderTextColor="#BDBDBD"
                                secureTextEntry
                                style={styles.input}
                            />

                            <TouchableOpacity
                                activeOpacity={0.85}
                                style={styles.button}
                                onPress={() => navigation.replace('HomeTabs')}
                            >
                                <Text style={styles.buttonText}>Login</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.button, styles.googleButton, { backgroundColor: "#fff", borderWidth: 1 }]}
                                onPress={handleGoogleLogin}
                            >
                                {/* <Chrome color="#4285F4" size={20} style={{ marginRight: 10 }} /> */}
                                {/* <FontAwesome name="google" size={20} color="white" /> */}
                                <Image
                                    source={require('../assets/images/google-logo.png')}
                                    style={[
                                        // styles.logo,
                                        { width: 24, height: 40, marginRight: 10 },
                                    ]}
                                    resizeMode="contain"
                                />
                                <Text style={{ color: "#000", fontWeight: "600" }}>
                                    Continue with Google
                                </Text>
                            </TouchableOpacity>

                            <Text style={styles.footer}>
                                Already have account?{' '}
                                <Text
                                    style={styles.link}
                                    onPress={() => navigation.navigate('Register')}
                                >
                                    Create an account
                                </Text>
                            </Text>

                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>

    );
}
