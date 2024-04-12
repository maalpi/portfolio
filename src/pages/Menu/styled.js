import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Cutive+Mono&display=swap');
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, white 50%, black 50%);
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    color: #fff;
    font-family: 'Times New Roman', Times, serif;
  }
  h1 {
    max-width: 450px; /* Largura máxima */
    margin: 20px auto; /* Margem para centralizar o parágrafo */
    line-height: 1.6; /* Espaçamento entre linhas */
    word-wrap: break-word; /* Quebra de linha */
    text-align: justify;
    color: #fff;
    font-size: 220%;
    font-family: 'Times New Roman', Times, serif;
  }

  img {
    position: absolute;
    margin: 20% 0 0 63%;
    width: 25%;
    height: auto;
    border-radius: 20%;
    transform: rotate(10deg);
    z-index: 0;
  }
  .textoInicial {
    margin-left: 40%;
    margin-bottom: 13%;
    z-index: 1;
  }

  .anima {
    font-size: 400%;
    display: 'inline-block';
    position: absolute;
    margin-right: 50%;
  }

  @media (max-width: 768px) {
    background: white;
    .anima {
      font-size: 150%;
      display: 'inline-block';
      position: absolute;
      margin-right: 0%;
    }
  }
`;

export const MenuLink = styled(Link)`
  padding: 0;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s ease-in;
  font-size: 0.9rem;
  color: #fff;

  &:hover {
    color: #7b7fda;
  }
`;

export const ContainerInfo = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Cutive+Mono&display=swap');
  width: 100%;
  height: 100%;
  background: black;
  display: flex;
  justify-content: center;

  .slide-item {
    width: 30%;
    height: auto;
    object-fit: cover;
  }
  .carrossel {
    position: absolute;
    margin-top: 5%;
    width: 55%;
    height: auto;
    background: transparent;
    align-items: center;
    justify-content: center;
  }

  .itens {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
  }

  .itens text {
    font-size: 200%;
    color: white;
  }

  .texto {
    max-width: 500px; /* Largura máxima */
    margin: 20px auto; /* Margem para centralizar o parágrafo */
    margin-top: 12%;
    color: white;

    p {
      text-align: justify;
      font-size: 130%;
      font-weight: 500;
      line-height: 1.4;
      font-family: 'Times New Roman', Times, serif;
    }

    @media (max-width: 768px) {
      max-width: 300px;
      margin-top: 30%;
      .texto {
        font-size: 100%;
        display: 'inline-block';
        position: absolute;
        padding: 0 30px;
        text-align: center;
      }
    }
  }
`;
