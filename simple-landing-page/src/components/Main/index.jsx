import React from "react";
import "./style.css";
import MFigure from "./img/robo-img.png";

function Main() {
  return (
    <div>
      <main className="container">
        <section className="main-content">
          <div className="main-written-content">
            <h1 className="title">Myte Bot</h1>
            <h2 className="caption">
              Deixe sua comunidade segura de um jeito fácil!
            </h2>

            <div className="buttons">
            <button className="button" type="button">
              <a href="/">Me Adicione!</a>
            </button>

            <button className="button-2" type="button">
              <a href="/">Ver recursos</a>
            </button>
            </div>

          </div>
          <img className="Mfigure" src={MFigure} alt="myte-bot-main-figure" />
        </section>

        <section className="container-2">
          <h3 className="title-2">Oque ele faz por você?</h3>
          <p className="paragraph">
          1. Cria um sistema de verificação capcha para novos membros garantirem que não são robôs
          </p>
          <p className="paragraph">
          2. Possui um sistema de banimento automático para links suspeitos que forem enviados na comunidade
          </p>
          <p className="paragraph">3. Sistema de avisos e banimento manual, para pessoas administradoras utilizarem</p>
        </section>
      </main>
      <br />
    </div>
  );
}

export default Main;
