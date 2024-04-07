import styled from 'styled-components';

export const Nav = styled.div`
  background-color: ${(props) => (props.hovered ? 'black' : 'transparent')};
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

  a {
    color: ${(props) => (props.hovered ? 'white' : 'black')};
    transition: background-color 0.4s ease;
    margin: 0 10px 0;
    font-weight: bold;
    font-size: 0.9rem;
  }

  h1 {
    color: ${(props) => (props.hovered ? 'white' : 'black')};
    font-size: 2.3rem;
  }
`;

export const MenuLink = styled.a`
  padding: 0;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s ease-in;
  font-size: 0.9rem;

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
