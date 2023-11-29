import React from 'react'
import { Card, CardContainer2, Title, Subtitle, Paragraph } from '../../pages/projects/ProjectsStyled'
import Github from '../UI/github/Github'
import Deploy from '../UI/deploy/Deploy'


const CardEach = () => {
  return (
    <Card style={{ boxShadow: '0px 0px 5px 0px #e4e0c8', border:'none' }}>
    <img
      src="https://blush.design/api/download?shareUri=HeUTuvAqVcA8P2jI&c=Skin_0%7Effdbb4&w=800&h=800&fm=png"
      style={{ height: '250px' }}
    />
    <CardContainer2>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <Title>Proyecto 1</Title>
        <div style={{ display: 'flex', gap: '25px', width: '200px' }}>
          <Github />
          <Deploy />
        </div>
      </div>
      <Subtitle>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil,
        distinctio!
      </Subtitle>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
        accusamus veritatis autem illo, natus quo delectus incidunt optio
        placeat consequuntur perferendis aperiam. Saepe necessitatibus ea
        perspiciatis vo?
      </Paragraph>
      <div
        style={{
          display: 'flex',
          width: '300px',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Subtitle>Rol:</Subtitle>
          <Paragraph>Fullstack</Paragraph>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Subtitle>Duración:</Subtitle>
          <Paragraph>2 meses</Paragraph>
        </div>
      </div>

    </CardContainer2>
  </Card>
  )
}

export default CardEach