import React from "react";
import '../styles/components/pages/PerdidosPage.css';
import { useState, useEffect } from "react";
import axios from 'axios';
import MascotaItem from "../components/mascotas/MascotaItem";

const PerdidosPage = (props) => {

  const [loading, setLoading] = useState(false);
  const [mascotas, setMascotas] = useState([]);

  useEffect(() => {
    const getMascotasWithDetails = async () => {
      setLoading(true);
      const response = await axios.get('http://localhost:3000/api/mascotas');
      setMascotas(response.data);
      setLoading(false);
    };

    getMascotasWithDetails();
  }, []);

  return (
    <main>
      <section className="py-1 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-normal">Últimos reportados perdidos</h1>
            <p>
              <a href="/registrar-mascota-perdida" className="btn my-2 text-white fondoVioleta" style={{ backgroundColor: '#1a0a3e' }} >Registrar mascota perdida</a>
            </p>
          </div>
        </div>
      </section>

      <section className="album py-1 container" id="cartelera">
        <div className="container">
          <div className="row row-cols-md-3">
            {loading ? (
              <p>Cargando...</p>
            ) : (
              //Object.keys(mascotas).map(item => console.log(item.titulo))
              //mascotas.map(item => console.log(typeof item))
              mascotas.map(item =>
                <MascotaItem key={item.id}
                  nombre_mascota_item={item.nombre_mascota}
                  raza_item={item.raza}
                  especie_item={item.especie}
                  ojos={item.ojos}
                  pelaje_tipo={item.pelaje_tipo}
                  pelaje_color={item.pelaje_color}
                  tamanio={item.tamanio}
                  fecha_perdido={item.fecha_perdido}
                  provincia={item.provincia}
                  localidad={item.localidad}
                  nombre_contacto={item.nombre_contacto}
                  apellido_contacto={item.apellido_contacto}
                  telefono={item.telefono}
                  email={item.email}
                  fecha_registrado={item.fecha_registrado}
                  imagen={item.imagen} body={item.cuerpo} />)
            )}
          </div>

        </div>
      </section>

    </main>

  );
}

export default PerdidosPage;