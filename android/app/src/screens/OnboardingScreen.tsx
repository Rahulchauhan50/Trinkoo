import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    TouchableOpacity,
} from 'react-native';
import { COLORS } from '../theme/colors';
import AppLogo from '../components/AppLogo';
import ArrowRight from '../assets/icons/arrow-right.svg';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';




export default function OnboardingScreen() {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();


    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: COLORS.primary,
            justifyContent: 'flex-end',
        },

        card: {
            backgroundColor: COLORS.white,
            paddingTop: 28,
            paddingBottom: 32,
            paddingHorizontal: 24,
            borderTopLeftRadius: 28,
            borderTopRightRadius: 28,
            alignItems: 'center',
        },

        title: {
            fontSize: 22,
            fontWeight: '700',
            color: COLORS.black,
            marginBottom: 12,
        },

        subtitle: {
            fontSize: 14,
            lineHeight: 20,
            color: '#666666',
            textAlign: 'center',
            marginBottom: 28,
        },

        button: {
            width: 56,
            height: 56,
            borderRadius: 28,
            borderWidth: 2,
            borderColor: COLORS.primary,
            justifyContent: 'center',
            alignItems: 'center',
        },

        arrow: {
            fontSize: 28,
            color: COLORS.primary,
            lineHeight: 30,
            marginLeft: 2, // optical centering
        },
        logoContainer: {
            position: 'absolute',
            top: '28%',
            alignSelf: 'center',
        },

    });

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
            <View style={styles.logoContainer}>
                <AppLogo size={200} />
            </View>

            {/* Bottom Card */}
            <View style={styles.card}>
                <Text style={styles.title}>Games Are More Fun!</Text>

                <Text style={styles.subtitle}>
                    We'll help you find your next favorite game.{'\n'}
                    Save your progress and track your{'\n'}
                    achievements as you level up.
                </Text>

                <TouchableOpacity
                    activeOpacity={0.85}
                    style={styles.button}
                    onPress={() => navigation.navigate('Login')}
                >
                    <ArrowRight width={24} height={24} />
                </TouchableOpacity>


            </View>
        </View>
    );
}
