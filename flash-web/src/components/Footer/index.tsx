import React from "react";
import { Container } from "./styles";
import Logo from "../../assets/flexgeLogoAzul30.png";

const Footer: React.FC = () => {
  return (
    <Container>
      <section>
        <div>
          <h1>Sobre nós</h1>
          <p>
            Somos uma empresa de pessoas apaixonadas por educação e tecnologia,
            que acreditam no potencial do ensino personalizado e das
            metodologias ativas para descomplicar o ensino de inglês.
          </p>
          <p>Juntos com você vamos revolucionar o ensino de inglês.</p>
        </div>

        <div>
          <h1>Contato</h1>
          <p>flexge.com</p>
          <p>Av. 1, 100 - Foz do Iguaçu</p>
          <p>contato@flexge.com</p>
          <p>+55 (xx) 00000 0000</p>
        </div>
      </section>

      <img src={Logo} alt="Logo" />
    </Container>
  );
};

export default Footer;
