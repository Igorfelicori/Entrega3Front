import React from "react";
import "./home.css";
// import Header from '../header';
import { Link } from "react-router-dom";
import Container from "../../components/Container";


const Home: React.FC = () => {
  return (
    <Container img="CAR.png">
      {/* Contêiner principal */}
      {/* Contêiner principal do conteúdo */}

      <div className="main_container">
        <div>
          <p className="main_text">
            GIF:<br />
            Agilidade e <br />
            soluções ao <br />
            seu alcance.
          </p>
        </div>

        {/* Contêiner do botão */}
        <Link to="/opalavision" className="button">
          {/* Botão */}
          <span>Conheça a</span>
          {/* Texto do botão */}
          <span>GIF</span>
          {/* Texto do botão */}
        </Link>
      </div>

    </Container>
  );
};

export default Home;