import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

import { HeroContainer, Paragraph, Title, Name, Role } from "./Hero-Style";

import { Button } from "../Style-Button";

gsap.registerPlugin(SplitText);

export function Hero() {
  const heroRef = useRef(null);

  const greetingRef = useRef(null);
  const nameRef = useRef(null);
  const roleRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      /*
       * ==========================================
       * SPLIT TEXT
       * ==========================================
       */

      // "Olá, eu sou" — letra por letra
      const greetingSplit = new SplitText(greetingRef.current, {
        type: "chars",
      });

      // "Engenheiro de Software" — palavra por palavra
      const roleSplit = new SplitText(roleRef.current, {
        type: "words",
      });

      /*
       * PARÁGRAFO
       *
       * O parágrafo inteiro é dividido em palavras.
       *
       * Isso é importante porque o navegador continua
       * responsável pela quebra natural das linhas.
       *
       * Assim "utilizando JavaScript" continua sendo
       * um fluxo normal do texto.
       */
      const paragraphSplit = new SplitText(paragraphRef.current, {
        type: "words",
      });

      /*
       * ==========================================
       * IDENTIFICAÇÃO DAS PALAVRAS
       * ==========================================
       */

      const words = paragraphSplit.words;

      /*
       * "JavaScript" marca o início da parte de
       * tecnologias.
       */
      const skillsStartIndex = words.findIndex((word) =>
        word.textContent.trim().startsWith("JavaScript"),
      );

      /*
       * Caso JavaScript seja encontrado:
       *
       * descriptionWords = tudo antes de JavaScript
       * skillsWords      = JavaScript em diante
       */
      const descriptionWords =
        skillsStartIndex >= 0 ? words.slice(0, skillsStartIndex) : words;

      const skillsWords =
        skillsStartIndex >= 0 ? words.slice(skillsStartIndex) : [];

      /*
       * ==========================================
       * AGRUPAMENTO DAS LINHAS
       * ==========================================
       *
       * O SplitText divide o texto em palavras,
       * mas NÃO altera a quebra visual das linhas.
       *
       * Nós usamos a posição vertical real de cada
       * palavra para descobrir quais palavras estão
       * na mesma linha.
       */

      const linesMap = new Map();

      descriptionWords.forEach((word) => {
        const top = Math.round(word.getBoundingClientRect().top);

        if (!linesMap.has(top)) {
          linesMap.set(top, []);
        }

        linesMap.get(top).push(word);
      });

      /*
       * Converte o Map em array ordenado.
       *
       * Cada item representa uma linha.
       */
      const descriptionLines = Array.from(linesMap.entries())
        .sort(([topA], [topB]) => topA - topB)
        .map(([, lineWords]) => lineWords);

      /*
       * ==========================================
       * ESTADO INICIAL
       * ==========================================
       */

      // Olá, eu sou
      gsap.set(greetingSplit.chars, {
        opacity: 0,
        y: 20,
        filter: "blur(6px)",
      });

      /*
       * André Gonzaga
       *
       * Não usamos SplitText para preservar
       * completamente o gradiente.
       */
      gsap.set(nameRef.current, {
        opacity: 0,
        y: 25,
        scale: 0.96,
        filter: "blur(8px)",
      });

      // Engenheiro de Software
      gsap.set(roleSplit.words, {
        opacity: 0,
        y: 25,
        filter: "blur(6px)",
      });

      /*
       * Descrição
       *
       * Todas as palavras começam invisíveis.
       */
      gsap.set(descriptionWords, {
        opacity: 0,
        y: 15,
        filter: "blur(5px)",
      });

      /*
       * Skills
       *
       * JavaScript, TypeScript, React...
       */
      gsap.set(skillsWords, {
        opacity: 0,
        y: 10,
      });

      // Botão
      gsap.set(buttonRef.current, {
        opacity: 0,
        y: 20,
      });

      /*
       * ==========================================
       * TIMELINE
       * ==========================================
       */

      const timeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      /*
       * ==========================================
       * OLÁ, EU SOU
       * ==========================================
       *
       * Letra por letra
       */

      timeline.to(greetingSplit.chars, {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.4,
        stagger: 0.055,
        ease: "power3.out",
      });

      /*
       * ==========================================
       * ANDRÉ GONZAGA
       * ==========================================
       *
       * Unidade única.
       *
       * O gradiente permanece contínuo.
       */

      timeline.to(
        nameRef.current,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 1.5,
          ease: "power3.out",
        },
        "-=0.25",
      );

      /*
       * ==========================================
       * ENGENHEIRO DE SOFTWARE
       * ==========================================
       *
       * Palavra por palavra.
       */

      timeline.to(
        roleSplit.words,
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.55,
          stagger: 0.08,
        },
        "-=0.35",
      );

      /*
       * ==========================================
       * DESCRIÇÃO
       * ==========================================
       *
       * Linha por linha.
       *
       * Cada linha contém suas próprias palavras,
       * mas visualmente continua sendo um único
       * parágrafo.
       */

      descriptionLines.forEach((lineWords, index) => {
        timeline.to(
          lineWords,
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.8,
            stagger: 0.025,
            ease: "power3.out",
          },
          index === 0 ? "-=0.15" : "-=0.25",
        );
      });

      /*
       * ==========================================
       * SKILLS
       * ==========================================
       *
       * JavaScript
       * TypeScript
       * React
       * Next.js
       * Node.js
       * NestJS
       *
       * Palavra por palavra.
       */

      timeline.to(
        skillsWords,
        {
          opacity: 1,
          y: 0,
          duration: 1.4,
          stagger: 0.4,
          ease: "power2.out",
        },
        "-=0.1",
      );

      /*
       * ==========================================
       * BOTÃO
       * ==========================================
       */

      timeline.to(
        buttonRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.15",
      );

      /*
       * ==========================================
       * CLEANUP
       * ==========================================
       */

      return () => {
        greetingSplit.revert();
        roleSplit.revert();
        paragraphSplit.revert();
      };
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <HeroContainer ref={heroRef}>
      <Title>
        <span ref={greetingRef}>Olá, eu sou </span>

        <Name ref={nameRef}>André Gonzaga</Name>

        <br />

        <Role ref={roleRef}>Engenheiro de Software</Role>
      </Title>

      <Paragraph ref={paragraphRef}>
        Desenvolvedor Full-stack focado em criar aplicações web modernas,
        performáticas e escaláveis utilizando JavaScript, TypeScript, React,
        Next.js, Node.js e NestJS.
      </Paragraph>

      <Button
        ref={buttonRef}
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
