import styled from "styled-components";
import { pxToRem } from "../utils/pxToRem";
import { media } from "./media";

export const HamburgerButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: ${pxToRem(42)};
  height: ${pxToRem(42)};

  padding: ${pxToRem(9)};

  background: rgba(11, 23, 40, 0.85);
  border: 1px solid rgba(123, 97, 255, 0.25);
  border-radius: ${pxToRem(10)};

  cursor: pointer;

  span {
    width: 100%;
    height: 3px;

    background: linear-gradient(90deg, #7b61ff, #2dd4bf);

    border-radius: 2px;
  }

  ${media.desktop`
    display: none;
  `}
`;

export const MobileMenu = styled.nav`
  position: fixed;
  top: 0;
  right: 0;

  z-index: 1001;

  height: 100vh;
  width: 75vw;

  background: #0b1728;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  padding-top: ${pxToRem(80)};

  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};

  transition: transform 0.3s ease;

  box-shadow: -10px 0 30px rgba(0, 0, 0, 0.5);

  gap: ${pxToRem(32)};

  a {
    font-size: ${pxToRem(24)};
    color: white;
    text-decoration: none;
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;

  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);

  opacity: ${({ open }) => (open ? 1 : 0)};
  visibility: ${({ open }) => (open ? "visible" : "hidden")};

  transition: 0.3s;
`;
