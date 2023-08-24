import React from "react";
import '../styles/components/pages/NovedadesPage.css';
import Carousel from 'react-bootstrap/Carousel';

const NovedadesPage = (props) => {
  return (
    <main>
      <section className="container">
        <div className="row py-lg-3">
          <div className="col-md-7 mx-auto">
            <Carousel fade>
              <Carousel.Item>
                <img src="img/encuentro1.png" className="d-block w-100" alt="Reencuentro" />
                <Carousel.Caption>
                  <p className="text-white fondoVioleta">Reencuentro</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img src="img/imagen1.png" className="d-block w-100" alt="Dalmi" />
                <Carousel.Caption>
                  <p className="text-white fondoVioleta">Dalmi - Se perdió el 24/5 en Temperley a las 16:00</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img src="img/imagen2.png" className="d-block w-100" alt="Reina" />
                <Carousel.Caption>
                  <p className="text-white fondoVioleta">Reina - Se perdió el 20/5 en Burzaco a las 17:00</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img src="img/encuentro2.png" className="d-block w-100" alt="Reencuentro" />
                <Carousel.Caption>
                  <p className="text-white fondoVioleta">Reencuentro</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img src="img/imagen3.png" className="d-block w-100" alt="Rocky" />
                <Carousel.Caption>
                  <p className="text-white fondoVioleta">Rocky - Se perdió el 13/4 en Ezeiza las 12:00 aprox</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img src="img/encuentro3.png" className="d-block w-100" alt="Reencuentro" />
                <Carousel.Caption>
                  <p className="text-white fondoVioleta">Reencuentro</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="servicio holder">
          <img src="img/encuentro1.png" className="d-block w-100" alt="..." />
          <div className="info">
            <h4>Nuevo Reencuentro</h4>
            <p>A través de la página web de Susana, recibió un mensaje con una foto familiar: ¡era Paquita! Emocionada, se reunieron
              nuevamente, sellando su reencuentro con abrazos y lamidas de felicidad.</p>
          </div>
        </div>
        <div className="servicio holder">
          <img src="img/encuentro2.png" className="d-block w-100" alt="..." />
          <div className="info">
            <h4>Nuevo Reencuentro</h4>
            <p>Jorge recibió un mensaje en su página web informando que habían encontrado a Oliver, su perro pastor. Se reunieron
              emocionados, agradeciendo a la página por el reencuentro.
            </p>
          </div>
        </div>
        <div className="servicio holder">
          <img src="img/encuentro3.png" className="d-block w-100" alt="..." />
          <div className="info">
            <h4>Nuevo Reencuentro</h4>
            <p>Evangelina recibió un mensaje que indicaba haber encontrado a Tom, su gato perdido. Se reunieron emocionados,
              agradeciendo la ayuda que les permitió volver a estar juntos.
            </p>
          </div>
        </div>
        <div className="servicio holder">
          <img src="img/imagen1.png" className="d-block w-100" alt="..." />
          <div className="info">
            <h4>Perdido</h4>
            <p>Se perdio perro dálmata, responde al nombre de Dalmi - Se perdió el 24/5 en Temperley a las 16:00.</p>
          </div>
        </div>
        <div className="servicio holder">
          <img src="img/imagen2.png" className="d-block w-100" alt="..." />
          <div className="info">
            <h4>Perdido</h4>
            <p>Se perdio Reina el día 20/5 en Burzaco a las 17:00. Fue vista por el centro de la ciudad
            </p>
          </div>
        </div>
      </section>
    </main>

  );
}

export default NovedadesPage;