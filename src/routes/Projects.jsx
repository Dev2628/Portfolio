import { ProjectsDesktop } from "../components/ProjectsDesktop";
import { ProjectsCarousel } from "../components/ProjectsCarousel";
import bellavistaTerreno from "../assets/images/bellavistaTerreno.webp";
import vitrinateImport from "../assets/images/vitrinateImport.webp";
import zeusSAC from "../assets/images/zeusSAC.webp";
import formularioPichanga from "../assets/images/formularioPichanga.webp";
import mfcIngenieria from "../assets/images/mfcIngenieria.webp";

export const Projects = () => {
  const projects = [
    {
      name: "Terreno Bellavista",
      image: bellavistaTerreno,
      url: "https://terrenobellavista.com",
    },
    {
      name: "Vitrinate Import",
      image: vitrinateImport,
      url: "https://vitrinateimport.com",
    },
    {
      name: "Zeus S.A.C",
      image: zeusSAC,
      url: "https://zeusservicios.com",
    },
    {
      name: "Formulario Pichanga",
      image: formularioPichanga,
      url: "https://formulario-pichanga-del-barrio.netlify.app",
    },
    {
      name: "MFC Ingeniería",
      image: mfcIngenieria,
      url: "https://www.mfcingenieria.com",
    },
  ];

  return (
    <main className="projects">
      <section className="projects__section">
        <h1>Projects</h1>
        <ProjectsDesktop projects={projects} />
        <ProjectsCarousel projects={projects} />
      </section>
    </main>
  );
};
