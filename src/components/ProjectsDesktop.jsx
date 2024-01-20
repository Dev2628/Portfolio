import PropTypes from "prop-types";

export const ProjectsDesktop = ({ projects }) => {
  return (
    <div className="projects__section--box box">
      {projects.map((project) => (
        <a
          key={project.name}
          href={project.url}
          className="box__info"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={project.image}
            className="box__info--img"
            alt={project.name}
          />
          <div className="box__info--description">
            <h2>{project.name}</h2>
          </div>
        </a>
      ))}
    </div>
  );
};

ProjectsDesktop.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};
