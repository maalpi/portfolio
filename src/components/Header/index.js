import React, { useState, useEffect } from 'react';
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
      hovered={isHovered || isScrolled} // Aqui, estamos adicionando isScrolled para manter a cor do nav quando a página é rolada para baixo
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
        <StyledSVG src={svg} hovered={isHovered || isScrolled} />
        <StyledSVG
          src={svg1}
          className="sobrenome"
          hovered={isHovered || isScrolled}
        />
      </ContainerDiv>
      <Menu isOpen={isOpen}>
        <MenuLink className="contato" to="/contato">
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
