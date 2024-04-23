import React, { useState } from 'react';

import emailjs from 'emailjs-com';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FaSquareGithub } from 'react-icons/fa6';
import { CiLinkedin } from 'react-icons/ci';
import { ContainerStyled } from './styled';

export default function Contato() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);
  const sendEmail = (e) => {
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          setStateMessage(`Mensagem enviada! ${result}`);
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        },
        (error) => {
          setStateMessage(`Error: ${error}`);
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        }
      );

    // Clears the form after sending the email
    e.target.reset();
  };
  return (
    <ContainerStyled>
      <Container>
        <Row className="mb-5 mt-3">
          <Col lg="8">
            <h1 className="display-3 mb-4 ">Envie uma mensagem aqui.</h1>
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg="3" className="mb-5">
            <h3 className="py_4">
              Siga-me nas redes sociais ou envie um email.
            </h3>
            <address>
              <strong>Email: pierremateus81@gmail.com</strong>
              <br />
              <br />
              <strong>Git e Linkedin:</strong>
            </address>
            <a
              href="https://github.com/maalpi"
              alt="link do Github"
              target="_blank"
              rel="noreferrer"
            >
              <FaSquareGithub size={72} color="#fff" />
            </a>
            <a
              href="https://www.linkedin.com/in/mateus-pierre-96799218a/"
              alt="link do Linkedin"
              target="_blank"
              rel="noreferrer"
            >
              <CiLinkedin size={72} color="#fff" />
            </a>
          </Col>
          <Col lg="7" className="d-flex align-items-center mb-5">
            <form className="contact__form w-100" onSubmit={sendEmail}>
              <Row>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control"
                    id="name"
                    type="text"
                    name="to_name"
                    placeholder="Nome"
                  />
                </Col>

                <Col lg="6" className="form-group">
                  <input
                    className="form-control rounded-0"
                    id="email"
                    type="email"
                    name="from_name"
                    placeholder="Email"
                  />
                </Col>
              </Row>
              <br />
              <textarea
                className="form-control rounded-0"
                id="message"
                name="message"
                placeholder="Mensagem"
                rows="5"
              />
              <br />
              <Row>
                <Col lg="12" className="form-group">
                  <button
                    className="btn ac_btn"
                    type="submit"
                    value="Send"
                    disabled={isSubmitting}
                  >
                    Enviar{' '}
                  </button>
                  {stateMessage && <p>{stateMessage}</p>}
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </ContainerStyled>
  );
}
