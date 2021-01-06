import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
// eslint-disable-next-line import/no-unresolved
import CheckBox from '@react-native-community/checkbox';

import {
  Wrapper,
  ContainerList,
  List,
  ContainerData,
  Title,
  Description,
  Date,
} from './styles';

import api from '../../services/api';

export default function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [isSelected, setSelection] = useState(false);

  useEffect(() => {
    api.get('/tasks').then((response) => {
      setTasks(response.data);
    });
  }, []);

  return (
    <Wrapper>
      <ContainerList>
        {tasks.map((task) => (
          <List key={task.id}>
            <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              style={styles.checkbox}
            />
            <ContainerData>
              <Title>{task.title}</Title>
              <Description>{task.description}</Description>
              <Date>{task.date}</Date>
            </ContainerData>
          </List>
        ))}
      </ContainerList>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  checkbox: {
    marginLeft: 19,
    alignSelf: 'center',
  },
});
