import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet } from 'react-native';
import { Title, Divider, Button } from 'react-native-paper';
import LargeButton from '../components/LargeButton';

export default function Deck (props) {
  const data = props.route.params;
  const navigation = useNavigation();

  return (
      <View style={styles.container}>
        <Title style={styles.title}>Number Of Cards: {data.questions.length}</Title>
        <Divider />

        {
          (data.questions.length < 1) ?
          <Button
            disabled
            mode='contained'
          > Start Quiz 
          </Button>
          :
          <LargeButton 
            btnText='Start Quiz' 
            mode='contained' 
            changeScreen={() => navigation.navigate('Quiz', data)}
          />
        }

        <LargeButton 
          btnText='Add Card' 
          mode='outlined' 
          changeScreen={() => navigation.navigate('Add Card', data)}
        />
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