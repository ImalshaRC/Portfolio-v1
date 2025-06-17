import { Container } from "./styles";
import linkedin from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github.svg";
import whatsapp from "../../assets/whatsapp.svg";

export function Footer() {
  return (
    <Container className="footer">
      <a href="/" className="logo">
        <span>Chamindu</span>
        <span> Imalsha</span>
      </a>
      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/chamindu-imalsha-042a93215/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin" />
        </a>
        <a href="https://github.com/ImalshaRC" target="_blank" rel="noreferrer">
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a
          href="https://wa.me/qr/RINO3UIR6EILE1"
          target="_blank"
          rel="noreferrer"
        >
          <img src={whatsapp} alt="Whatsapp" />
        </a>
      </div>
    </Container>
  );
}
