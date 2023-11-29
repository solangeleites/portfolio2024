import styled from 'styled-components';
import { mobile } from '../../queries/mediaQueries';


export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
export const ContainerRow = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const Image = styled.img`
  height: 350px;
  ${mobile} {
    height: 200px;
  }
`;

export const Title = styled.h2`
  font-weight: bold;
  font-family: 'Raleway', sans-serif;
`;
export const Subtitle = styled.h4`
  font-family: 'Raleway', sans-serif;
`;
export const Paragraph = styled.p`
  font-family: 'Raleway', sans-serif;
  font-weight: 500;
  font-size: 20px;
`;
export const Name = styled.h1`
font-family: 'Poppins', sans-serif;
font-weight: 900;
font-size: 40px;
color: var(--oliva);
`;
export const ParagraphAboutMe = styled.p`
  font-family: 'Raleway', sans-serif;
  font-weight: 500;
  font-size: 18px;
`


export const BtoDown = styled.a`
  padding: 15px 20px;
  width: 200px;
  border-radius: 10px;
  font-family: 'Raleway', sans-serif;
  font-weight: 500;
  text-align: center;
  border: 1px solid var(--verde);

  list-style: none;
  text-decoration: none;
  transition: 0.5s ease-in-out;
  margin: 0 auto;

  &:hover {
    background-color: var(--verde);
    color: var(--beige);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  height: 350px;
  width: 500px;
  gap: 20px;

`;
export const SecondContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 450px;
  width: 350px;
  border-radius: 10px;
  border: 1px solid var(--oliva);
`;

export const ContainerButtons = styled.div`
  display: flex;
  gap: 25px;
`;

export const Button = styled.button`
  height: 40px;
  padding: 0 20px;
  border-radius: 10px;
  background-color: var(--oliva);
  font-family: 'Raleway', sans-serif;
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
