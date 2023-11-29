import React from 'react';
import { FormContainer, Input, TextArea, Button } from './FormStyled';

const Form = () => {
  return (
    <FormContainer
      action=""
      style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}
    >
      {' '}
      <Input type="text" color="secondary" placeholder="Nombre" />
      <Input type="text" color="secondary" placeholder="Email" />
      <TextArea
        name=""
        id=""
        cols="50"
        rows="5"
        placeholder="Mensaje"
        style={{ outline: 'none', borderTop: 'none', borderLeft: 'none' }}
      ></TextArea>
      <Button>Enviar</Button>
    </FormContainer>
  );
};

export default Form;
