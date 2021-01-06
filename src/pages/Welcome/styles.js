import styled from 'styled-components';
import { shade } from 'polished';

export const Wrapper = styled.SafeAreaView`
  background: #039be6;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.View`
  width: 85%;
  height: 260px;
  border-color: #d3e2e6;
  border-radius: 15px;
  border-width: 0.2px;
  background: ${shade(0.02, '#039be6')};
  justify-content: space-between;
  align-items: center;
`;

export const Inputs = styled.View`
  width: 100%;
  align-items: center;
`;

export const InputLogon = styled.TextInput`
  width: 90%;
  height: 60px;
  background: #fff;
  border-color: #d3e2e6;
  border-radius: 15px;
  border-width: 1px;
  margin-top: 15px;
`;

export const InputPassword = styled.TextInput`
  width: 90%;
  height: 60px;
  background: #fff;
  border-color: #d3e2e6;
  border-radius: 15px;
  border-width: 1px;
  margin-top: 15px;
`;

export const Button = styled.TouchableOpacity`
  background: #fff;
  width: 80%;
  height: 50px;
  border-color: #d3e2e6;
  border-radius: 15px;
  border-width: 1px;
  margin-bottom: 15px;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.Text`
  color: #8fa7b3;
  font-size: 25px;
  font-weight: 700;
`;
