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





export default function LoginScreen() {

    const navigation =
        useNavigation<NativeStackNavigationProp<RootStackParamList>>();


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
