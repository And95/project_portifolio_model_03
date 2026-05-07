import { useEffect, useState } from "react";

import {
  Section,
  Title,
  ProjectsGrid,
  Card,
  CardImage,
  CardTitle,
  CardDescription,
  ProjectContainer,
  PaginationButton,
  PaginationTabs,
  NewTag,
} from "./Projects-Style";

import { Button } from "../Style-Button";
import ProjectsData from "../Projects/Projects-Data";

export function Projects() {
  const [page, setPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  const projectsPerPage = 3;
  const start = (page - 1) * projectsPerPage;
  const visibleProjects = ProjectsData.slice(start, start + projectsPerPage);
  const totalPages = Math.ceil(ProjectsData.length / projectsPerPage);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePageChange = (newPage) => {
    setPage(newPage);

    const section = document.getElementById("projects");

    if (section) {
      const offset = 20;
      const top = section.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  };

  const projectsToRender = isMobile ? visibleProjects : ProjectsData;

  return (
    <ProjectContainer id="projects">
      <Title>Projetos</Title>
      <Section>
        <ProjectsGrid>
          {projectsToRender.map((project, index) => (
            <Card key={project.id} featured={index === 0}>
              {index === 0 && <NewTag>NEW</NewTag>}

              <CardImage src={project.image} alt={project.title} />
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>

              <Button
                small
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Abrir projeto ${project.title} em nova aba`}
              >
                Clique aqui
              </Button>
            </Card>
          ))}
        </ProjectsGrid>

        {isMobile && (
          <PaginationTabs>
            {Array.from({ length: totalPages }, (_, index) => (
              <PaginationButton
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={page === index + 1 ? "active" : ""}
              >
                {index + 1}
              </PaginationButton>
            ))}
          </PaginationTabs>
        )}
      </Section>
    </ProjectContainer>
  );
}
