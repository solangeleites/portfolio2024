import React from 'react';
import { FormContainer, Input, TextArea, Button } from './FormStyled';
import { useState } from 'react';
import axios from 'axios';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const [successMessage, setSuccessMessage] = useState(null);


  const handleSubmit = (e) => {
    e.preventDefault();
    if(name.length === 0){
      alert('El campo nombre es obligatorio');
    } else if (email.length === 0){
      alert('El campo email es obligatorio');
    } else if (msg.length === 0){
      alert('El campo mensaje es obligatorio');
    } else {
    const url = "http://localhost/backendportofolio/contact.php";

    let data = new FormData();
    data.append("name", name);
    data.append("email", email);
    data.append("msg", msg);


    axios.post(url, data)
    .then(response => {
      setSuccessMessage(response.data);
      setName('');
      setEmail('');
      setMsg('');
    })
      .catch(() => alert("Error al enviar el mensaje"));
    }
  }


  return (
    <FormContainer
      style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}
    >
      {' '}
      <Input
        type="text"
        placeholder="Nombre"
        name="name"
        id="name"
        value={name} onChange={(e) => setName(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Email"
        name="email"
        id="email"
        value={email} onChange={(e) => setEmail(e.target.value)}
      />
      <TextArea
        name="msg"
        id="msg"
        cols="50"
        rows="5"
        placeholder="Mensaje"
        style={{ outline: 'none', borderTop: 'none', borderLeft: 'none' }}
        value={msg} onChange={(e) => setMsg(e.target.value)}
      ></TextArea>
      <Input type='button' name='send' id='send'value='Enviar' onClick={handleSubmit} />
      {successMessage && <p>{successMessage}</p>}

    </FormContainer>
  );
};

export default Form;
  // const [fields, setFields] = useState({});

  // const onSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log(fields);
  //   try {
  //     const contact = await createUser(fields.name, fields.email, fields.msg);
  //     console.log(contact);
  //     if (contact) {
  //       dispatch(
  //         setCurrentUser({
  //           ...contact
  //         })
  //       );
  //       console.log('Usuario registrado con éxito:', contact);
  //     }
  //   } catch (error) {
  //     console.log('Error al registrar usuario:', error);
  //   }
  // };

  // const onChange = async (e) => {
  //   setFields({
  //     ...fields,
  //     [e.target.name]: e.target.value,
  //   });
  //   console.log(e.target.value);
  // };
