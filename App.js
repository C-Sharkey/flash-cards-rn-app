import * as React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AddCard from './screens/AddCard';
import AddDeck from './screens/AddDeck';
import Deck from './screens/Deck';
import Decks from './screens/Decks';
import Quiz from './screens/Quiz';


export default function App () {

const [nextId, setNextId] = React.useState(3);
const [decks, setDecks] = React.useState([
  {id: 1, name: 'React', questions:[{question: 'What is React?',answer: 'A library for managing user interfaces'},{question: 'Where do you make Ajax requests in React?',answer: 'The componentDidMount lifecycle event'}]},
  {id: 2, name: 'JavaScript', questions: [{question: 'What is a closure?',answer: 'The combination of a function and the lexical environment within which that function was declared.'}]},
  {id: 3, name: 'C++', questions: [{question: 'Who created C++?',answer: 'Bjarne Stroustrup '}, {question: 'Does C++ support OOP?',answer: 'Yes'}]},
  {id: 4, name: 'Java', questions: [{question: 'What is OOP?',answer: 'Object Orientated Programming'}]},  
]);


// Add Deck
const getDeckValue = (deckName) => {
  // Update state with new info
  setDecks([...decks, {id: nextId, name: deckName, questions:[]}]);
  // increment Id
  setNextId(nextId+1);
}

//// Add Cards to a deck
const getFormValues = (data, question, answer) => {
  // find deck in state
  const deckToUpdate = decks.find(item => (item.id === data.id));
  // add question and answer to questions array
  deckToUpdate.questions.push({question, answer});
  // Update state with new info
  setDecks(decks);
}

// Refactor stack out
  // Docs for passing prop 
  // rerendering entire app
  // useEffect for Asyn actions


  const Stack = createStackNavigator();


  return (
    <NavigationContainer>
      <PaperProvider>
        <Stack.Navigator> 
          <Stack.Screen name="Flashcard App">
            {props => <Decks {...props} data={{ decks }} getDeckValue={getDeckValue} />}
          </Stack.Screen>          
          <Stack.Screen name="Add Deck" component={AddDeck} />
          <Stack.Screen name="Add Card">
            {props => <AddCard {...props} getFormValues={getFormValues} />}
          </Stack.Screen>  
          <Stack.Screen name="Deck" component={Deck} />
          <Stack.Screen name="Quiz" component={Quiz} />
        </Stack.Navigator>        
      </PaperProvider>
    </NavigationContainer>  
  );
};
