import React from 'react';
import {
  SecondContainer,
  Title,
  Subtitle,
  CardContainer,
  Card,

} from './ProjectsStyled';
import Github from '../../components/UI/github/Github';
import Deploy from '../../components/UI/deploy/Deploy';
import CardEach from '../../components/card/CardEach';

const Projects = () => {
  return (
    <SecondContainer id="projects">
      <Title>Projects</Title>
      <Subtitle>
        Estos son algunos de los proyectos que he estado realizando
      </Subtitle>
      <CardContainer>
        <CardEach/>
        <CardEach/>
        <CardEach/>
        <CardEach/>
        <CardEach/>
        <CardEach/>
      </CardContainer>
    </SecondContainer>
  );
};

export default Projects;
