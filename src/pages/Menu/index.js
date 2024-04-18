import React, { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { BsArrowRightSquareFill } from 'react-icons/bs';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { ContainerStyled, ContainerInfo, MenuLink } from './styled';
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
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg',
    },
    {
      id: 'Python',
      image:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-plain-wordmark.svg',
    },
    {
      id: 'Node',
      image:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
    },
    {
      id: 'Express',
      image: 'https://img.icons8.com/ios/100/FFFFFF/express-js.png',
    },
    {
      id: 'Tailwind',
      image:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
    },
    {
      id: 'MySQL',
      image:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
    },
    {
      id: 'Firebase',
      image:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg',
    },
    {
      id: 'HTML 5',
      image:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain.svg',
    },
    {
      id: 'CSS',
      image:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg',
    },
    {
      id: 'Git',
      image:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
    },
    {
      id: 'Insomnia',
      image:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/insomnia/insomnia-original.svg',
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
      {window.innerWidth < 916 ? (
        <ContainerStyled>
          <img src={img} alt="fotoMinhaCriança" />
          <TypeAnimation
            className="anima"
            sequence={[
              // Same substring at the start will only be typed out once, initially
              'Desenvolvedor Front-End',
              2500,
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
          <div className="textoInicial">
            <h2>Breve descrição</h2>
            <h1>
              Proeficiência em React.js, React Native, JavaScript e Python.
            </h1>
            <MenuLink to="/projetos">
              <BsArrowRightSquareFill
                className="proximaPage"
                color="#000"
                size={50}
              />
            </MenuLink>
          </div>
        </ContainerStyled>
      ) : (
        <ContainerStyled>
          <div className="textoInicial">
            <h2>Breve descrição</h2>
            <h1>
              Proeficiência em React.js, React Native, JavaScript e Python.
            </h1>
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
              2500,
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
        </ContainerStyled>
      )}
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
              <SwiperSlide key={item.id}>
                <div className="itens">
                  <img src={item.image} alt="slide" className="slide-item" />
                  <text>{item.id}</text>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="texto">
          <div className="esquerda">
            <img src={img} alt="fotoMinhaCriança" />
          </div>
          <div className="direita">
            <p>
              Olá me chamo Mateus, tenho 22 anos e estou cursando Engenharia de
              Computação. Amo esportes e jogos eletronicos, minha paixão pela
              tecnologia começou por causa de jogos como Pokemon Fire Red,
              Bomberman, Sudden Attack e mais alguns outros.
              <br />
              Minha primeira linguagem de programação foi Python, e meu primeiro
              projeto foi um campo minado ( usando diversas matrizes, condições
              e laços de repetição kkkkkkkkkkkk).
              <br />
              Recentemente tive um artigo publicado e fui bolsista num projeto
              de pesquisa da minha faculdade. E atualmente participo de um
              projeto em parceria com outra faculdade onde estamos desenvolvendo
              um aplicativo móvel sobre uma Reserva Ambiental(você pode acessar
              o beta na pagina de projetos)
              <br />
              Atualmente as tecnologias que mais uso são React(.js e Native),
              Node, Python e por fim MySql e Firebase como banco de dados nos
              meus projetos atuais. Mas tambem tenho experiencia em Java, C++ e
              faço alguns projetinho simples de hardware utilizando Arduino
              <br />
              Estou estudando atualmente TypeScript e Django e me aprofundando
              nas bibliotecas de machine learning do python como a scikit-learn
              e SyBorn.
            </p>
          </div>
        </div>
      </ContainerInfo>
    </>
  );
}
