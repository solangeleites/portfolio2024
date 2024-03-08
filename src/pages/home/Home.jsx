import React from 'react'
import { HomeContainer, Image, Paragraph, Title, BtnDown, Container, ContainerRow, Subtitle, SecondContainer, CardContainer, Card, Name, ParagraphAboutMe } from './HomeStyled'
import { Link as ScrollLink } from 'react-scroll';
import Projects from '../projects/Projects';
import Contact from '../contact/Contact';
import Skills from '../skills/Skills';
import Footer from '../footer/Footer';
import TypeWriter from 'typewriter-effect'


const Home = () => {
      
  return (
    <>
    <HomeContainer id='about' >
<ContainerRow>
      <Container >
            <Paragraph>Hola! Mi nombre es </Paragraph>
            <Name>Solange Leites Galván</Name>
<div style={{color:'black', fontWeight:'800', fontSize:'25px'}}>
<TypeWriter 
      options={{
            strings:[
                  'Full Stack Developer',
                  'Front End Developer',
                  'Back End Developer',
            ],
            autoStart: true,
            loop: true,
      }}
/>
</div>

  <ParagraphAboutMe>Desde que descubrí este mundo me enfoco constantemente en aprender, buscando crecer profesionalmente, amoldándome a un entorno en constante evolución.</ParagraphAboutMe>
  <ParagraphAboutMe>Aspiro a generar una diferencia tangible en todos los proyectos que participe, optimizando cada línea de código, desarrollando con coherencia y armonía, logrando así el resultado que mejor se adapte a las necesidades de cada cliente.</ParagraphAboutMe>

  <BtnDown href="https://drive.google.com/file/d/1UANRmx6pIJzrJ7qTLep9EJ800nV3ELm6/view?usp=sharing" alt="Solange_Leites_Galván_CV" target='_blank'>Descargar mi CV</BtnDown>
</Container>

      <Container>
          <Image src="https://blush.design/api/download?shareUri=HeUTuvAqVcA8P2jI&c=Skin_0%7Effdbb4&w=800&h=800&fm=png" />
      </Container>
</ContainerRow>

      </HomeContainer>
<Skills />
<Projects />
<Contact />
<Footer />
      </>
  )
}

export default Home