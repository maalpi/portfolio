import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
    color: ${(props) => (props.hovered === 'true' ? 'black' : 'black')};
  }
  .contato {
    color: ${(props) => (props.hovered === 'true' ? 'black' : 'white')};
  }

  .nome {
    filter: ${(props) =>
      props.hovered === 'true' ? 'invert(1)' : 'invert(0)'};
    filter: ${(props) =>
      props.path === '/' ? 'invert(0)' : console.log(props.path)};
  }

  .sobrenome {
    filter: ${(props) =>
      props.hovered === 'true' ? 'invert(1)' : 'invert(0)'};
  }
  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;

    .sobrenome {
      filter: invert(1);
    }
  }
`;
export const ContainerDiv = styled.div`
  margin-left: 5.5%;

  @media (max-width: 768px) {
    margin-left: 34.2%;
  }
`;

export const StyledSVG = styled.img`
  /* filter: ${(props) => (props.hovered ? 'invert(0)' : 'invert(1)')}; */
  filter: invert(1);
  width: 31%; /* Defina o tamanho desejado */
  height: auto; /* Mantenha a proporção de aspecto */
  margin-right: 2%;
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
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? '300px' : '0')};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;

export const Hamburger = styled.div`
  display: none;

  flex-direction: column;
  cursor: pointer;

  span {
    height: 2px;
    width: 25px;
    background: #7b7fda;
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;
