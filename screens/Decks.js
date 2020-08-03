import * as React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Title } from 'react-native-paper';
import DeckCard from '../components/DeckCard';

export default function Decks (props) {
  console.log('DATA?? ', props.route.params.quizes)
  const quizData = props.route.params.quizes;

  return (
      <View style={styles.container}>
        <Title style={styles.title}>Your Decks</Title>
        <FlatList 
          data={quizData}
          renderItem={({ item }) => (
            <DeckCard data={item} />
          )}
          keyExtractor={(item) => item.id}
        />
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