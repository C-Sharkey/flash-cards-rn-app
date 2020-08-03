import * as React from 'react';
import { Button, Colors  } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const FormButton = ({btnText, changeScreen, btnColour}) => {
  
  return (
    <Button 
      color={btnColour}
      style={styles.button}
      mode="contained" 
      onPress={changeScreen}
    >
     {btnText}
    </Button>
  );
};

const styles = StyleSheet.create({
    button: {
        marginVertical: 16
    }
  });

export default FormButton;