import * as React from 'react';
import { useNavigation } from '@react-navigation/native';

import { View, StyleSheet } from 'react-native';
import { Title, Divider, Colors } from 'react-native-paper';
import LargeButton from '../components/LargeButton';

export default function Deck (props) {
  console.log('DeckProps::: ', props)
  const data = props.route.params;
  const navigation = useNavigation();

  // onDelete Deck
    // remove deck
    // returm to Decks

  return (
      <View style={styles.container}>
        <Title style={styles.title}>Number Of Cards: {data.questions.length}</Title>
        <Divider />

        <LargeButton 
          btnText='Start Quiz' 
          mode='contained' 
          changeScreen={() => navigation.navigate('Quiz')}
        />
        <LargeButton 
          btnText='Add Card' 
          mode='outlined' 
          changeScreen={() => navigation.navigate('Add Card')}
        />
        <LargeButton 
          btnColour={Colors.red800}
          btnText='Delete Deck' 
          mode='text' 
          onPress={console.log('Card Deleted')}
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