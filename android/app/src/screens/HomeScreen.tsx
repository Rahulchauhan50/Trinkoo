import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Header from '../components/Header';
import DailyCheckIn from '../components/DailyCheckIn';
import StatsCard from '../components/StatsCard';
import SearchBar from '../components/SearchBar';
import GameCard from '../components/GameCard';
// import GameCardd from '../components/GameCardd';
import { COLORS } from '../theme/colors';


export default function HomeScreen() {

    const styles = StyleSheet.create({
        grid: {
            flexDirection: 'column',
            flexWrap: 'wrap',
            // justifyContent: 'space-between',
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

                {/* <StatsCard /> */}

                {/* <SearchBar /> */}
                <View style={styles.col}>

                    <View style={styles.grid}>
                        <GameCard routeName="FlappyBird" title="Carrom Hero" image={require('../assets/images/carrom.png')} mode="Single Player" />
                        <GameCard  routeName='CandyCrush' title="Candy Crush" image={require('../assets/images/candy.png')} mode="Single Player" />
                        <GameCard  routeName='BlocksMatch' title="Blocks Match" image={require('../assets/images/blocks.png')} mode="Single Player" />
                        <GameCard  routeName='FruitNinja' title="Fruit Ninja" image={require('../assets/images/Fruitninja.png')} mode="Single Player" />
                        <GameCard  routeName='Knife' title="Knife" image={require('../assets/images/knife.png')} mode="Single Player" />
                        <GameCard  routeName='SankeLadder' title="Snakes and Ladders" image={require('../assets/images/snake.png')} mode="Single Player" />
                       
                    </View>
                    <View style={styles.grid}>
                        <GameCard routeName="Ludo" title="Ludo King" image={require('../assets/images/ludo.png')} mode="Single Player" />
                        <GameCard routeName='BubbleShooter' title="Bubble Shooter" image={require('../assets/images/bubble.png')} mode="Single Player" />
                        <GameCard routeName='WaterSort' title="Water Sort" image={require('../assets/images/water.png')} mode="Single Player" />
                        <GameCard routeName='Ship' title="Ship Battle" image={require('../assets/images/ship.png')} mode="Single Player" />
                        <GameCard routeName='WordPuzzle' title="Word Puzzle" image={require('../assets/images/word.png')} mode="Single Player" />
                        <GameCard routeName='WordPuzzle' title="Word Puzzle" image={require('../assets/images/word.png')} mode="Single Player" />
                        {/* <GameCardd title="Ular Angka" image={require('../assets/images/ular.png')} mode="Single Player" /> */}
                        {/* <GameCardd title="Flappy Bird" image={require('../assets/images/tetris.png')} mode="Single Player" /> */}
                        {/* <GameCardd title="Flappy Bird" image={require('../assets/images/tetris.png')} mode="Single Player" /> */}
                        {/* <GameCardd routeName="Ludo" title="Ular Angka" image={require('../assets/images/ular.png')} mode="Single Player" /> */}
                       
                    </View>
                </View>
            </ScrollView>
            
        </View>
    );
}
