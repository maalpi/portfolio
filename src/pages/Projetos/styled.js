import styled from 'styled-components';

export const Container = styled.div`
  height: auto;
  background: #121212;
  padding: 5% 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap; /* Permite que os itens ocupem o espaço verticalmente */
  p {
    margin-top: 3%;
    margin-bottom: 3%;
    color: #000;
    text-align: justify;
    font-family: 'Times New Roman', Times, serif;
  }
  .itens {
    background-color: white;
    border-radius: 5%;
    width: 60%;
    height: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    padding: 3%;

    text {
      color: #000;
    }
  }

  .imagem {
    flex: 0 0 auto; /* Evita que a div se expanda para acomodar o tamanho da imagem */
    width: 250px; /* Defina o tamanho desejado para a imagem */
    height: 250px; /* Defina o tamanho desejado para a imagem */
    overflow: hidden;
  }

  .imagem img {
    width: 100%; /* Garante que a imagem preencha todo o espaço disponível na div */
    height: 100%; /* Mantém a proporção da imagem */
    object-fit: scale-down;
  }
  .slide-item {
    height: 100%;
    width: 100%;
    display: flex;
  }
  .carrossel {
    width: 69%;
    color: #fff;
    justify-content: center;

    h1 {
      padding: 2% 0;
    }
  }

  .textInicial {
    width: 69%;
    color: #fff;
    justify-content: center;
    margin-top: 2%;
    margin-bottom: 8%;

    .texto {
      margin-top: 8%;
      margin-left: 35%;
      color: #fff;
    }

    h1 {
      font-size: 300%;
    }
    p {
      color: #fff;
      font-size: 200%;
      font-weight: 500;
    }

    a {
      text-decoration: none;
      color: white;
      margin-right: 0.5%;
      transition: all 0.4s ease;
      margin-left: 40%;
      float: right;
    }

    a:hover {
      color: #4169e1;
    }
  }
  .svg {
    margin-top: 2%;
    float: left;
    width: 30%;
  }

  .info {
    text-align: center;
    align-items: center;
    justify-content: center;

    text {
      font-family: 'Times New Roman', Times, serif;
      font-weight: 600;
      font-size: 130%;
    }
  }

  /* CSS */
  button {
    appearance: none;
    background-color: #000000;
    border: 2px solid #1a1a1a;
    border-radius: 15px;
    box-sizing: border-box;
    color: #ffffff;
    cursor: pointer;
    display: inline-block;
    font-family:
      Roobert,
      -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      Helvetica,
      Arial,
      sans-serif,
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol';
    font-size: 16px;
    font-weight: 600;
    line-height: normal;
    margin: 0;
    min-height: 30px;
    min-width: 0;
    outline: none;
    padding: 10px 10px;
    text-align: center;
    text-decoration: none;
    transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    width: 45%;
    will-change: transform;
    margin-right: 1%;
  }

  button:disabled {
    pointer-events: none;
  }

  button:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-2px);
  }

  button:active {
    box-shadow: none;
    transform: translateY(0);
  }

  @media (max-width: 1400px) {
    .textInicial {
      flex-direction: column;
      align-items: center;
      flex-wrap: wrap;
      justify-content: center;
    }
    .svg {
      float: inline-block;
      margin-top: 5%;

      width: 40%;
    }

    .texto {
      text-align: left;
      padding-left: 20%;
    }

    .itens {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: white;
      border-radius: 10px;
      width: 80%;
      padding: 20px;
    }
  }

  @media (max-width: 978px) {
    align-items: center;
    justify-content: center;

    .itens {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: white;
      border-radius: 10px;
      width: 60%;
      padding: 20px;
    }
    .carrossel {
      width: 100%;
      margin-left: 0%;
      color: #fff;
    }
    h1 {
      margin-left: 22%;
    }
    .itens {
      margin-left: 22%;
    }

    .imagem {
      flex: 0 0 auto; /* Evita que a div se expanda para acomodar o tamanho da imagem */
      width: 150px; /* Defina o tamanho desejado para a imagem */
      height: 150px; /* Defina o tamanho desejado para a imagem */
      overflow: hidden;
    }

    .textInicial {
      .svg {
        float: none;
        display: block;
        margin-top: 35%;
        width: 100%;
      }

      .texto {
        text-align: center;
        margin-left: -15%;
        width: 120%;
      }
      .titulo {
        margin-left: 0%;
      }
      a {
        float: right;
        margin-left: 0;
      }
    }
  }
`;
