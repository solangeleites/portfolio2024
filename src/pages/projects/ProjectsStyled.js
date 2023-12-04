import styled from 'styled-components';
import { mobile } from '../../queries/mediaQueries';

export const SecondContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  ${mobile} {
    align-items: center;
  }
`;

export const SecondContainerSkills = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  ${mobile} {
    height: 600px;
    gap: 0px;
  }
`;
export const Title = styled.h2`
  font-weight: bold;
  font-family: 'Raleway', sans-serif;

  ${mobile} {
    font-size: 18px;
    font-weight: 600;
  }
`;
export const Subtitle = styled.h4`
  font-family: 'Raleway', sans-serif;
  ${mobile} {
    font-size: 16px;
    font-weight: 500;
    width: 350px;
  }
`;
export const Paragraph = styled.p`
  font-family: 'Raleway', sans-serif;
  font-weight: 500;

  ${mobile} {
    font-size: 16px;
    font-weight: 500;
    width: 350px;
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  gap: 25px;

  ${mobile} {
    justify-content: space-evenly;
  }
`;

export const Button = styled.button`
  height: 40px;
  padding: 0 25px;
  border-radius: 10px;
  background-color: var(--oliva);
  font-weight: 500;
  text-align: center;
  border: none;
  margin-top: 20px;

  a {
    text-decoration: none;
    list-style: none;
    background-color: var(--oliva);
    color: var(--beige);
    font-family: 'Raleway', sans-serif;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 25px;
  width: 90%;
`;
export const CardContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: start;
  flex-wrap: wrap;
  gap: 25px;

  ${mobile} {
    align-items: center;
  }
`;
export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 325px;
  width: 1300px;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid var(--oliva);
  transition: transform 1s ease;

  &:hover {
    transform: scale(1.03);
  }
  ${mobile} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 670px;
    width: 400px;
  }
`;

export const ContainerButtonDeployAndGithub = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 25px;
  width: 100%;

  ${mobile} {
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;
export const ContainerRolAndDuration = styled.div`
  display: flex;
  width: 350px;
  justify-content: center;

  ${mobile} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 20%;
    padding: 0;
    margin: 0;
    gap:0px;
  }
`;
