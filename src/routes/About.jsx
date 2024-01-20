import bootatrap from "../assets/images/bootstrap.webp";
import sass from "../assets/images/sass.webp";
import py from "../assets/images/python.webp";
import html5 from "../assets/images/html5.webp";
import css3 from "../assets/images/css3.webp";
import js from "../assets/images/JavaScript-logo.webp";
import nodejs from "../assets/images/nodejs.webp";
import react from "../assets/images/react.webp";
import vue from "../assets/images/vue.webp";
import nuxt from "../assets/images/nuxt.webp";
import mysql from "../assets/images/mysql.webp";

export const About = () => {
  const technologies = [
    { src: html5, alt: "html5" },
    { src: css3, alt: "css3" },
    { src: sass, alt: "preprocesador sass" },
    { src: bootatrap, alt: "bootatrap 5" },
    { src: js, alt: "javascript" },
    { src: nodejs, alt: "nodejs" },
    { src: react, alt: "react js" },
    { src: vue, alt: "vue js" },
    { src: nuxt, alt: "nuxt2 js" },
    { src: py, alt: "python" },
    { src: mysql, alt: "mysql" },
  ];

  return (
    <main className="about">
      <section className="about__section">
        <div className="about__section--description">
          <h1>About Me</h1>
          <p>
            I am passionate about lifelong learning and have embarked on a
            journey to expand my knowledge in web development. So far, I have
            mastered the fundamental technologies to create visually appealing
            and structured web pages. With great effort and constant practice, I
            have managed to learn different technologies such as:
          </p>
        </div>
        <div className="about__section--technologies technologies">
          {technologies.map((technology) => (
            <div className="technologies__image" key={technology.alt}>
              <img src={technology.src} alt={technology.alt} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};
