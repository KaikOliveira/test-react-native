import React from 'react';
import {
  Wrapper,
  ContainerForm,
  Inputs,
  Label,
  InputTitle,
  InputDescription,
  InputDateAndTime,
  Date,
  Time,
} from './styles';

export default function CreateTask() {
  return (
    <Wrapper>
      <ContainerForm>
        <Inputs>
          <Label>Titulo</Label>
          <InputTitle />
          <Label>Descrição</Label>
          <InputDescription multiline />
        </Inputs>
        <InputDateAndTime>
          <Date multiline dataDetectorTypes={['calendarEvent']} />
          <Time />
        </InputDateAndTime>
      </ContainerForm>
    </Wrapper>
  );
}
