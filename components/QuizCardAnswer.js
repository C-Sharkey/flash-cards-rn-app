import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Card, Title, Paragraph, Divider, Button } from 'react-native-paper';

export default function QuizCardAnswer () {
  const onPress = () => console.log('go to deck page...');
  return (
      <Card style={styles.Cards}>
        <Card.Content>
          <Title>Answer #1 </Title>
          <Paragraph>Dublin</Paragraph>
          <Card.Actions>
            <Button>Correct</Button>
            <Button>Incorrect</Button>
          </Card.Actions>
        </Card.Content>
      </Card>
)};

const styles = StyleSheet.create({
  Cards: {
    marginVertical: 8,
  },
});

