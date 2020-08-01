import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Title } from 'react-native-paper';
import Input from '../components/Input';
import FormButton from '../components/FormButton';

export default function AddDeck () {

  return (
      <View style={styles.container}>
        <Title style={styles.title}>Card Number: 1</Title>
        <Input labelText='Question'/>
        <Input labelText='Answer'/>
        <FormButton btnText='Add Card'/>
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
    }
  });