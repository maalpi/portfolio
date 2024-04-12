import React from 'react';

import { CiLinkedin } from 'react-icons/ci';
import { SiGmail } from 'react-icons/si';

import { FaSquareGithub } from 'react-icons/fa6';

import { FooterStyle, StyledSVG, LinhaNome } from './styled';

import svg from '../../images/logo.svg';

export default function Footer() {
  return (
    <>
      <FooterStyle>
        <div className="left-content">
          <StyledSVG src={svg} alt="logo" />
        </div>
        <div className="contatos">
          <a
            href="https://www.linkedin.com/in/mateus-pierre-96799218a/"
            alt="link do telegram"
            target="_blank"
            rel="noreferrer"
          >
            <CiLinkedin size={34} />
          </a>

          <a
            href="mailto:pierremateus81@gmail.com"
            alt="link do Github"
            target="_blank"
            rel="noreferrer"
          >
            <SiGmail size={34} />
          </a>

          <a
            href="https://github.com/maalpi"
            alt="link do Github"
            target="_blank"
            rel="noreferrer"
          >
            <FaSquareGithub size={34} />
          </a>
        </div>
      </FooterStyle>
      <LinhaNome>
        <hr />
        <p>© 2024 Mateus Pierre.</p>
      </LinhaNome>
    </>
  );
}
