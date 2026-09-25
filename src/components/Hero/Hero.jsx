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

      // Parágrafo — palavra por palavra
      const paragraphSplit = new SplitText(paragraphRef.current, {
        type: "words",
      });

      /*
       * ==========================================
       * PARÁGRAFO — PALAVRAS EM ORDEM ALEATÓRIA
       * ==========================================
       */

      const shuffledWords = [...paragraphSplit.words].sort(
        () => Math.random() - 0.5,
      );

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
       * NOME
       *
       * Não usamos SplitText aqui porque o Name
       * utiliza gradiente com background-clip.
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

      // Parágrafo
      gsap.set(paragraphSplit.words, {
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
       * OLÁ, EU SOU
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
       * ANDRÉ GONZAGA
       *
       * Mantemos o nome como uma unidade para
       * preservar o gradiente original.
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
       * ENGENHEIRO DE SOFTWARE
       *
       * Palavra por palavra
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
       * PARÁGRAFO
       *
       * As palavras aparecem em ordem aleatória,
       * mas cada palavra permanece inteira.
       */

      timeline.to(
        shuffledWords,
        {
          opacity: 1,
          y: 0,
          duration: 0.45,
          stagger: {
            each: 0.08,
          },
          ease: "power2.out",
        },
        "-=0.15",
      );

      /*
       * BOTÃO
       */

      timeline.to(
        buttonRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
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
