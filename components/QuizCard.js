import * as React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Card, Title, Paragraph, Button } from 'react-native-paper';
import { color } from 'react-native-reanimated';

export default function QuizCard (props) {
  console.log('CARD-PROPS:: ', props)
  
  // State to manage if question has been answered
  const [questionAnswered, setQuestionAnswered] = React.useState(false);

  // show answer
  const onShowAnswer = () => {
    setQuestionAnswered(true);
  }

  // current question (0 based array)
  const currentQuestion = props.currentQu + 1;

  return (
    <View>
      <Card style={styles.Cards}>
        <Card.Content>
          <Title>{`${currentQuestion} of ${props.quCount}`} </Title>

          { questionAnswered ? 
            <View>
              <Paragraph>Answer: {props.an}</Paragraph>
              <Card.Actions style={styles.Buttons}>
                <Button 
                  style={styles.ButtonRight} 
                  icon="check-circle" 
                  mode="contained" 
                  onPress={props.onCorrectAnswer}>
                    Right
                </Button>
                <Button 
                  style={styles.ButtonWrong} 
                  icon="close-circle" 
                  mode="contained"  
                  onPress={props.onIncorrectAnswer}>
                    Wrong
                </Button>
              </Card.Actions>
            </View>      
              :
            <View>
              <Paragraph>Question: {props.qu}</Paragraph>
              <Card.Actions>
                <Button onPress={onShowAnswer}>See Answer</Button>
              </Card.Actions>
            </View>        
          }


        </Card.Content>
      </Card>
    </View>
)};

const styles = StyleSheet.create({
  Cards: {
    marginVertical: 8,
  },
  Buttons: {

    justifyContent: 'space-between'
  }, 
  ButtonRight:{
    width:'45%',
    backgroundColor: 'green',
  },
  ButtonWrong: {
    width:'45%',
    backgroundColor: 'red',
  },
});

