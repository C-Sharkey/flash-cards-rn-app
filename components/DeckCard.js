import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Card, Title, Paragraph } from 'react-native-paper';

const DeckCard = () => {
  const onPress = () => console.log('go to deck page...');
  return (
    <TouchableOpacity
      onPress={onPress}
    >
      <Card style={styles.Cards}>
        <Card.Content>
          <Title>Deck title</Title>
          <Paragraph># of Cards</Paragraph>
        </Card.Content>
      </Card>
    </TouchableOpacity>
)};

const styles = StyleSheet.create({
  Cards: {
    marginVertical: 8,
  },
});

export default DeckCard;