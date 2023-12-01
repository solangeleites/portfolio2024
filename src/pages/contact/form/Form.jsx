import React from 'react';
import { FormContainer, Input, TextArea, Button } from './FormStyled';
import { useState } from 'react';

const Form = () => {
  const [fields, setFields] = useState({});

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(fields);
    try {
      const contact = await createUser(fields.name, fields.email, fields.msg);
      console.log(contact);
      if (contact) {
        dispatch(
          setCurrentUser({
            ...contact
          })
        );
        console.log('Usuario registrado con éxito:', contact);
      }
    } catch (error) {
      console.log('Error al registrar usuario:', error);
    }
  };

  const onChange = async (e) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value);
  };

  return (
    <FormContainer
      action="enquery.php"
      style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}
      onSubmit={onSubmit}
    >
      {' '}
      <Input
        type="text"
        placeholder="Nombre"
        name="name"
        id="name"
        onChange={onChange}
      />
      <Input
        type="text"
        placeholder="Email"
        name="email"
        id="email"
        onChange={onChange}
      />
      <TextArea
        name="msg"
        id="msg"
        cols="50"
        rows="5"
        placeholder="Mensaje"
        onChange={onChange}
        style={{ outline: 'none', borderTop: 'none', borderLeft: 'none' }}
      ></TextArea>
      <Button>Enviar</Button>
    </FormContainer>
  );
};

export default Form;
