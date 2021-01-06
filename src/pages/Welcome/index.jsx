import React from 'react';

import {
  Wrapper,
  Container,
  Button,
  Label,
  Inputs,
  InputLogon,
  InputPassword,
} from './styles';

export default function Welcome({ navigation }) {
  return (
    <Wrapper>
      <Container>
        <Inputs>
          <InputLogon placeholder="Login" />
          <InputPassword secureTextEntry placeholder="Password" />
        </Inputs>
        <Button onPress={() => navigation.navigate('Lista')}>
          <Label>Entrar</Label>
        </Button>
      </Container>
    </Wrapper>
  );
}
