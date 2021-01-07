import React from 'react';

import { Feather } from '@expo/vector-icons';
import { Check } from './styles';

export default function ButtonCheck() {
  return (
    <Check>
      <Feather name="check" size={32} color="#fff" />
    </Check>
  );
}
