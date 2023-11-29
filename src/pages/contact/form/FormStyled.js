import styled from 'styled-components';

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
  /* @media (min-width: 768px) {
        width: 50%;
    }
    @media (min-width: 1024px) {
        width: 40%;
    }
    @media (min-width: 1440px) {
        width: 30%;
    }
    @media (min-width: 1920px) {
        width: 20%;
    } */
`;

export const Input = styled.input`
  border: none;
  outline: none;
  border-bottom: 1px solid var(--verde);
  font-family: 'Raleway', sans-serif;
  height: 30px;
  width: 350px;
`;

export const TextArea = styled.textarea`
  border: none;
  outline: none;
  border-bottom: 1px solid var(--verde);
  font-family: 'Raleway', sans-serif;
  height: 90px;
  width: 350px;
`;

export const Button = styled.button`
  border-radius: 10px;
  border: none;
  outline: none;
  background-color: var(--oliva);
  color: var(--beige);
  height: 40px;
  width: 350px;
  font-family: 'Raleway', sans-serif;
  cursor: pointer;
  &:hover {
    background-color: var(--verde);
  }
`;
