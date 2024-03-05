import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Money Tracker</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#02CF8E',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 32,
        fontFamily: 'Poppins-Bold',
    },
});