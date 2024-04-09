import React from 'react';
import { StyleSheet } from 'react-native';
import { ResizeMode, Video } from 'expo-av';
import { useNavigation } from '@react-navigation/native';

const SplashVideo = () => {
    const navigation = useNavigation();

    const handlePlaybackStatusUpdate = (status) => {
        if (status.didJustFinish) {
            // O vídeo terminou, navega para a tela "Welcome"
            navigation.replace('Welcome');
        }
    };

    return (
        <Video
            style={StyleSheet.absoluteFill}
            resizeMode={ResizeMode.COVER}
            source={require('../assets/AnimacaoSplashScreen.mp4')}
            isLooping={false}
            shouldPlay={true}
            onPlaybackStatusUpdate={handlePlaybackStatusUpdate}
        />
    );
}

export default SplashVideo;