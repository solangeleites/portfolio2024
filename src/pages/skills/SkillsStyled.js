import styled from 'styled-components';
import { Container, ContainerRow } from '../home/HomeStyled';
import { mobile } from '../../queries/mediaQueries';

export const ContainerRowStyled = styled(Container)`
  flex-direction: row;
  align-items: center;
  width: 100%;

  ${mobile} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const ContainerColumn = styled(ContainerRow)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
`;
export const ContainerColumnStyled = styled.div`
  width: 500px;
  display: flex;
  justify-content:center;
  align-items:center;
    ${mobile} {
    width: 300px;
  }

`;
export const ContainerRowSkills = styled.div`
  padding: 30px;
  width: 500px;

  ${mobile} {
    width: 370px;
    padding: 0;
  }
`;
export const ContainerRowSkills2 = styled.div`
  border-radius: 5px;
  padding: 20px;
  height: 110px;
  width: 110px;
  box-shadow: 0px 0px 5px 0px #e4e0c8;
  margin: 15px;

  ${mobile} {
    width: 90px;
    height: 100px;
  }
`;
export const Image = styled.img`
  height: 50px;

  ${mobile} {
    height: 40px;
  }
`;
export const Paragraph = styled.p`
  font-family: 'Raleway', sans-serif;
  font-size: 14px;
  font-weight: 600;
  margin-top: 5px;

  ${mobile} {
    font-size: 12px;
  }
`;
export const Title = styled.h3`
    font-weight: bold;
    font-size: 25px;
  font-family: 'Raleway', sans-serif;
`;
