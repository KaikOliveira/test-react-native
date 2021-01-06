import React from 'react';
import {
  Wrapper,
  ContainerForm,
  Inputs,
  Label,
  InputTitle,
  InputDescription,
} from './styles';

export default function CreateTask() {
  return (
    <Wrapper>
      <ContainerForm>
        <Inputs>
          <Label>Titulo</Label>
          <InputTitle />
          <Label>Descrição</Label>
          <InputDescription />
        </Inputs>
      </ContainerForm>
    </Wrapper>
  );
}
