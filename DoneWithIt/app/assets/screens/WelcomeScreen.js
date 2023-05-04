import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground 
        styles={styles.background}
            source={require("../../assets/background.png")}
        ></ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 2
    }
})

export default WelcomeScreen;
