import * as React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Title, TextInput, BottomNavigation } from 'react-native-paper';
import FormButton from '../components/FormButton'
import AddDeck from '../screens/AddDeck'
import DeckCardsList from '../components/DeckCardsList'

export default function Decks (props) {
  // card state passed as props
  const deckData = props.data.decks;

  const DecksRoute = () => <DeckCardsList deckData={deckData} />     
  const AddDeckRoute = () =>  <AddDeck onSaveDeck={onSaveDeck} />;


  // State for bottom nav
  const [index, setIndex] = React.useState(0);
  // Routes for bottom nav
  const [routes] = React.useState([
    { key: 'decks', title: 'Your Decks', icon: 'home' },
    { key: 'addDeck', title: 'New Deck', icon: 'plus' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    decks: DecksRoute,
    addDeck: AddDeckRoute,
  });

  const onSaveDeck = (nameText) =>{
    // props function updates state in app.js 
    props.getDeckValue(nameText);
    // nav back to Decks
    setIndex(0);
  }

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

