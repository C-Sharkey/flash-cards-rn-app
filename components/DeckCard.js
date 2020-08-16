import * as React from 'react';
import { useNavigation } from '@react-navigation/native';

import { StyleSheet, TouchableOpacity, Animated } from 'react-native'
import { Card, Title, Paragraph } from 'react-native-paper';

const DeckCard = (props) => {
  // Data from props
  const data = props.data;
  // card count
  const cardCount = data.questions.length;

  // Animation
  const fadeAnim = React.useRef(new Animated.Value(1)).current;

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0.8,
      useNativeDriver: true,
      duration: 1000
    }).start();
    navigation.navigate('Deck', data);
  };

  // navigation
  const navigation = useNavigation();
  // onpress function to nav to deck
  const onPress = () => {
    fadeOut()
    
  }

  return (
    <Animated.View
    style={[
      styles.fadingContainer,
      {
        opacity: fadeAnim // Bind opacity to animated value
      }
    ]}
  >  
    <TouchableOpacity
      onPress={onPress}
    >
      <Card style={styles.Cards}>
        <Card.Content>
          <Title>{data.name}</Title>
          <Paragraph>Cards in deck: {cardCount} </Paragraph>
        </Card.Content>
      </Card>
    </TouchableOpacity>
    </Animated.View>
)};

const styles = StyleSheet.create({
  Cards: {
    marginVertical: 8,
  },

});

export default DeckCard;