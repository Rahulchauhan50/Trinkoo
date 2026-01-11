import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Header from '../components/Header';
import DailyCheckIn from '../components/DailyCheckIn';
import StatsCard from '../components/StatsCard';
import SearchBar from '../components/SearchBar';
import GameCard from '../components/GameCard';
import GameCardd from '../components/GameCardd';
import { COLORS } from '../theme/colors';
import { ScreenContainer } from 'react-native-screens';

export default function HomeScreen() {

    const styles = StyleSheet.create({
        grid: {
            flexDirection: 'column',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            width: '48%',
            
        },
        container: {
            flex: 1,
            backgroundColor: COLORS.primary,
            justifyContent: 'center',
            paddingHorizontal: 0,
        },
        col: {
             flexDirection: 'row',
             width: '100%',
             justifyContent: 'space-between',
            //  paddingHorizontal: 0,  
             paddingHorizontal: 20,
             gap: 20,
             
        },
    })
    return (
        <View style={styles.container}>
            <Header />

            <ScrollView showsVerticalScrollIndicator={false}>
                <DailyCheckIn />

                <StatsCard />

                <SearchBar />
                <View style={styles.col}>

                    <View style={styles.grid}>
                        <GameCard title="Flappy Bird" image={require('../assets/images/flappy.png')} mode="Single Player" />
                        <GameCardd title="Ular Angka" image={require('../assets/images/ular.png')} mode="Single Player" />
                        <GameCard title="Flappy Bird" image={require('../assets/images/flappy.png')} mode="Single Player" />
                        <GameCardd title="Ular Angka" image={require('../assets/images/ular.png')} mode="Single Player" />
                       
                    </View>
                    <View style={styles.grid}>
                        <GameCardd title="Flappy Bird" image={require('../assets/images/tetris.png')} mode="Single Player" />
                        <GameCard title="Ular Angka" image={require('../assets/images/walk.png')} mode="Single Player" />
                        <GameCardd title="Flappy Bird" image={require('../assets/images/tetris.png')} mode="Single Player" />
                        <GameCard title="Ular Angka" image={require('../assets/images/walk.png')} mode="Single Player" />
                       
                    </View>
                </View>
            </ScrollView>
            
        </View>
    );
}
