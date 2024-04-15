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
  @media (max-width: 978px) {
    align-items: center;
    justify-content: center;

    .itens {
      display: flex;
      align-items: center;
      background-color: white;
      border-radius: 10px;
      width: 60%;
      padding: 20px;
    }
    .carrossel {
      width: 100%;
      color: #fff;
    }
    h1 {
      margin-left: 5%;
    }
    .itens {
      margin-left: 4%;
    }

    .imagem {
      flex: 0 0 auto; /* Evita que a div se expanda para acomodar o tamanho da imagem */
      width: 150px; /* Defina o tamanho desejado para a imagem */
      height: 150px; /* Defina o tamanho desejado para a imagem */
      overflow: hidden;
    }
  }
`;

export const ContainerFinal = styled.div`
  width: 100%;
  height: 100%;
  background: #121212;

  p {
    margin-top: 3%;
    margin-bottom: 3%;
    color: #000;
    text-align: justify;
    font-family: 'Times New Roman', Times, serif;
  }
  .itens {
    background-color: white;
    border-radius: 10%;
    width: 60%;
    height: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    padding: 5%;

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
    height: auto; /* Mantém a proporção da imagem */
  }
  .slide-item {
    height: 100%;
    width: 100%;
    display: flex;
  }
  .carrossel {
    margin-left: 5%;
    color: #fff;

    h1 {
      padding: 2% 0;
    }
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
  @media (max-width: 978px) {
    align-items: center;
    justify-content: center;

    .itens {
      display: flex;
      align-items: center;
      background-color: white;
      border-radius: 10px;
      width: 60%;
      padding: 20px;
    }

    h1 {
      margin-left: 17%;
    }
    .itens {
      margin-left: 17%;
    }

    .imagem {
      flex: 0 0 auto; /* Evita que a div se expanda para acomodar o tamanho da imagem */
      width: 150px; /* Defina o tamanho desejado para a imagem */
      height: 150px; /* Defina o tamanho desejado para a imagem */
      overflow: hidden;
    }
  }
`;
