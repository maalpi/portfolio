import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Cutive+Mono&display=swap');
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, white 50%, #121212 50%);
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
  background: #121212;
  display: flex;
  justify-content: center;

  .slide-item {
    margin-right: 1%;
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
    background: transparent;
    display: flex;
    align-items: center;
    margin-top: 12%;
    color: white;
    border-radius: 2%;
    flex-direction: row;

    .direita {
      position: absolute;
      margin-left: 50%;
      max-width: 450px;
      height: 450px;
      overflow-y: auto;
      scrollbar-width: thin;
      scrollbar-color: #888 transparent;

      .texto::-webkit-scrollbar-track {
        background-color: transparent;
      }

      .texto::-webkit-scrollbar-thumb {
        background-color: #888;
        border-radius: 10px;
      }
    }

    p {
      text-align: justify;
      font-size: 140%;
      font-weight: 500;
      line-height: 1.6;
      font-family: 'Times New Roman', Times, serif;
    }

    img {
      width: auto; /* Definir a largura da imagem como automática */
      height: auto;
      max-height: 35%; /* Definir a altura máxima da imagem */
      max-width: 35%;
      height: auto;
      border-radius: 20%;
      z-index: 0;
    }

    @media (max-width: 978px) {
      flex-direction: column;
      margin-top: 30%;
      .texto {
        width: 400px;
        display: flex;
        flex-direction: column; /* Alterar para coluna para posicionar a imagem acima e o texto abaixo */
        align-items: center; /* Alinhar itens no centro */
        margin-top: 30%;
        font-size: 100%; /* Redefinir o tamanho da fonte se necessário */
        text-align: center; /* Centralizar o texto */
      }
      .esquerda {
        width: 100%; /* Garantir que a imagem ocupe toda a largura */
        text-align: center; /* Centralizar a imagem */
      }
      img {
        max-width: 100%; /* Definir a largura máxima da imagem */
        height: auto; /* Permitir que a altura seja ajustada automaticamente */
        border-radius: 20%;
        z-index: 0;
      }

      .direita {
        position: relative;
        margin-left: 0;
      }
    }
  }
`;
