import * as React from 'react';
import { Appbar } from 'react-native-paper';

const Header = ({title}) => {
  // state for goback as prop
  const _goBack = () => console.log('Went back');
  const goBack = false;
  const goBackBtn = (goBack) => {
    if(goBack) {
      return <Appbar.BackAction onPress={_goBack} />
    }
  }

  return (
    <Appbar.Header>
      {(goBackBtn())}
      <Appbar.Content title={title}/>
    </Appbar.Header>
  );
};

export default Header;