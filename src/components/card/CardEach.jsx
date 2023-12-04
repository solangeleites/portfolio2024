import React from 'react';
import {
  Card,
  CardContainer2,
  Title,
  Subtitle,
  Paragraph,
  ContainerButtonDeployAndGithub,
  ContainerRolAndDuration,
} from '../../pages/projects/ProjectsStyled';
import Github from '../UI/github/Github';
import Deploy from '../UI/deploy/Deploy';

const CardEach = ({
  id,
  img,
  title,
  github,
  deploy,
  tech,
  paragraph,
  rol,
  duration,
}) => {
  return (
    <Card style={{ boxShadow: '0px 0px 5px 0px #e4e0c8', border: 'none' }}>
      <img src={img} alt={title} style={{ height: '300px' }} />
      <CardContainer2>
        <ContainerButtonDeployAndGithub
        >
          <Title>{title}</Title>
          <div style={{display:'flex', gap:'50px'}}>
            <Github href={github} />
            <Deploy href={deploy} />
          </div>
        </ContainerButtonDeployAndGithub>
        <Subtitle>Tecnologias: {tech}</Subtitle>
        <Paragraph>{paragraph}</Paragraph>
        <ContainerRolAndDuration>
          <div >
            <Subtitle>Rol:</Subtitle>
            <Paragraph>{rol}</Paragraph>
          </div>

          <div>
            <Subtitle>Duración:</Subtitle>
            <Paragraph>{duration}</Paragraph>
          </div>
        </ContainerRolAndDuration>
      </CardContainer2>
    </Card>
  );
};

export default CardEach;
