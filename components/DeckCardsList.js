import * as React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Title } from 'react-native-paper';
import DeckCard from '../components/DeckCard';


export default function DeckCardsList (props) {
    return (
        <View style={styles.container}>
            <Title style={styles.title}>Your Decks</Title>
            <FlatList 
                data={props.deckData}
                renderItem={({ item }) => (
                <DeckCard data={item} />
            )}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      paddingBottom:0,
      backgroundColor: "#eaeaea"
    },
    title: {
        paddingVertical: 8,
      },
});