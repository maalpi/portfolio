import React, { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { BsArrowRightSquareFill } from 'react-icons/bs';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Container, ContainerInfo, MenuLink } from './styled';
import 'swiper/css/autoplay';
// Import Swiper styles
import 'swiper/css';

import img from '../../images/img1.jpg';

export default function Menu() {
  const [slidesPerView, setSlidesPerView] = useState(4);
  const data = [
    {
      id: 'React',
      image:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    },
    {
      id: 'Javascript',
      image:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    },
    {
      id: 'Python',
      image:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    },
    {
      id: 'Express',
      image:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    },
    {
      id: 'Express',
      image:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    },
    {
      id: 'Express',
      image:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    },
    {
      id: 'Express',
      image:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    },
    {
      id: 'Express',
      image:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    },
    {
      id: 'Express',
      image:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    },
    {
      id: 'Express',
      image:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    },
    {
      id: 'Express',
      image:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    },
  ];

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 916) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(4);
      }
    }
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Container>
        <div className="textoInicial">
          <h2>Breve descrição</h2>
          <h1>Proeficiencia em React.js, React Native, JavaScript e Python.</h1>
          <MenuLink to="/projetos">
            <BsArrowRightSquareFill
              className="proximaPage"
              color="#fff"
              size={50}
            />
          </MenuLink>
        </div>
        <img src={img} alt="fotoMinhaCriança" />
        <TypeAnimation
          className="anima"
          sequence={[
            // Same substring at the start will only be typed out once, initially
            'Desenvolvedor Front-End',
            2500, // wait 1s before replacing "Mice" with "Hamsters"
            'Desenvolvedor Back-End',
            2500,
            'Desenvolvedor Full-Stack',
            2500,
            'Desenvolvedor Mobile',
            2500,
          ]}
          wrapper="span"
          speed={20}
          repeat={Infinity}
        />
      </Container>
      <ContainerInfo>
        <div className="carrossel">
          <Swiper
            modules={[Autoplay]}
            className="mySwiper"
            spaceBetween={50}
            autoplay
            slidesPerView={slidesPerView}
          >
            {data.map((item) => (
              <SwiperSlide key={item}>
                <div className="itens">
                  <img src={item.image} alt="slide" className="slide-item" />
                  <text>{item.id}</text>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </ContainerInfo>
    </>
  );
}
