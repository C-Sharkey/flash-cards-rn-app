import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Title, Divider } from 'react-native-paper';
import LargeButton from '../components/FormButton';

export default function Deck () {

  return (
      <View style={styles.container}>
        <Title style={styles.title}>Number Of Cards: 10</Title>
        <Divider />
        <LargeButton btnText='Start Quiz' mode='outlined' />
        <LargeButton btnText='Add Card' mode='contained' />
        <LargeButton btnText='Delete Deck' mode='text' />

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