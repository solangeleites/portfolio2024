import React from 'react';
import {
  ContainerColumn,
  ContainerRowStyled,
  ContainerColumnStyled,
  ContainerRowSkills,
  ContainerRowSkills2,
  Image,
  Paragraph,
  Title,
} from './SkillsStyled';
import { SecondContainerSkills } from '../projects/ProjectsStyled';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import { SkillsFront } from '../../data/Proyectos';

const Skills = () => {
  const data = SkillsFront;
  return (
    <SecondContainerSkills id="skills" >
      <Title>Mis skills</Title>
      <ContainerRowStyled>
        <ContainerColumn>
          <Title>Frontend</Title>

          <ContainerColumnStyled>
            <ContainerRowSkills  >
              <Swiper
                slidesPerView={3}
                spaceBetween={10}
                centeredSlides={false}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                style={{ zIndex: '0', width:'100%' }}
              >
                <SwiperSlide>
                  <ContainerRowSkills2>
                    <Image src="https://res.cloudinary.com/dgyubvlec/image/upload/v1700850978/html_haynpc.svg" />
                    <Paragraph>HTML</Paragraph>
                  </ContainerRowSkills2>
                </SwiperSlide>

                <SwiperSlide>
                  <ContainerRowSkills2>
                    <Image src="https://res.cloudinary.com/dgyubvlec/image/upload/v1700850978/css_b6icv5.svg" />
                    <Paragraph>CSS</Paragraph>
                  </ContainerRowSkills2>
                </SwiperSlide>
                <SwiperSlide>
                  <ContainerRowSkills2>
                    <Image src="https://res.cloudinary.com/dgyubvlec/image/upload/v1700850980/js_d4t8yk.svg" />
                    <Paragraph>JavaScript</Paragraph>
                  </ContainerRowSkills2>
                </SwiperSlide>
                <SwiperSlide>
                  <ContainerRowSkills2>
                    <Image src="https://res.cloudinary.com/dgyubvlec/image/upload/v1700850980/react_asmv9r.svg" />
                    <Paragraph>React</Paragraph>
                  </ContainerRowSkills2>
                </SwiperSlide>
                <SwiperSlide>
                  <ContainerRowSkills2>
                    <Image src="https://res.cloudinary.com/dgyubvlec/image/upload/v1700850981/redux_q7oo16.svg" />
                    <Paragraph>Redux</Paragraph>
                  </ContainerRowSkills2>
                </SwiperSlide>
                <SwiperSlide>
                  <ContainerRowSkills2>
                    <Image src="https://res.cloudinary.com/dgyubvlec/image/upload/v1701264840/materialui_l8qesn.png" />
                    <Paragraph>MaterialUI</Paragraph>
                  </ContainerRowSkills2>
                </SwiperSlide>
                <SwiperSlide>
                  <ContainerRowSkills2>
                    <Image src="https://res.cloudinary.com/dgyubvlec/image/upload/v1700850980/php_oenlf2.svg" />
                    <Paragraph>Php</Paragraph>
                  </ContainerRowSkills2>
                </SwiperSlide>
                <SwiperSlide>
                  <ContainerRowSkills2>
                    <Image src="https://res.cloudinary.com/dgyubvlec/image/upload/v1701264531/wordpress_qqxlau.png" />
                    <Paragraph>WordPress</Paragraph>
                  </ContainerRowSkills2>
                </SwiperSlide>
              </Swiper>
            </ContainerRowSkills>
          </ContainerColumnStyled>
        </ContainerColumn>

        <ContainerColumn>
          <Title>Backend</Title>

          <ContainerColumnStyled>
            <ContainerRowSkills>
              <Swiper
                slidesPerView={3}
                spaceBetween={10}
                centeredSlides={false}
                autoplay={{
                  delay: 1800,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                style={{ zIndex: '0' }}
              >
                <SwiperSlide>
                  <ContainerRowSkills2>
                    <Image src="https://res.cloudinary.com/dgyubvlec/image/upload/v1700850980/node_mv7zue.svg" />
                    <Paragraph>NodeJS</Paragraph>
                  </ContainerRowSkills2>
                </SwiperSlide>
                <SwiperSlide>
                  <ContainerRowSkills2>
                    <Image src="https://res.cloudinary.com/dgyubvlec/image/upload/v1700850978/express_lkoror.svg" />
                    <Paragraph>Express</Paragraph>
                  </ContainerRowSkills2>
                </SwiperSlide>
                <SwiperSlide>
                  <ContainerRowSkills2>
                    <Image src="https://res.cloudinary.com/dgyubvlec/image/upload/v1700850980/mongo_xsufc5.svg" />
                    <Paragraph>MongoDB</Paragraph>
                  </ContainerRowSkills2>
                </SwiperSlide>
                <SwiperSlide>
                  <ContainerRowSkills2>
                    <Image src="https://res.cloudinary.com/dgyubvlec/image/upload/v1700850980/postgres_myicbe.svg" />
                    <Paragraph>PostgreSQL</Paragraph>
                  </ContainerRowSkills2>
                </SwiperSlide>
                <SwiperSlide>
                  <ContainerRowSkills2>
                    <Image src="https://res.cloudinary.com/dgyubvlec/image/upload/v1700850981/sequelize_ohac83.svg" />
                    <Paragraph>Sequelize</Paragraph>
                  </ContainerRowSkills2>
                </SwiperSlide>
                <SwiperSlide>
                  <ContainerRowSkills2>
                    <Image src="https://res.cloudinary.com/dgyubvlec/image/upload/v1700850978/git_cjws0g.svg" />
                    <Paragraph>Git</Paragraph>
                  </ContainerRowSkills2>
                </SwiperSlide>
                <SwiperSlide>
                  <ContainerRowSkills2>
                    <Image src="https://res.cloudinary.com/dgyubvlec/image/upload/v1700850980/php_oenlf2.svg" />
                    <Paragraph>Php</Paragraph>
                  </ContainerRowSkills2>
                </SwiperSlide>
                <SwiperSlide>
                  <ContainerRowSkills2>
                    <Image src="https://res.cloudinary.com/dgyubvlec/image/upload/v1701264530/mysql_adra3u.png" />
                    <Paragraph>MySQL</Paragraph>
                  </ContainerRowSkills2>
                </SwiperSlide>
                <SwiperSlide>
                  <ContainerRowSkills2>
                    <Image src="https://res.cloudinary.com/dgyubvlec/image/upload/v1701264530/docker_ndhri4.png" />
                    <Paragraph>Docker</Paragraph>
                  </ContainerRowSkills2>
                </SwiperSlide>
              </Swiper>
            </ContainerRowSkills>
          </ContainerColumnStyled>
        </ContainerColumn>
      </ContainerRowStyled>
    </SecondContainerSkills>
  );
};

export default Skills;
