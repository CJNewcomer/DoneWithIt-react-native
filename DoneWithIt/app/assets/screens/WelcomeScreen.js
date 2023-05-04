import React from 'react';
import { StyleSheet, ImageBackground, View, Image, Text } from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground 
            style={styles.background}
            source={require("../media/background.png")}
        >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require("../media/red-logo.png")}/>
                <Text style={styles.text}>Sell What You No Longer Need</Text>
            </View>
            <View style={styles.loginButton}></View>
            <View style={styles.registerButton}></View>
        </ImageBackground>
    
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,    
        justifyContent: "flex-end",
        alignItems: "center",
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: "#fc5c65",
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoContainer: {
        position: "absolute",
        top: 85,
        alignItems: "center",
    },
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: "#4ecdc4",
    },
    text: {
        fontSize: 21, 
        fontStyle: 'italic',
    },
})

export default WelcomeScreen;
