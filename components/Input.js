import * as React from 'react';
import { TextInput } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const Input = ({labelText}) => {
  const [text, setText] = React.useState('');

  return (
    <TextInput
      style={styles.input}
      label={labelText}
      value={text}
      onChangeText={text => setText(text)}
    />
  );
};

const styles = StyleSheet.create({
    input: {
        marginVertical: 12,
    }
});

export default Input;