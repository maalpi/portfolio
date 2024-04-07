import React, { useState, useEffect } from 'react';
import { Nav, Menu, MenuLink, Hamburger } from './styled';

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
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink href="/">Sobre Mim</MenuLink>
        <MenuLink href="/">Projetos</MenuLink>
      </Menu>
      <h1>MATEUS PIERRE</h1>
      <MenuLink href="/">Fale comigo</MenuLink>
    </Nav>
  );
}
