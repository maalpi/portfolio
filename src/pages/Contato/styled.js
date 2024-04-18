import styled from 'styled-components';

export const ContainerStyled = styled.div`
  padding-top: 7rem;

  width: 100%;
  height: 89%;
  background: #121212;
  color: #fff;

  .contact__form .form-control {
    line-height: 1.5;
    color: #121212;
    background-color: white;
    border-radius: 0 !important;
    border: 1px solid gray;
  }

  .contact__form .form-control:focus {
    border-color: gray; /* Aqui você pode definir a cor que desejar */
  }

  button {
    background-color: white;
    color: #121212;
    transition: all 300ms ease-in-out;
  }

  button:hover {
    background-color: #4169e1;
  }

  @media (max-width: 978px) {
    height: 100%;
    width: 100%;
  }

  @media (max-height: 850px) {
    height: 110%;
    width: 100%;
  }
  @media (max-height: 780px) {
    height: 130%;
    width: 100%;
  }
`;
