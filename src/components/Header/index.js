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
import svg3 from '../../images/nomeBlack.svg';

export default function Header() {
  const location = useLocation();

  const [isHovered, setIsHovered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isPageOne, setPageOne] = useState(true);

  useEffect(() => {
    if (location.pathname === '/') {
      setPageOne(true);
    } else {
      setPageOne(false);
    }

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

  return window.innerWidth > 918 ? (
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
          src={svg3}
          pathTest={isPageOne ? 'true' : 'false'}
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
  ) : (
    <Nav
      hovered={isHovered || isScrolled ? 'true' : 'false'} // Aqui, estamos adicionando isScrolled para manter a cor do nav quando a página é rolada para baixo
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="logo">
        <StyledSVG
          src={svg}
          pathTest={isPageOne ? 'true' : 'false'}
          className="nome"
          hovered={isHovered || isScrolled ? 'true' : 'false'}
        />
        <StyledSVG
          src={svg1}
          className="sobrenome"
          hovered={isHovered || isScrolled ? 'true' : 'false'}
        />
      </div>

      <Hamburger
        hovered={isHovered || isScrolled ? 'true' : 'false'}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <MenuLink className="link" to="/">
          Sobre Mim
        </MenuLink>
        <MenuLink className="link" to="/projetos">
          {' '}
          Projetos
        </MenuLink>
        <MenuLink className="contato" to="/contato">
          Fale comigo
        </MenuLink>
      </Menu>
    </Nav>
  );
}
