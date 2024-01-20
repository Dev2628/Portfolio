import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
export const AppFooter = () => {
  const ageCurrent = new Date().getFullYear();
  return (
    <footer className="footer">
      <section className="footer__section">
        <div className="footer__section--copy">
          <p>&copy; {ageCurrent} Fabricio all rights reserved</p>
        </div>
        <ul className="footer__section--list list">
          <li className="list__item">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Dev2628"
            >
              <BsGithub />
            </a>
          </li>
          <li className="list__item">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/fabriciodev26/?igshid=MzNlNGNkZWQ4Mg%3D%3D"
            >
              <BsInstagram />
            </a>
          </li>
          <li className="list__item">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/fabricio-iparraguirre-quintero/"
            >
              <BsLinkedin />
            </a>
          </li>
        </ul>
      </section>
    </footer>
  );
};
