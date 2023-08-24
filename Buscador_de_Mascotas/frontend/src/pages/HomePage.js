import React from "react";
import '../styles/components/pages/HomePage.css';

const HomePage = (props) => {
  return (
    <main>
      <section className="py-5 text-center container">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <img src="img/perro.png" alt="..." className="rounded-circle" width="240" height="240"/> 
              <h2 className="fw-normal">Perdidos</h2>
              <p>En esta sesión encontrarás todos los animales reportados como perdidos.</p>
              <p><a className="btn btn-secondary" href="/perdidos">Ver sesión &raquo;</a></p>
            </div>
            <div className="col-lg-4">
                <img src="img/gato.png" alt="..." className="rounded-circle" width="240" height="240" /> 
              <h2 className="fw-normal">Novedades</h2>
              <p>En esta sesión encontrarás todas nuestras nuevas novedades.</p>
              <p><a className="btn btn-secondary" href="#">Ver sesión &raquo;</a></p>
            </div>
            <div className="col-lg-4">
              <img src="img/consejos.png" alt="..." className="rounded-circle" width="240" height="240"/>
              <h2 className="fw-normal">Consejos</h2>
              <p>Consejos para seguir ante la perdida de una mascota.</p>
              <p><a className="btn btn-secondary" href="/consejos">Ver sesión &raquo;</a></p>
            </div>
          </div>
        </div>
      </section>
      <div className="album py-5" id="cartelera">
        <div className="container">
          <div className="row row-cols-md-3">
            <div className="col">
              <div className="card shadow-sm bg-dark">
                <img src="img/imagen1.png" className="d-block w-100" alt="..." />

                <div className="card-body">
                  <p className="card-text text-white">
                    Dalmi - Se perdió el 24/5 en Temperley a las 16:00
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">2 horas</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm bg-dark">
                <img src="img/imagen2.png" className="d-block w-100" alt="..." />

                <div className="card-body">
                  <p className="card-text text-white">
                    Reina - Se perdió el 20/5 en Burzaco a las 17:00
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">3:30 horas</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm bg-dark">
                <img src="img/imagen3.png" className="d-block w-100" alt="..." />

                <div className="card-body">
                  <p className="card-text text-white">
                    Rocky - Se perdio el 13/4 en Ezeiza las 12:00 aproximadamente
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                    </div>
                    <small className="text-muted">2 horas</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    
  );
}

export default HomePage;