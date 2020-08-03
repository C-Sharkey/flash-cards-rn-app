import * as React from 'react';
import { useNavigation } from '@react-navigation/native';

import { StyleSheet, TouchableOpacity } from 'react-native'
import { Card, Title, Paragraph } from 'react-native-paper';

const DeckCard = (props) => {
  console.log('CARD-DATA ', props.data.name)
  const data = props.data;
  const navigation = useNavigation();
  const onPress = () => navigation.navigate('Deck', data);
  return (
    <TouchableOpacity
      onPress={onPress}
    >
      <Card style={styles.Cards}>
        <Card.Content>
          <Title>{data.name}</Title>
          <Paragraph>Cards in deck: {data.questions.length} </Paragraph>
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