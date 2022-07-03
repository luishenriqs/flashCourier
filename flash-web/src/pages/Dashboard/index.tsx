import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Button from "../../components/Button";
import logo from "../../assets/flexgeLogoAzul30.png";
import teacher1 from "../../assets/1.png";
import teacher2 from "../../assets/2.png";
import teacher3 from "../../assets/3.png";
import teacher4 from "../../assets/4.png";
import Footer from "../../components/Footer";

import { Container } from "./styles";

const Dashboard: React.FC = () => {
  return (
    <>
      <Header size="small" />
      <Container>
        <div className="mainContainer">
          <div className="presentation">
            <img src={logo} alt="Logo" />
            <h1>O melhor material ditático para professores particulares</h1>
          </div>
          <div>
            <div className="images">
              <img src={teacher1} alt="Teacher" />
              <img src={teacher2} alt="Teacher" />
            </div>
            <div className="images">
              <img src={teacher3} alt="Teacher" />
              <img src={teacher4} alt="Teacher" />
            </div>
          </div>
        </div>
        <div className="buttons">
          <div className="buttonContainer">
            <Link to={"/contracts"}>
              <Button className="secondButton" type="button">
                Contratos
              </Button>
            </Link>
          </div>
          <div className="buttonContainer">
            <Link to={"/companys"}>
              <Button className="secondButton" type="button">
                Companhias
              </Button>
            </Link>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Dashboard;
