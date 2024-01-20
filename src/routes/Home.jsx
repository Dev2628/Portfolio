import developer from "../assets/images/dev26.webp";
export const Home = () => {
  return (
    <main className="home">
      <section className="home__section">
        <div className="home__section--info">
          <h1>Fabricio Gabriel</h1>
          <p>
            Hi👋🏻, I&apos;m <strong>Front-end Developer </strong>
            with freelancer experience. I create attractive and interactive
            interfaces for websites. I use HTML, CSS, JavaScript and frameworks
            like React and Vue. I work autonomously, manage projects efficiently
            and meet deadlines.
          </p>
        </div>
        <div className="home__section--image">
          <img src={developer} alt="image software engineering" />
        </div>
      </section>
    </main>
  );
};
