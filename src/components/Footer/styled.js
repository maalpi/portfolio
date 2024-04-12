import styled from 'styled-components';

export const FooterStyle = styled.div`
  background-color: white;
  padding: 1.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  transition: background-color 0.4s ease;
  bottom: 0;
  left: 0;
  width: 100%;
  border: 1rem;
  z-index: 1000;

  .left-content {
    display: flex;
    align-items: center;
  }
  .contatos {
    display: flex;
    width: 100%;
    justify-content: flex-end;
    flex-direction: row;
  }

  a {
    text-decoration: none;
    color: black;
    margin-right: 0.5%;
    transition: all 0.4s ease;
  }

  a:hover {
    color: #4169e1;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .contatos {
      width: auto;
    }

    .left-content {
      justify-content: center;
      align-items: center;
      margin-bottom: 3%;
    }
  }
`;

export const StyledSVG = styled.img`
  /* filter: ${(props) => (props.hovered ? 'invert(0)' : 'invert(1)')}; */
  filter: invert(1);
  width: 52%; /* Defina o tamanho desejado */
  height: auto; /* Mantenha a proporção de aspecto */

  flex-direction: row-reverse;
`;

export const LinhaNome = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  hr {
    width: 70%;
    height: 1px;
    background-color: black;
    margin: -1% 0 1% 0;
  }

  p {
    margin-bottom: 1%;
  }
`;
