import React from 'react';
import {
  SecondContainer,
  Title,
  Subtitle,
  CardContainer,
} from './ProjectsStyled';
import CardEach from '../../components/card/CardEach';

import { Proyectos } from '../../data/Proyectos';

const Projects = () => {
  const data = Proyectos;
  return (
    <SecondContainer id="proyectos" >
      <Title >Mis proyectos</Title>
      <Subtitle>
        Estos son algunos de los proyectos que he estado realizando
      </Subtitle>
      <CardContainer>
        {data && data.map((Proyectos)=>(
        <CardEach key={Proyectos.id} {...Proyectos}/>
        ))}
      </CardContainer>
    </SecondContainer>
  );
};

export default Projects;
