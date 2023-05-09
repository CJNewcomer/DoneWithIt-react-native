import React from 'react';
import { StyleSheet, ImageBackground, View, Image, Text } from 'react-native';

import AppButton from '../../components/AppButton';

function WelcomeScreen(props) {
    return (
        <ImageBackground 
            blurRadius={3}
            style={styles.background}
            source={require("../media/background.png")}
        >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require("../media/red-logo.png")}/>
                <Text style={styles.tagline}>Sell What You No Longer Need</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <AppButton title="Login" />
                <AppButton title="Register" color="secondary" />
            </View>
        </ImageBackground>
    
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,    
        justifyContent: "flex-end",
        alignItems: "center",
    },
    buttonsContainer: {
        padding: 20,
        width: '100%',
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
    tagline: {
        fontSize: 25, 
        fontWeight: '600',
        paddingVertical: 20,
    },
})

export default WelcomeScreen;
