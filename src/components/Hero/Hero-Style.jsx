import styled from "styled-components";
import { pxToRem } from "../../utils/pxToRem";
import { media } from "../../styles/media";
import heroBg from "../../assets/heroBg.png";

export const HeroContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: ${pxToRem(32)};

  background-image: url(${heroBg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  padding: ${pxToRem(120)} ${pxToRem(16)};

  ${media.tablet`
    padding: ${pxToRem(140)} ${pxToRem(40)};
  `}

  ${media.desktop`
    padding: 30vh ${pxToRem(60)};
  `}
`;

export const Title = styled.h1`
  font-size: ${pxToRem(34)};
  font-weight: 700;
  line-height: 1.2;

  ${media.tablet`
    font-size: ${pxToRem(44)};
  `}

  ${media.desktop`
    font-size: ${pxToRem(56)};
  `}
`;

export const Name = styled.span`
  display: inline-block;
  background: linear-gradient(90deg, #7b61ff, #2dd4bf);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  ${media.tablet`
    display: inline;
  `}

  ${media.desktop`
    font-size: inline;
  `}
`;

export const Role = styled.span`
  display: block;
  font-size: ${pxToRem(20)};
  font-weight: 500;
  color: #9aa4b2;
  margin-top: ${pxToRem(8)};

  ${media.tablet`
    font-size: ${pxToRem(24)};
  `}

  ${media.desktop`
    font-size: ${pxToRem(28)};
  `}
`;

export const Paragraph = styled.p`
  font-size: ${pxToRem(16)};
  max-width: 45ch;
  width: 100%;
  line-height: 1.6;

  ${media.tablet`
    font-size: ${pxToRem(18)};
    margin-left: ${pxToRem(32)};
    `}

  ${media.desktop`
      font-size: ${pxToRem(20)};
      margin-left: ${pxToRem(32)};
  `}
`;
