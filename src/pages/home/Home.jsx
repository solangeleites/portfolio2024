import React from 'react'
import { HomeContainer, Image, Paragraph, Title, BtoDown, Container, ContainerRow, Subtitle, SecondContainer, CardContainer, Card, Name, ParagraphAboutMe } from './HomeStyled'
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

  <ParagraphAboutMe>Mi enfoque es crecer profesionalmente de manera continua y amoldarme a entornos que cambian rápidamente.</ParagraphAboutMe>
  <ParagraphAboutMe>Aspiro a hacer una diferencia tangible en cada proyecto, buscando constantemente la mejora continua.</ParagraphAboutMe>

  <BtoDown href="../../assets/solange_leites_galvan_cv_noviembre.pdf" alt="Solange Leites Galván CV" download=""
          >Descargar mi CV</BtoDown>
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