import styled from "styled-components";
import { media } from "../../styles/media";
import { pxToRem } from "../../utils/pxToRem";

export const ProjectContainer = styled.section`
  padding: ${pxToRem(60)} ${pxToRem(16)} 0 ${pxToRem(16)};

  ${media.tablet`
    padding: ${pxToRem(80)} ${pxToRem(24)};
  `}

  ${media.laptop`
    padding: ${pxToRem(80)} ${pxToRem(38)};
  `}

  ${media.desktop`
    padding: ${pxToRem(100)} ${pxToRem(60)};
  `}
`;

//scroll-margin-top: ${pxToRem(20)};
export const Section = styled.section`
  background: #0b1728;

  ${media.laptop`
    padding: ${pxToRem(32)} ${pxToRem(80)} 0 ${pxToRem(80)};
  `}

  ${media.desktop`
    padding: ${pxToRem(32)} ${pxToRem(80)} 0 ${pxToRem(80)};
  `}
`;

export const Title = styled.h2`
  font-size: ${pxToRem(32)};
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: ${pxToRem(40)};

  ${media.tablet`
    font-size: ${pxToRem(44)};
  `}

  ${media.desktop`
    font-size: ${pxToRem(56)};
    margin-bottom: ${pxToRem(60)};
  `}
`;

//grid-template-columns: repeat(auto-fit, minmax(${pxToRem(260)}, 1fr));
export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${pxToRem(20)};

  ${media.tablet`
    grid-template-columns: repeat(auto-fit, minmax(${pxToRem(260)}, 1fr));
    gap: ${pxToRem(48)};
  `}

  ${media.desktop`
    grid-template-columns: repeat(auto-fit, minmax(${pxToRem(320)}, 1fr));
    gap: ${pxToRem(64)};
  `}
`;

export const Card = styled.div`
  position: relative;
  background: #0f1c2e;
  padding: ${pxToRem(16)};
  border-radius: ${pxToRem(20)} 0 ${pxToRem(20)} 0;
  overflow: hidden;

  border: ${({ featured }) =>
    featured ? "2px solid transparent" : "3px solid rgba(137,137,137,0.97)"};

  box-shadow: ${({ featured }) =>
    featured ? "0 0 20px rgba(0,255,255,.25)" : "0 10px 30px rgba(0,0,0,.6)"};

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-6px);
  }

  ${({ featured }) =>
    featured &&
    `
      &::before {
        content: "";
        position: absolute;
        inset: -2px;
        background: linear-gradient(
          90deg,
          #00ffff,
          #7b61ff,
          #00ffff
        );
        background-size: 300% 300%;
        animation: neonBorder 4s linear infinite;
        z-index: 0;
      }

      &::after {
        content: "";
        position: absolute;
        inset: 2px;
        background: #0f1c2e;
        border-radius: ${pxToRem(18)} 0 ${pxToRem(18)} 0;
        z-index: 1;
      }

      > * {
        position: relative;
        z-index: 2;
      }
    `}

  @keyframes neonBorder {
    0% {
      background-position: 0% 50%;
    }

    100% {
      background-position: 200% 50%;
    }
  }
`;

export const NewTag = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;

  padding: 6px 12px;
  border-radius: 999px;

  background: linear-gradient(90deg, #00ffff, #7b61ff);

  color: white;
  font-size: 12px;
  font-weight: 700;

  z-index: 3;

  box-shadow:
    0 0 10px rgba(0, 255, 255, 0.7),
    0 0 20px rgba(123, 97, 255, 0.5);
`;

export const CardImage = styled.img`
  width: 100%;
  border-radius: ${pxToRem(10)};
  margin-bottom: ${pxToRem(20)};
`;

export const CardTitle = styled.h3`
  color: white;
  font-size: ${pxToRem(18)};
  margin-bottom: ${pxToRem(12)};

  ${media.tablet`
    font-size: ${pxToRem(20)};
  `}
`;

export const CardDescription = styled.p`
  color: #c7d2fe;
  font-size: ${pxToRem(14)};
  line-height: 1.6;
  margin-bottom: ${pxToRem(20)};
`;

export const PaginationTabs = styled.div`
  display: flex;
  justify-content: center;
  gap: ${pxToRem(10)};
  margin-top: ${pxToRem(24)};

  ${media.tablet`
    display: none;
  `}
`;

export const PaginationButton = styled.button`
  border: none;
  padding: ${pxToRem(10)} ${pxToRem(16)};
  border-radius: ${pxToRem(12)};
  background: #1f1f1f;
  color: #fff;
  cursor: pointer;
  font-weight: 600;
  font-size: ${pxToRem(14)};
  transition: all 0.3s ease;

  &:hover {
    background: #00bcd4;
    color: #000;
    transform: translateY(-2px);
  }

  &.active {
    background: #00bcd4;
    color: #000;
  }
`;
