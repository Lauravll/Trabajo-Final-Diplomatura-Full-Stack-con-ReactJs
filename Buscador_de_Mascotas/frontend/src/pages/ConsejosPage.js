import React from "react";
import '../styles/components/pages/ConsejosPage.css';

const ConsejosPage = (props) => {
  return (
    <main>
      <section className="py-1 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-normal">Pasos a seguir si se pierde una mascota</h1>
          </div>
        </div>
      </section>

      <section>
        <div className="container-sm text-center h-1 alturaClase">
          <div className="row mb-3 alturaClase">
            <div className="col-7 themed-grid-col">
              <ol className="list-group list-group-numbered">
                <li className="list-group-item">Busca en casa y en lugares cercanos como rincones y escondites</li>
                <li className="list-group-item">Pregunta a los vecinos.</li>
                <li className="list-group-item">Crea carteles con la foto y la información de contacto.</li>
                <li className="list-group-item">Contacta a los refugios y organizaciones locales de control anima.</li>
                <li className="list-group-item">Utiliza luces y sonidos llamativos durante la noche para ayudar a que tu mascota te encuentre.</li>
                <li className="list-group-item">Registra tu mascota como perdido en páginas de internet y redes sociales.</li>
                <li className="list-group-item">Utiliza señuelos y olores familiares cerca de tu casa.</li>
              </ol>
              <div className="bg-dark py-1 text-center container text-white pt-3">
                <p>Recuerda que la clave es actuar rápido y difundir la información para aumentar las posibilidades de encontrar a tu
                  mascota</p>
              </div>
            </div>

            <div className="col-5 themed-grid-col">
              <div className="card shadow-sm bg-dark">
                <img src="img/cartel.png" className="d-block w-100" alt="..." />

                <div className="card-body">
                  <p className="card-text text-white">
                    Ejemplo cartel de perdida
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

export default ConsejosPage;