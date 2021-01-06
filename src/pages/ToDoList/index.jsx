import React from 'react';
import { TextInput } from 'react-native';
import { View, Text } from './styles';

export default function ToDoList() {
  return (
    <View>
      <Text>To do list</Text>
      <TextInput secureTextEntry placeholder="asfddf" />
    </View>
  );
}
