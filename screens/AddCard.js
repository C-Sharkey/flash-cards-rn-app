import * as React from 'react';
import { useNavigation } from '@react-navigation/native';

import { View, StyleSheet } from 'react-native';
import { Title, Button, TextInput } from 'react-native-paper';
import Input from '../components/Input';

import FormButton from '../components/FormButton';

export default function AddCard (props) {
  console.log('Props(params):: ', props);
  const data = props.route.params;
  console.log('ADDCARD-DATA:: ', data);
  console.log('||||---> Data.id for addCard file = ', data.id)

  const navigation = useNavigation();

  const [questionText, setQuestionText] = React.useState('');
  const [answerText, setAnswerText] = React.useState('');
  
  const onSaveCard = () => {
    props.getFormValues(data, questionText, answerText)

    setQuestionText('');
    setAnswerText('');
    navigation.navigate('Deck')

  }
  return (
      <View style={styles.container}>
        <Title style={styles.title}>Card Number: {data.questions.length}</Title>
        <TextInput 
          style={styles.input}
          label='Question'
          value={questionText}
          onChangeText={(questionText) => setQuestionText(questionText)}
        />
        <TextInput 
          style={styles.input}
          label='Answer'
          value={answerText}
          onChangeText={(answerText) => setAnswerText(answerText)}
        />
        <FormButton 
          btnText='Add Card'
          changeScreen={onSaveCard}
          onPress={onSaveCard}
        />
      </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: "#fff"
    },
    title: {
      paddingVertical: 8,
    },
    button: {
        marginVertical: 16
    },
    input: {
      marginVertical: 12,
  }
  });

