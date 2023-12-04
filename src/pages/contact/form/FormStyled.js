import styled from 'styled-components';
import { mobile } from '../../../queries/mediaQueries';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 100%;
  height: 100%;
  background-color: var(--beige);
  color: var(--verde);
  border-radius: 20px;

  ${mobile} {
    width: 350px;
    padding: 0px;
  }
`;

export const Input = styled.input`
  border: none;
  outline: none;
  border-bottom: 1px solid var(--verde);
  font-family: 'Raleway', sans-serif;
  height: 30px;
  width: 350px;

  ${mobile} {
    width: 220px;
  }
`;

export const TextArea = styled.textarea`
  border: none;
  outline: none;
  border-bottom: 1px solid var(--verde);
  font-family: 'Raleway', sans-serif;
  height: 90px;
  width: 350px;

  ${mobile} {
    width: 220px;
  }
`;

export const Button = styled.input`
  border-radius: 10px;
  border: none;
  outline: none;
  background-color: var(--oliva);
  color: var(--beige);
  height: 40px;
  width: 350px;
  font-family: 'Raleway', sans-serif;
  cursor: pointer;
  transition: 0.5s ease-in-out;
    &:hover {
    background-color: var(--verde);
  }
  ${mobile} {
    width: 220px;
  }
`;
