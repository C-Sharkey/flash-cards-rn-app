import * as React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Title, FAB, TextInput, Modal, Portal, Text, Button, Provider } from 'react-native-paper';
import DeckCard from '../components/DeckCard';
import FormButton from '../components/FormButton'

export default function Decks (props) {
  // card state passed as props
  const deckData = props.data.decks;
  // State for modal
  const [visible, setVisible] = React.useState(false);
  // State for name input
  const [nameText, setNameText] = React.useState('');

  // modal toggle functions
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const onSaveDeck = () =>{
    // props function updates state in app.js 
    props.getDeckValue(nameText);
    // reset
    setNameText('');
    // close modal
    hideModal();    
  }

  return (
    <Provider>
      <Portal>
        <View style={styles.container}>
          <Title style={styles.title}>Your Decks</Title>
          <FlatList 
            data={deckData}
            renderItem={({ item }) => (
              <DeckCard data={item} />
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        <FAB 
          style={styles.fab}
          label='Add Deck'
          icon="plus"
          onPress={showModal}
        />    
        </View>
        <Modal visible={visible} onDismiss={hideModal}>
          <View style={styles.modalContainer}>
            <Title style={styles.title}>Add A New Deck</Title>
            <TextInput 
              style={styles.input}
              label='Deck Name'
              value={nameText}
              onChangeText={(nameText) => setNameText(nameText)}
            />
          <FormButton 
            btnText='Add Deck'
            changeScreen={onSaveDeck}
          />
          </View>  
        </Modal>
      </Portal>
    </Provider>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: "#eaeaea"
    },
    modalContainer: {
      flex: 1,
      padding: 20,
      margin: 10,
      backgroundColor: "#fff"
    },
    title: {
      paddingVertical: 8,
    },
    fab: {
      position: 'absolute',
      margin: 16,
      right: 0,
      bottom: 0,
    },
    input: {
      marginVertical: 12,
  }
  });