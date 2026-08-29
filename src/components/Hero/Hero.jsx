import { HeroContainer, Paragraph, Title, Name, Role } from "./Hero-Style";
import { Button } from "../Style-Button";

export function Hero() {
  return (
    <HeroContainer id="technologies">
      <Title>
        {" "}
        Olá, eu sou <Name>André Gonzaga</Name>
        <br />
        <Role>Engenheiro de Software</Role>
      </Title>
      <Paragraph>
        Desenvolvedor Full-stack focado em criar aplicações web modernas,
        performáticas e escaláveis utilizando JavaScript, TypeScript, React, Next.js, Node.js e NestJS.
      </Paragraph>
      <Button
        as="a"
        href="https://templateforcurriculumbyandregonzaga.netlify.app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Saiba Mais
      </Button>
    </HeroContainer>
  );
}
