import * as React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './screens/Splash';
import AddCard from './screens/AddCard';
import AddDeck from './screens/AddDeck';
import Deck from './screens/Deck';
import Decks from './screens/Decks';
import Quiz from './screens/Quiz';
export default function App () {
const [quizes, setQuizes] = React.useState([
  {id: 1, name: 'React', questions:[{question: 'What is React?',answer: 'A library for managing user interfaces'},{question: 'Where do you make Ajax requests in React?',answer: 'The componentDidMount lifecycle event'}]},
  {id: 2, name: 'JavaScript', questions: [{question: 'What is a closure?',answer: 'The combination of a function and the lexical environment within which that function was declared.'}]}  
]);



  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <PaperProvider>
        <Stack.Navigator>
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Decks" component={Decks} initialParams={{ quizes }} />
          <Stack.Screen name="Add Deck" component={AddDeck} />
          <Stack.Screen name="Add Card" component={AddCard} />
          <Stack.Screen name="Deck" component={Deck} />
          <Stack.Screen name="Quiz" component={Quiz} />
        </Stack.Navigator>        
      </PaperProvider>
    </NavigationContainer>  
  );
};

