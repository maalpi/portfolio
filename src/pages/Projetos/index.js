import React, { useEffect, useState } from 'react';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaSquareGithub } from 'react-icons/fa6';

import projAmbiental from '../../images/logooReserva.svg';
import bleConect from '../../images/Ble.svg';
import portfolio from '../../images/portfolioWeb.png';
import escola from '../../images/escola.png';
import landingPage from '../../images/landingPag.png';
import imc from '../../images/imc.png';
import darkwhite from '../../images/darkwhite.png';
import bancoProjeto from '../../images/bancoProj.png';
import campoMinado from '../../images/campoMinado.png';
import proj from '../../images/proj.svg';

import { Container } from './styled';
import 'swiper/css/autoplay';
// Import Swiper styles
import 'swiper/css';

export default function Projetos() {
  const [slidesPerView, setSlidesPerView] = useState(4);
  const [spacePerView, setSpacePerView] = useState(-200);
  const data = [
    {
      id: 'Reserva Ambiental',
      image: projAmbiental,
      video: 'https://www.youtube.com/watch?v=WRFsCqOO2Zs',
      texto:
        'Projeto sobre a reserva ecologica Olho Dágua das Onças em parceria com a UEPB.',
      download:
        'https://play.google.com/store/apps/details?id=com.projetoambiental',
    },
    {
      id: 'BLE Bluetooth',
      image: bleConect,
      video: 'https://www.youtube.com/watch?v=WXUR6n89Z58',
      texto:
        'Aplicativo para encontrar dispositivos BLE e enviar um token de segurança.',
      projeto: 'https://github.com/jhonatangopereira/Secure-Access-Control',
    },
    {
      id: 'Receitas GPT',
      image:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
      video: 'https://www.youtube.com/watch?v=_thNb8ocdCU',
      texto:
        'Aplicativo que gera receitas de acordo com os ingredientes adicionados usando a OpenAI.',
      projeto:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    },
  ];

  const dataWeb = [
    {
      id: 'Portfolio',
      image: portfolio,
      video:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
      texto: 'Projeto do meu portfolio que você está acessando agora :)',
      download:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    },
    {
      id: 'Gerenciamento Escolar',
      image: escola,
      video: 'https://youtu.be/KJLpwTA741c',
      texto:
        'Site para o gerenciamento de alunos e administradores de uma escola.',
      projeto: 'https://github.com/maalpi/Projeto-Escola',
    },
    {
      id: 'Website Reserva',
      image: 'https://live.staticflickr.com/65535/53438228518_938948b2da_h.jpg',
      video: 'https://www.youtube.com/watch?v=wjrJtXeAp7U',
      texto: 'Website da reserva ambiental olho Dágua das onças.',
      projeto: 'https://github.com/maalpi/Projeto-Web?tab=readme-ov-file',
    },
    {
      id: 'Landing Page',
      image: landingPage,
      acesso: 'https://landing-page-mapeal.netlify.app/',
      texto: 'Minha Primeira Landing Page com informaões sobre músicas.',
      projeto: 'https://github.com/maalpi/Landing-Page',
    },
    {
      id: 'IMC',
      image: imc,
      acesso: 'https://imc-page.netlify.app/',
      texto: 'Site para calcular IMC e gerar um grafico mostrando os dados.',
      projeto: 'https://github.com/maalpi/imc',
    },
    {
      id: 'Dark/White Theme',
      image: darkwhite,
      acesso: 'https://navdarkwhite.netlify.app/',
      texto:
        'Minha primeira experiencia com web, apenas um projeto pra mudar a cor do site.',
      projeto: 'https://github.com/maalpi/Nav_and_Dark_Theme/tree/main',
    },
  ];

  const dataPython = [
    {
      id: 'Gerenciamento de Loja',
      image: projAmbiental,
      video:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
      texto:
        'Projeto utilizando padrões de projetos na linguagem Python para o gerenciamento de uma loja.',
      projeto: 'https://github.com/maalpi/Store-Management-System/tree/main',
    },
    {
      id: 'Banco',
      image: bancoProjeto,
      acesso: 'https://replit.com/@maalpi/ProjetoPOO#Contas/ContaComum.cpp',
      texto:
        'Projeto em C++ que simula o sistema de um banco, desenvolvido com a missão de aprender POO',
      projeto: 'https://github.com/maalpi/Projeto_Banco',
    },
    {
      id: 'Bot Discord',
      image:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
      video:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
      texto:
        'Projeto em JS de um Bot no discord que pega dados de um determinado jogador a partir do nick ',
      projeto: 'https://github.com/maalpi/Bot_Discord_LoL',
    },
    {
      id: 'Campo Minado',
      image: campoMinado,
      acesso: 'https://replit.com/@maalpi/Campo-MinadoMinesweeper',
      texto:
        'Meu primeiro projetinho, um jogo campo minado desenvolvido utilizando apenas Python e mais nada',
      projeto: 'https://github.com/maalpi/Project-Algoritms-Minesweeper',
    },
  ];

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 916) {
        setSlidesPerView(1);
        setSpacePerView(50);
      } else if (window.innerWidth < 1645) {
        setSlidesPerView(2);
        setSpacePerView(4);
      } else {
        setSlidesPerView(3);
        setSpacePerView(-200);
      }
    }
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Container>
      <div className="textInicial">
        <img src={proj} alt="slide" className="svg" />
        <div className="texto">
          <h1 className="titulo">Conheça alguns dos meus projetos</h1>
          <p>
            Abaixo você encontrará os links e videos de alguns dos meus
            projetos. Mas você tambem pode me seguir no github pra ficar por
            dentro de novos projetos.
          </p>
          <a
            href="https://github.com/maalpi"
            alt="link do Github"
            target="_blank"
            rel="noreferrer"
          >
            <FaSquareGithub size={54} />
          </a>
        </div>
      </div>
      <div className="carrossel">
        <h1>Projetos Android</h1>
        <Swiper
          modules={[Autoplay]}
          className="mySwiper"
          spaceBetween={spacePerView}
          autoplay
          slidesPerView={slidesPerView}
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="itens">
                <div className="imagem">
                  <img src={item.image} alt="slide" className="slide-item" />
                </div>
                <div className="info">
                  <text>{item.id}</text>
                  <p>{item.texto}</p>
                  <div className="botoes">
                    <button
                      type="button"
                      onClick={() =>
                        window.open(
                          item.video ? item.video : item.acesso,
                          '_blank'
                        )
                      }
                    >
                      {item.video ? 'Video' : 'Acessar'}
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        window.open(
                          item.download ? item.download : item.projeto,
                          '_blank'
                        )
                      }
                    >
                      {item.download ? 'Download' : 'Projeto'}
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="carrossel">
        <h1>Projetos Web</h1>
        <Swiper
          modules={[Autoplay]}
          className="mySwiper"
          spaceBetween={spacePerView}
          autoplay
          slidesPerView={slidesPerView}
        >
          {dataWeb.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="itens">
                <div className="imagem">
                  <img src={item.image} alt="slide" className="slide-item" />
                </div>
                <div className="info">
                  <text>{item.id}</text>
                  <p>{item.texto}</p>
                  <div className="botoes">
                    <button
                      type="button"
                      onClick={() =>
                        window.open(
                          item.video ? item.video : item.acesso,
                          '_blank'
                        )
                      }
                    >
                      {item.video ? 'Video' : 'Acessar'}
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        window.open(
                          item.download ? item.download : item.projeto,
                          '_blank'
                        )
                      }
                    >
                      {item.download ? 'Download' : 'Projeto'}
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="carrossel">
        <h1>Projetos variados (Python, C++ e JS) </h1>
        <Swiper
          modules={[Autoplay]}
          className="mySwiper"
          spaceBetween={spacePerView}
          autoplay
          slidesPerView={slidesPerView}
        >
          {dataPython.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="itens">
                <div className="imagem">
                  <img src={item.image} alt="slide" className="slide-item" />
                </div>
                <div className="info">
                  <text>{item.id}</text>
                  <p>{item.texto}</p>
                  <div className="botoes">
                    <button
                      type="button"
                      onClick={() =>
                        window.open(
                          item.video ? item.video : item.acesso,
                          '_blank'
                        )
                      }
                    >
                      {item.video ? 'Video' : 'Acessar'}
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        window.open(
                          item.download ? item.download : item.projeto,
                          '_blank'
                        )
                      }
                    >
                      {item.download ? 'Download' : 'Projeto'}
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  );
}
