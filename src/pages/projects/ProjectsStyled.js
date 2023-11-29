import styled from 'styled-components';

export const SecondContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
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
`;

export const ContainerButtons = styled.div`
  display: flex;
  gap: 25px;
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
  flex-direction:column;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 25px;
  width: 90%;
`;
export const CardContainer2 = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: space-around;
  align-items: start;
  flex-wrap: wrap;
  gap: 25px;

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
`;
