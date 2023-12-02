import React from 'react';
import {
  Card,
  CardContainer2,
  Title,
  Subtitle,
  Paragraph,
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
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <Title>{title}</Title>
          <div style={{ display: 'flex', gap: '25px', width: '200px' }}>
            <Github href={github} />
            <Deploy href={deploy} />
          </div>
        </div>
        <Subtitle>Tecnologias: {tech}</Subtitle>
        <Paragraph>{paragraph}</Paragraph>
        <div
          style={{
            display: 'flex',
            width: '300px',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Subtitle>Rol:</Subtitle>
            <Paragraph>{rol}</Paragraph>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Subtitle>Duración:</Subtitle>
            <Paragraph>{duration}</Paragraph>
          </div>
        </div>
      </CardContainer2>
    </Card>
  );
};

export default CardEach;
