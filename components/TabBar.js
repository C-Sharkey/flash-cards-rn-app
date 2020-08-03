import * as React from 'react';
import { BottomNavigation } from 'react-native-paper';
import Decks from '../screens/Decks';
import AddDeck from '../screens/AddDeck';


const Home = () => <Decks />;
const NewDeck = () => <AddDeck />;

const TabBar = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', icon: 'home' },
    { key: 'addDeck', title: 'Add Deck', icon: 'plus' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    addDeck: NewDeck,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default TabBar;