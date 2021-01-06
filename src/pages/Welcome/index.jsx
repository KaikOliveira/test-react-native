import React from 'react';

/*
import { Button, View, Text } from 'react-native';

export default function Welcome({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}
*/

import { Wrapper, Button, Label } from './styles';

export default function Welcome({ navigation }) {
  return (
    <Wrapper>
      <Button onPress={() => navigation.navigate('Lista')}>
        <Label>Gooo</Label>
      </Button>
    </Wrapper>
  );
}
