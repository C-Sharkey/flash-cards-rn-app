import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Title, TextInput, Button} from 'react-native-paper';

export default function AddDeck (props) {

    // State for name input
    const [nameText, setNameText] = React.useState('');

    const saveDeck = () => {
      props.onSaveDeck(nameText)
      // reset
      setNameText('');
    }
  return (
    <View style={styles.Container}>
      <Title style={styles.title}>Add A New Deck</Title>
      <TextInput 
        style={styles.input}
        label='Deck Name'
        value={nameText}
        onChangeText={(nameText) => setNameText(nameText)}
      />
      <Button 
        style={styles.button}
        icon="content-save" 
        mode="contained"
        onPress={saveDeck}          
      >
        Add Deck
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff"
  },
  button: {
    marginTop: 10,
  },
  });