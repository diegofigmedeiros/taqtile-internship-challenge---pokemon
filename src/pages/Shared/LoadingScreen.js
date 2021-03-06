
import * as React from 'react';
import { ActivityIndicator } from 'react-native';

import * as Styled from './styles'


export default function LoadingScreen( props ) {

  return (
    <Styled.LargeLoadingContainer>
        <ActivityIndicator size={props.size} />
    </Styled.LargeLoadingContainer>
  )
}