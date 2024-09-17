import React from "react";
import Container from "../../components/Container";
import "./Criadores.css";
import Card from "../../components/Card";
import ImgIgor from "/assets/img/igor.png";
import ImgFelipe from "/assets/img/felipe.png";
import ImgGu from "/assets/img/gu.png";

const Criadores: React.FC = () => {
  return (
    <Container img="FUNDO3.jpg">
      <section className="criadores_main">
        <Card
          nome="Igor Felicori"
          rm="558532"
          sala="1TDSPG"
          github="https://github.com/Igorfelicori"
          img={ImgIgor}
        />

        <Card
          nome="FELIPE SANTANA"
          rm="558916"
          sala="1TDSPG"
          github="https://github.com/FelipeSants08"
          img={ImgFelipe}
        />

        <Card
          nome="GUSTAVO VASCONCELOS"
          rm="558463"
          sala="1TDSPG"
          github="https://github.com/GustavoVasconcelos045"
          img={ImgGu}
        />
      </section>
    </Container>
  );
};

export default Criadores;
