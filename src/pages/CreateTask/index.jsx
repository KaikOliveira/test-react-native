import React, { useState, useCallback } from 'react';
import { Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import api from '../../services/api';

import ButtonCheck from '../../components/ButtonCheck/index';

import {
  Wrapper,
  ContainerForm,
  Inputs,
  Label,
  InputTitle,
  InputDescription,
  InputDateAndTime,
  Calendar,
  OpenDatePickerButton,
  OpenDatePickerText,
  Timer,
  OpenTimerPickerButton,
  OpenTimerPickerText,
} from './styles';

export default function CreateTask({ navigation }) {
  const [showDatePicker, setShowDateTimePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [mode, setMode] = useState('date');

  const [show, setShow] = useState(false);

  const [title, setTitile] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(new Date(1598051730000));

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showTimepicker = () => {
    showMode('time');
  };

  const handleToggleDatePicker = useCallback(() => {
    setShowDateTimePicker((state) => !state);
  }, []);

  const handleDateChanged = useCallback((event, date) => {
    if (Platform.OS === 'android') {
      setShowDateTimePicker(false);
    }

    if (date) {
      setSelectedDate(date);
    }
  }, []);

  async function handlerCreateTask() {
    const data = new FormData();

    data.append('title', title);
    data.append('description', description);

    await api.post('/tasks', data);

    navigation.navigate('Lista');
  }

  return (
    <Wrapper>
      <ContainerForm>
        <Inputs>
          <Label>Titulo</Label>
          <InputTitle value={title} onChangeText={setTitile} />
          <Label>Descrição</Label>
          <InputDescription
            multiline
            value={description}
            onChangeText={setDescription}
          />
        </Inputs>
        <Label>Data e hora de conclusão</Label>
        <InputDateAndTime>
          <Calendar>
            <OpenDatePickerButton onPress={handleToggleDatePicker}>
              <OpenDatePickerText>Escolha a data</OpenDatePickerText>
            </OpenDatePickerButton>
            {showDatePicker && (
              <DateTimePicker
                mode="date"
                onChange={handleDateChanged}
                textColor="#f4ede8"
                value={selectedDate}
              />
            )}
          </Calendar>

          <Timer>
            <OpenTimerPickerButton onPress={showTimepicker}>
              <OpenTimerPickerText>Escolha o horario</OpenTimerPickerText>
            </OpenTimerPickerButton>
          </Timer>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour
              onChange={onChange}
            />
          )}
        </InputDateAndTime>
      </ContainerForm>

      <ButtonCheck onPress={handlerCreateTask} />
    </Wrapper>
  );
}
