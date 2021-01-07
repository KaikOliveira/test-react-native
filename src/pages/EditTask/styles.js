import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  background: #f5f5f5;
`;

export const ContainerForm = styled.View`
  width: 100%;
`;

export const Inputs = styled.View``;

export const Label = styled.Text`
  color: #039be6;
  font-size: 16px;
  margin-left: 3.8%;
  margin-top: 22px;
`;

export const InputTitle = styled.TextInput`
  width: 95%;
  height: 60px;
  margin-left: 2.5%;
  background: #fff;
  border-color: #d3e2e6;
  border-radius: 15px;
  border-width: 1px;
  font-size: 22px;
`;

export const InputDescription = styled.TextInput`
  width: 95%;
  height: 110px;
  margin-left: 2.5%;
  background: #fff;
  border-color: #d3e2e6;
  border-radius: 15px;
  border-width: 1px;
  font-size: 22px;
`;

export const InputDateAndTime = styled.View`
  flex-direction: row;
  width: 100%;
`;

export const Calendar = styled.View`
  width: 55%;
  margin-left: 2.5%;
`;

export const Title = styled.Text`
  color: #f4ede8;
  font-size: 24px;
  margin: 0 24px 24px;
`;

export const OpenDatePickerButton = styled.TouchableOpacity`
  height: 55px;

  background: #fff;
  border-color: #d3e2e6;
  border-width: 1px;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
`;

export const OpenDatePickerText = styled.Text`
  font-size: 16px;
  color: #232129;
`;

export const Timer = styled.View`
  width: 45%;
`;

export const OpenTimerPickerButton = styled.TouchableOpacity`
  height: 55px;

  background: #fff;
  border-color: #d3e2e6;
  border-width: 1px;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  margin: 0 24px;
`;

export const OpenTimerPickerText = styled.Text`
  font-size: 16px;
  color: #232129;
`;

export const CompletedCheckBox = styled.View`
  width: 35%;
  background: #fff;
  flex-direction: row;
  border-color: #d3e2e6;
  border-width: 1px;
  border-radius: 15px;
  align-items: center;
  margin-top: 20px;
  margin-left: 2.5%;
`;

export const CompletedCheckBoxText = styled.Text`
  font-size: 16px;
  color: #232129;
  margin-left: 10px;
`;
