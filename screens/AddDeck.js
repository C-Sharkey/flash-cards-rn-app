import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet } from 'react-native';
import { Title } from 'react-native-paper';
import Input from '../components/Input';
import FormButton from '../components/FormButton';
import TabBar from '../components/TabBar'

export default function AddDeck () {
  const navigation = useNavigation();
  return (
      <View style={styles.container}>
        <Title style={styles.title}>Add A Deck</Title>
        <Input labelText='Deck Name'/>
        <FormButton 
          btnText='Add Deck'
          changeScreen={()=>navigation.navigate('Deck')}
        />
      <TabBar />
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