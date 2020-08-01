import * as React from 'react';
import { Button  } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const FormButton = ({btnText}) => {
  
  return (
    <Button 
        style={styles.button}
        mode="contained" 
        onPress={() => console.log('Button Pressed')}
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