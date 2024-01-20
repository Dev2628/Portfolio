import PropTypes from "prop-types";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export const ProjectsCarousel = ({ projects }) => {
  return (
    <Carousel
      className="projects__section--carousel carouselBox"
      showArrows={true}
      showThumbs={false}
    >
      {projects.map((project) => (
        <div className="carouselBox__container" key={project.name}>
          <a
            className="carouselBox__container--linked"
            href={project.url}
            target="_blank"
            rel="noreferrer"
          >
            <img src={project.image} alt={project.name} />
          </a>
          <p>{project.name}</p>
        </div>
      ))}
    </Carousel>
  );
};

ProjectsCarousel.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};
