import React from 'react';
import { SafeAreaView } from 'react-native';

import Main from './src';
import { styled } from 'styled-components/native';

const Background = styled.SafeAreaView`
  background-color: #1C1D31;
  display:flex;
  width: 100%;
  height: 100%;
`

function App(): React.JSX.Element {

  return (
    <Background>
      <Main />
    </Background>
  );
}

export default App;
