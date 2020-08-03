import * as React from 'react';
import { Button, Colors  } from 'react-native-paper';
import { StyleSheet } from 'react-native';

export default function LargeButton ({btnText, mode, changeScreen, btnColour}) {
  return (
    <Button 
        color={btnColour}
        style={styles.button}
        mode={mode} 
        onPress={changeScreen}
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

