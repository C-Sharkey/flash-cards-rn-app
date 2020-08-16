import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native'
import { Text, Button  } from 'react-native-paper';
import { Title } from 'react-native-paper';


export default function QuizResults (props) {
  const navigation = useNavigation();


  const leaveQuiz = () => {
    props.resetQuiz
    navigation.navigate('Deck')
  }

  return(
    <View>
      <Title style={styles.title}>Quiz Finished: {(props.quizScore / props.totalQuestions)*100}%</Title>
      <Text>Right: {props.quizScore}</Text>
      <Text>Wrong: {props.totalQuestions - props.quizScore} </Text>

      <View style={styles.Buttons} >
        <Button 
          style={styles.ButtonRestart}
          icon="restart" 
          mode="contained"
          onPress={props.resetQuiz}  
        >
          Restart Quiz
        </Button>
        <Button
          icon="check" 
          mode="outlined"
          onPress={leaveQuiz}        
        >
          Finish
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Cards: {
    marginVertical: 8,
  },
  title: {
    paddingVertical: 8,
  },
  Buttons: {
    marginTop: 20,
  },
  ButtonRestart: {
    marginBottom:10,
  }
});

