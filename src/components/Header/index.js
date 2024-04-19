import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Importando o hook useLocation

import {
  Nav,
  Menu,
  MenuLink,
  Hamburger,
  StyledSVG,
  ContainerDiv,
} from './styled';

import svg from '../../images/MATEUS.svg';
import svg1 from '../../images/PIERRE.svg';

export default function Header() {
  const location = useLocation();
  console.log(location.pathname);
  const [isHovered, setIsHovered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Nav
      hovered={isHovered || isScrolled ? 'true' : 'false'} // Aqui, estamos adicionando isScrolled para manter a cor do nav quando a página é rolada para baixo
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Menu isOpen={isOpen}>
        <MenuLink className="link" to="/">
          Sobre Mim
        </MenuLink>
        <MenuLink className="link" to="/projetos">
          {' '}
          Projetos
        </MenuLink>
      </Menu>

      <ContainerDiv>
        <StyledSVG
          src={svg}
          path={location.pathname}
          className="nome"
          hovered={isHovered || isScrolled ? 'true' : 'false'}
        />
        <StyledSVG
          src={svg1}
          className="sobrenome"
          hovered={isHovered || isScrolled ? 'true' : 'false'}
        />
      </ContainerDiv>
      <Menu isOpen={isOpen}>
        <MenuLink className="contato" color="#123543" to="/contato">
          Fale comigo
        </MenuLink>
      </Menu>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
    </Nav>
  );
}
