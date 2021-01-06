import styled from 'styled-components';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
`;

export const ContainerList = styled.View`
  width: 100%;
  height: 100%;
  background: #f5f5f5;
  align-items: center;
`;

export const List = styled.View`
  width: 95%;
  height: 85px;
  background: #fff;
  margin-top: 15px;
  border-radius: 15px;
  flex-direction: row;
  align-items: center;
`;

export const ContainerData = styled.View`
  flex-direction: column;
  margin-left: 17px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: 700;
`;

export const Description = styled.Text`
  font-size: 14px;
  color: #888;
`;

export const Date = styled.Text`
  font-size: 14px;
  color: #888;
`;

export const ButtonAdd = styled.TouchableOpacity`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 7%;
  right: 7%;

  background: #ff7143;
`;
