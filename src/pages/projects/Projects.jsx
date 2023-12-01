import React from 'react';
import {
  SecondContainer,
  Title,
  Subtitle,
  CardContainer,
} from './ProjectsStyled';
import CardEach from '../../components/card/CardEach';

import { Projects as Project } from '../../data/projects';

const Projects = () => {
  const data = Project;
  return (
    <SecondContainer id="proyectos">
      <Title>Projects</Title>
      <Subtitle>
        Estos son algunos de los proyectos que he estado realizando
      </Subtitle>
      <CardContainer>
        {data && data.map((Project)=>(
        <CardEach key={Project.id} {...Project}/>
        ))}
      </CardContainer>
    </SecondContainer>
  );
};

export default Projects;
