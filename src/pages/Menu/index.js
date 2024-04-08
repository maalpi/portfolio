import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { BsArrowRightSquareFill } from 'react-icons/bs';
import { Container, MenuLink } from './styled';

import img from '../../images/img1.jpg';

export default function Menu() {
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
      <Container>
        <h1>menu</h1>
        <small>Tela do menu inicial</small>
      </Container>
    </>
  );
}
