import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

export const Nav = styled.div`
  background-color: ${(props) =>
    props.hovered === 'true' ? 'white' : 'transparent'};
  padding: 2.3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: background-color 0.4s ease;
  position: fixed;
  flex-wrap: wrap;
  top: 0;
  left: 0;
  width: 100%;
  border: 1rem;
  z-index: 1000;
  border-bottom: ${(props) =>
    props.hovered === 'true' ? '1px solid #b7b8c0' : '1px solid transparent'};

  .link {
    ${(props) =>
      props.hovered === 'true'
        ? 'color: #121212'
        : useLocation().pathname === '/'
          ? 'color: #121212'
          : 'color: #fff'};
  }

  .contato {
    color: ${(props) => (props.hovered === 'true' ? 'black' : 'white')};
  }

  .nome {
    margin-right: 1%;
    ${(props) =>
      props.hovered === 'true'
        ? 'filter: invert(0)'
        : useLocation().pathname === '/'
          ? 'filter: invert(0)'
          : 'filter: invert(1)'};
  }

  .sobrenome {
    margin-left: 1%;
    filter: ${(props) =>
      props.hovered === 'true' ? 'invert(1)' : 'invert(0)'};
  }
  @media (max-width: 978px) {
    align-items: center;
    justify-content: center;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 2.2rem;

    .contato {
      color: #000;
    }

    .sobrenome {
      ${(props) =>
        props.hovered === 'true'
          ? 'filter: invert(1)'
          : useLocation().pathname === '/'
            ? 'filter: invert(1)'
            : 'filter: invert(0)'};
    }

    .link {
      color: #000;
    }

    .nome {
      ${(props) =>
        props.hovered === 'true'
          ? 'filter: invert(1)'
          : useLocation().pathname === '/'
            ? 'filter: invert(1)'
            : 'filter: invert(0)'};
    }
    .logo {
      padding-left: 18%;
    }
  }
`;
export const ContainerDiv = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-right: 4%;

  @media (min-width: 1820px) {
    margin-right: 3.7%;
  }
  @media (max-width: 1600px) {
    margin-right: 4.7%;
  }
  @media (max-width: 1025px) {
    margin-right: 6.7%;
  }
  @media (max-width: 975px) {
    margin-left: 34.2%;
  }
`;

export const StyledSVG = styled.img`
  filter: invert(1);
  width: 31%; /* Defina o tamanho desejado */
  height: auto; /* Mantenha a proporção de aspecto */

  @media (max-width: 978px) {
    width: 40%;
  }
`;

export const MenuLink = styled(Link)`
  padding: 0;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s ease-in;
  font-size: 0.9rem;
  margin: 0 10px 0;

  &:hover {
    color: #7b7fda;
  }
  @media (max-width: 975px) {
    color: #000;
    text-align: right;
    font-size: 1.1rem;
    margin: 20px -0% 0px 0px;
  }
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 975px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? '1200px' : '0')};
    transition: max-height 0.3s ease-in;
    width: 400%;
    height: 100%;
  }
`;

export const Hamburger = styled.div`
  display: none;
  margin-left: 98%;
  margin-top: -6.2%;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 2px;
    width: 25px;
    ${(props) =>
      props.hovered === 'true'
        ? 'background: #121212'
        : useLocation().pathname === '/'
          ? 'background: #121212'
          : 'background: #fff'};
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 975px) {
    display: flex;
  }
`;
