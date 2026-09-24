import styled from "styled-components";
import { Header, Hero, Projects, About, Career, Footer } from "../components";

const HeroSection = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
`;

export function Portifolio() {
  return (
    <>
      <HeroSection>
        <Header />
        <Hero />
      </HeroSection>

      <Projects />
      <About />
      <Career />
      <Footer />
    </>
  );
}
