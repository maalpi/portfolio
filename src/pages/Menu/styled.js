import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ContainerStyled = styled.div`
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
  @media (max-width: 1025px) {
    .textoInicial {
      margin-left: 48%;
      margin-bottom: 13%;
      z-index: 1;
    }

    .anima {
      max-width: 350px;
      margin-right: 55%;
    }

    img {
      margin-top: 30%;
      width: 30%;
      transform: rotate(0deg);
    }
  }
  @media (max-width: 918px) {
    background: white;
    flex-direction: column;
    align-items: center;
    padding-top: 10%;

    img {
      max-width: 300px;
      width: 100%;
      transform: rotate(0deg);
      float: top;
      position: static; /* Removido posicionamento absoluto */
      margin: 0; /* Removida margem */
      box-shadow:
        0 4px 8px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    .anima {
      max-width: 300px;
      font-weight: 500;
      font-size: 300%;
      display: 'inline-block';
      margin-right: 0%;
      position: relative;
      text-align: center;
    }

    .textoInicial {
      margin-bottom: 0%;
      margin-left: 3%;
      padding-top: 12%;
    }
    h2,
    h1 {
      color: black;
      text-align: left;
    }

    h2 {
      font-weight: 800;
    }

    .proximaPage {
      float: right;
      margin-right: 10%;
    }
  }

  @media (max-width: 378px) {
    margin-top: 40%;
  }
`;

export const MenuLink = styled(Link)`
  float: left;
  padding: 0 20px 0 0;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s ease-in;
  font-size: 0.9rem;
  color: black;

  &:hover {
    color: #7b7fda;
  }

  /* CSS */
  .button-12 {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 6px 14px;
    font-family: -apple-system, BlinkMacSystemFont, 'Roboto', sans-serif;
    border-radius: 6px;
    border: none;

    background: #121212;
    box-shadow:
      0px 0.5px 1px rgba(0, 0, 0, 0.1),
      inset 0px 0.5px 0.5px rgba(255, 255, 255, 0.5),
      0px 0px 0px 0.5px rgba(0, 0, 0, 0.12);
    color: #dfdedf;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
  }

  .button-12:focus {
    box-shadow:
      inset 0px 0.8px 0px -0.25px rgba(255, 255, 255, 0.2),
      0px 0.5px 1px rgba(0, 0, 0, 0.1),
      0px 0px 0px 3.5px rgba(58, 108, 217, 0.5);
    outline: 0;
  }

  @media (max-width: 1024px) {
    float: left;
  }
  @media (max-width: 975px) {
    float: right;
  }
  @media (max-width: 378px) {
    color: black;
    float: right;

    .button-12 {
      margin-bottom: 100px;
    }
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

  @media (max-width: 1025px) {
    .carrossel {
      margin-top: 2%;
      width: 66%;
    }
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

    h1 {
      position: absolute;
      margin-left: 50%;
      margin-bottom: 68vh;
      font-family: 'Times New Roman', Times, serif;
      font-size: 50px;
    }
    @media (max-width: 1025px) {
      h1 {
        margin-bottom: 52%;
      }
    }
    @media (max-width: 1000px) {
      flex-direction: column;
      margin-top: 30%;
      .texto {
        padding-top: 10px;
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
        max-height: 500px;
        max-width: 300px;
        width: 100%; /* Definir a largura máxima da imagem */
        height: 100%; /* Permitir que a altura seja ajustada automaticamente */
        border-radius: 20%;
        z-index: 0;
        padding: 10px 0 30px 0;
      }

      h1 {
        text-align: center;
        font-size: 250%;
        position: relative;
        margin-left: 0%;
        margin-bottom: 0%;
      }
      .direita {
        position: relative;
        margin-left: 0%;
        padding-top: 10px;
        width: 300px;
      }
    }
  }
`;
