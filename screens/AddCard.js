import * as React from 'react';
import { useNavigation } from '@react-navigation/native';

import { View, StyleSheet } from 'react-native';
import { Title } from 'react-native-paper';
import Input from '../components/Input';
import FormButton from '../components/FormButton';

export default function AddDeck () {
  const navigation = useNavigation();

  return (
      <View style={styles.container}>
        <Title style={styles.title}>Card Number: 1</Title>
        <Input labelText='Question'/>
        <Input labelText='Answer'/>
        <FormButton 
          btnText='Add Card'
          changeScreen={() => navigation.navigate('Deck')}
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
    }
  });