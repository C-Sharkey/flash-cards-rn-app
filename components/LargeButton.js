import * as React from 'react';
import { Button  } from 'react-native-paper';
import { StyleSheet } from 'react-native';

export default function LargeButton ({btnText, mode}) {
  return (
    <Button 
        style={styles.button}
        mode={mode} 
        onPress={() => console.log('Button Pressed')}
    >
      {btnText}
    </Button>
  );
};

const styles = StyleSheet.create({
    button: {
        height: 40,
        marginVertical: 16
    }
  });

