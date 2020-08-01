import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Title } from 'react-native-paper';
import QuizCard from '../components/QuizCard';

export default function Quiz () {
  return (
      <View style={styles.container}>
        <Title style={styles.title}>Question: 1 of 10</Title>
        <QuizCard />
      </View>



  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: "#eaeaea"
    },
    title: {
      paddingVertical: 8,
    },
  });