import React from 'react';
import { ContainerRow, Container, Title, Paragraph } from './ContactStyled';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md';

import Form from './form/Form';
import Email from '../../components/UI/email/Email';
import Linkedin from '../../components/UI/linkedin/Linkedin';
import Github from '../../components/UI/github/Github';

const Contact = () => {
  return (
    <Container id="contact">
      <ContainerRow style={{ boxShadow: '0px 0px 5px 0px #e4e0c8', alignItems:'start'}}>
        <Title>Redes</Title>
        <Paragraph>
          {' '}
          <Github />
          <a href="github.com/solangeleites">github.com/solangeleites</a>
        </Paragraph>
        <Paragraph>
          {' '}
          <Linkedin />
          <a href="https://www.linkedin.com/in/solangeleitesgalvan/">
            linkedin.com/in/solangeleitesgalvan/
          </a>
        </Paragraph>
        <Paragraph>
          {' '}
          <Email />
          <a href="mailto:solangeleitesg@gmail.com">
            solangeleitesg@gmail.com{' '}
          </a>
        </Paragraph>
      </ContainerRow>

      <ContainerRow style={{ boxShadow: '0px 0px 5px 0px #e4e0c8' }}>
         <Title>Contactame</Title>
        <Form />
      </ContainerRow>
    </Container>
  );
};

export default Contact;
