import * as React from 'react';
import { useNavigation } from '@react-navigation/native';

import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Title } from 'react-native-paper';
import QuizCard from '../components/QuizCard';
import { ProgressBar, Colors } from 'react-native-paper';
import FormButton from '../components/FormButton';

export default function Splash () {
  const navigation = useNavigation();
    // setTimeout(() => {
    //     navigation.replace('Home');
    // }, 3000);
  return (
      <View style={styles.container}>
        <Title style={styles.title}>Flash Cards</Title>
        <ProgressBar progress={0.5} color={Colors.red800} />
        <FormButton  btnText='Go to home...' changeScreen={()=>navigation.navigate('Decks')}/>
      </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: "#C05BD9"
    },
    title: {
        color: "#fff",
      paddingVertical: 8,
    },
  });