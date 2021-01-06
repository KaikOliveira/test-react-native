import React from 'react';

import {
  Wrapper,
  Container,
  Title,
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
        <Title>Faça o Login</Title>
        <Inputs>
          <InputLogon
            placeholder="User"
            placeholderTextColor="#222"
            textAlign="center"
          />
          <InputPassword
            secureTextEntry
            placeholder="Password"
            placeholderTextColor="#222"
            textAlign="center"
          />
        </Inputs>
        <Button onPress={() => navigation.navigate('Lista')}>
          <Label>Entrar</Label>
        </Button>
      </Container>
    </Wrapper>
  );
}
