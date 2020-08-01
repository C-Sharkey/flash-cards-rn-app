import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Card, Title, Paragraph, Divider, Button } from 'react-native-paper';

export default function QuizCard () {
  const onPress = () => console.log('go to deck page...');
  return (
      <Card style={styles.Cards}>
        <Card.Content>
          <Title>Question #1 </Title>
          <Paragraph>What is the capital of Ireland?</Paragraph>
          <Card.Actions>
            <Button>See Answer</Button>
          </Card.Actions>
        </Card.Content>
      </Card>
)};

const styles = StyleSheet.create({
  Cards: {
    marginVertical: 8,
  },
});

