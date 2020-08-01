import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Title } from 'react-native-paper';
import QuizCard from '../components/QuizCard';

export default function Splash () {
    setTimeout(() => {
        navigation.replace('Home');
    }, 3000);
  return (
      <View style={styles.container}>
        <Title style={styles.title}>Splash Screen</Title>
      </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: "#C05BD9"
    },
    title: {
        color: "#fff",
      paddingVertical: 8,
    },
  });