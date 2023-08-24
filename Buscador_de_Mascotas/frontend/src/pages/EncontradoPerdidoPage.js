import React from "react";
import '../styles/components/pages/EncontradoPerdidoPage.css';

const EncontradoPerdidoPage = (props) => {
  return (
    <main>
      <section className="py-3 container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div className="col">
              <div className="card shadow-sm bg-dark">
                <img src="img/imagen1.png" className="d-block w-100" alt="..." />
                <div className="card-body mascotaPerdidaShow">
                  <p className="card-text text-white">
                    Buscamos a Dalmi, se perdio en Temperley, en la calle Cerrito entre Corrientes y Jujuy. Descripción:
                    Se perdió aproximadamente el 24/5 a las 6 de la tarde. Si tienes información, comunícate al 4444-4444.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default EncontradoPerdidoPage;