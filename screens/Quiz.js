import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import QuizCard from '../components/QuizCard';
import QuizResults from '../components/QuizResults';

export default function Quiz (props) {
  // Deck object
  const data = props.route.params;
  // Questions array
  const questions = data.questions;

  // State to track current question
  const [ currentQuestion, setCurrentQuestion ] = React.useState(0);
  // State to track Correct answer
  const [ correctAnswers, setcorrectAnswers ] = React.useState(0);
  // State to track if quiz is finished
  const [ quizFinished, setQuizFinished ] = React.useState(false);
  // State to track quiz score 
  const [quizScore, setQuizScore] = React.useState(0);


  // Reset quiz details
  const onResetQuiz = () => {
    console.log('reset quiz')
    setCurrentQuestion(0);
    setcorrectAnswers(0);
    setQuizFinished(false);
    setQuizScore(0);
  }


  // Check if quiz has finished
  const isQuizFinished = (nextQuestion) => {
    // check if the next qu is equal to length (would mean no more questions for zero based array)
    if (nextQuestion === questions.length) {
      // Finish quiz is set to true
      setQuizFinished(true);
      console.log('Quiz Finished');
    } else {
      console.log('Quiz in progress...');
    }
  }

  // Handle Correct answer
  // Add to score with correct answer
  const onCorrectAnswer = () => {
    // next question
    const nextQuestion = currentQuestion+1;
    // increment correct count
    const correctAnswers = quizScore+1;
    setQuizScore(correctAnswers);
      // show next question
      setCurrentQuestion(nextQuestion);
      // check if quiz is finishedbx
      isQuizFinished(nextQuestion);
  }


  // Handle incorrect answer
  const onIncorrectAnswer = () => {
    // next question
    const nextQuestion = currentQuestion+1;    
    // show next question
    setCurrentQuestion(currentQuestion+1);
    // check if quiz is finishedbx
    isQuizFinished(nextQuestion);
  }

  // List of Question cards
  const quizCards = questions.map((question, key) => (
    <QuizCard 
      key={key} 
      quCount={questions.length} 
      currentQu={currentQuestion} 
      qu={question.question} 
      an={question.answer}
      onCorrectAnswer={onCorrectAnswer}
      onIncorrectAnswer={onIncorrectAnswer}
      /> ))

  return (
      <View style={styles.container}>
        { quizFinished ? 
        <QuizResults 
          quizScore={quizScore}
          totalQuestions={questions.length}
          resetQuiz={onResetQuiz}
        /> 
        : quizCards[currentQuestion] }
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