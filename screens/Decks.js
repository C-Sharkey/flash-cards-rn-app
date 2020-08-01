import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Title } from 'react-native-paper';
import DeckCard from '../components/DeckCard';

export default function Decks () {

  return (
      <View style={styles.container}>
        <Title style={styles.title}>Your Decks</Title>
        <DeckCard  />
        <DeckCard  />
        <DeckCard  />
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