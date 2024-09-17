import React from "react";
import "./quemsomos.css";
import Container from "../../components/Container";


const QuemSomos: React.FC = () => {
  return (
    <Container img="FUNDO2.png">
      <div className="main">
        <p className="container_text">
        Na GIF, entendemos que cada carro é único e merece um atendimento personalizado. Nossa equipe de profissionais altamente qualificados 
        está equipada com a mais recente tecnologia e ferramentas para diagnosticar e reparar seu veículo com precisão e eficiência.
         Seja para uma manutenção preventiva, uma reparação complexa ou um ajuste fino, nossos técnicos têm o conhecimento e a experiência 
         necessários para resolver qualquer desafio.
         
         
         
        </p>

        <p className="container_text">
        Na GIF Motors, oferecemos uma gama completa de serviços para atender todas as necessidades do seu veículo,
         garantindo que ele funcione com a máxima eficiência e segurança.
            
            
        </p>
      </div>
    </Container>
  );
};

export default QuemSomos;
