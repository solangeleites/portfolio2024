import styled from 'styled-components';
import { Container, ContainerRow } from '../home/HomeStyled';

export const ContainerRowStyled = styled(Container)`
  flex-direction: row;
  align-items: center;
  width: 100%;
`;
export const ContainerColumn = styled(ContainerRow)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ContainerColumnStyled = styled.div`
  width: 500px;
`;
export const ContainerRowSkills = styled.div`
  /* width: 500px;
  height: 300px;
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center; */
  padding: 30px;
  width: 500px;

`;
export const ContainerRowSkills2 = styled.div`
  border-radius: 5px;
  padding: 20px;
  height: 110px;
  width: 110px;
  box-shadow: 0px 0px 5px 0px #e4e0c8;
  margin: 15px;
`;
export const Image = styled.img`
  height: 50px;
`;
export const Paragraph = styled.p`
  font-family: 'Raleway', sans-serif;
  font-size: 14px;
  font-weight: 600;
  margin-top: 5px;
`;
export const Title = styled.h3`
  font-family: 'Raleway', sans-serif;
  font-size: 20px;
  font-weight: 700;
`;
