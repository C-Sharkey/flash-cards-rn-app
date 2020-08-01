import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Modal, Portal, Text, Button, Provider  } from 'react-native-paper';

export default function QuizResultsModal () {
    const [visible, setVisible] = React.useState(false);

    const showModal = () => setVisible(true);
  
    const hideModal = () => setVisible(false);  return (
    <Provider>
      <Portal>
        <Modal visible={visible} onDismiss={hideModal}>
          <Text>Example Modal</Text>
        </Modal>
        <Button style={{marginTop: 30}} onPress={showModal}>
          Show
        </Button>
      </Portal>
    </Provider>
  );
};

const styles = StyleSheet.create({
  Cards: {
    marginVertical: 8,
  },
});
