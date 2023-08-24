import React, { useState } from "react";
import axios from "axios";

const RegistrarMascotaPerdidaPage = (props) => {
  const [nombreMascota, setNombreMascota] = useState("");
  const [raza, setRaza] = useState("");
  const [ojos, setOjos] = useState("");
  const [esDuenio, setEsDuenio] = useState(false);
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [idProvincia, setIdProvincia] = useState("");
  const [idLocalidad, setIdLocalidad] = useState("");
  const [calle, setCalle] = useState("");
  const [numero, setNumero] = useState("");
  const [idEspecie, setIdEspecie] = useState("");
  const [pelajeTipo, setPelajeTipo] = useState("");
  const [pelajeColor, setPelajeColor] = useState("");
  const [tamanio, setTamanio] = useState("");
  const [edad, setEdad] = useState("");
  const [fechaPerdida, setFechaPerdida] = useState("");
  const [otrasCaracteristicas, setOtrasCaracteristicas] = useState("");
  const [perdido, setPerdido] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nuevaMascota = {
      nombre_mascota: nombreMascota,
      raza: raza,
      ojos: ojos,
      esDuenio: esDuenio ? 1 : 0,
      apellido: apellido,
      email: email,
      telefono: telefono,
      id_provincia: idProvincia,
      id_localidad: idLocalidad,
      calle: calle,
      numero: numero,
      id_especie: idEspecie,
      pelaje_tipo: pelajeTipo,
      pelaje_color: pelajeColor,
      tamanio: tamanio,
      edad: edad,
      perdida_perdida: fechaPerdida,
      otras_caracteristicas: otrasCaracteristicas,
      perdido: perdido ? 1 : 0,
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/api/agregarFromReact",
        nuevaMascota
      );
      console.log("Respuesta del servidor:", response.data);
    } catch (error) {
      console.error("Error al enviar la solicitud:", error);
    }
  };

  return (
    <main>
      <section className="py-5 container formularioRegistro">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <form
              className="formulario row g-3"
              onSubmit={handleSubmit}
              encType="multipart/form-data"
            >
              <h2>Registrar animal perdido</h2>

              <div className="col-md-12 mb-3">
                <label htmlFor="imagen" className="form-label">Selecciona una imagen:</label>
                <input type="file" className="form-control-file" id="imagen" name="imagen" />
              </div>

              <div className="row">
                <div className="col-md-6">
                  <fieldset className="col-md-12 border p-3 mb-3 tamanio_datos">
                    <div className="row">
                      <div className="col-md-8">
                        <legend className="h5">Datos del Contacto:</legend>
                      </div>
                      <div className="col-md-4">
                        <label>
                          Es el Dueño?
                          <input
                            type="checkbox"
                            name="esDuenio"
                            checked={esDuenio}
                            onChange={(e) => setEsDuenio(e.target.checked)}
                          />
                        </label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label htmlFor="apellido" className="form-label">Apellido</label>
                        <input
                          type="text"
                          className="form-control"
                          id="apellido"
                          placeholder="Apellido"
                          name="apellido"
                          value={apellido}
                          onChange={(e) => setApellido(e.target.value)}
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Email"
                          name="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label htmlFor="telefono" className="form-label">Teléfono</label>
                        <input
                          type="number"
                          className="form-control"
                          id="telefono"
                          placeholder="Telefono"
                          name="telefono"
                          value={telefono}
                          onChange={(e) => setTelefono(e.target.value)}
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="provincia" className="form-label">Provincia</label>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          id="provincia"
                          name="id_provincia"
                          value={idProvincia}
                          onChange={(e) => setIdProvincia(e.target.value)}
                        >
                          <option value="" selected>Seleccione una Provincia</option>
                          {/* Opciones de provincia */}
                        </select>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label htmlFor="localidad" className="form-label">Localidad</label>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          id="localidad"
                          name="id_localidad"
                          value={idLocalidad}
                          onChange={(e) => setIdLocalidad(e.target.value)}
                        >
                          <option value="" selected>Seleccione una Localidad</option>
                          {/* Opciones de localidad */}
                        </select>
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="calle" className="form-label">Calle</label>
                        <input
                          type="text"
                          className="form-control"
                          id="calle"
                          placeholder="Calle"
                          name="calle"
                          value={calle}
                          onChange={(e) => setCalle(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label htmlFor="numero" className="form-label">Número</label>
                        <input
                          type="text"
                          className="form-control"
                          id="numero"
                          placeholder="Número"
                          name="numero"
                          value={numero}
                          onChange={(e) => setNumero(e.target.value)}
                        />
                      </div>
                    </div>
                  </fieldset>
                </div>

                <div className="col-md-6">
                  <fieldset className="border p-3 tamanio_datos">
                    <div className="row">
                      <div className="col-md-8">
                        <legend className="h5">Datos de la Mascota:</legend>
                      </div>
                      <div className="col-md-4">
                        <label>
                          Sigue Perdido?
                          <input
                            type="checkbox"
                            name="perdido"
                            checked={perdido}
                            onChange={(e) => setPerdido(e.target.checked)}
                          />
                        </label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label htmlFor="nombre_mascota" className="form-label">Nombre</label>
                        <input
                          type="text"
                          className="form-control"
                          id="nombre_mascota"
                          placeholder="Nombre"
                          name="nombre_mascota"
                          value={nombreMascota}
                          onChange={(e) => setNombreMascota(e.target.value)}
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="raza" className="form-label">Raza</label>
                        <input
                          type="text"
                          className="form-control"
                          id="raza"
                          placeholder="Raza"
                          name="raza"
                          value={raza}
                          onChange={(e) => setRaza(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label htmlFor="especie" className="form-label">Especie</label>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          name="id_especie"
                          value={idEspecie}
                          onChange={(e) => setIdEspecie(e.target.value)}
                        >
                          <option selected>Seleccione tipo de Especie</option>
                          <option value="1">Perro</option>
                          <option value="2">Gato</option>
                          {/* Otras opciones de especie */}
                        </select>
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="ojos" className="form-label">Color ojos</label>
                        <input
                          type="text"
                          className="form-control"
                          id="ojos"
                          placeholder="Color ojos"
                          name="ojos"
                          value={ojos}
                          onChange={(e) => setOjos(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label htmlFor="pelaje_tipo" className="form-label">Pelaje Tipo</label>
                        <input
                          type="text"
                          className="form-control"
                          id="pelaje_tipo"
                          placeholder="Pelaje Tipo"
                          name="pelaje_tipo"
                          value={pelajeTipo}
                          onChange={(e) => setPelajeTipo(e.target.value)}
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="pelaje_color" className="form-label">Pelaje Color</label>
                        <input
                          type="text"
                          className="form-control"
                          id="pelaje_color"
                          placeholder="Pelaje Color"
                          name="pelaje_color"
                          value={pelajeColor}
                          onChange={(e) => setPelajeColor(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label htmlFor="tamanio" className="form-label">Tamaño</label>
                        <input
                          type="text"
                          className="form-control"
                          id="tamanio"
                          placeholder="Tamaño"
                          name="tamanio"
                          value={tamanio}
                          onChange={(e) => setTamanio(e.target.value)}
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="edad" className="form-label">Edad</label>
                        <input
                          type="text"
                          className="form-control"
                          id="edad"
                          placeholder="Edad"
                          name="edad"
                          value={edad}
                          onChange={(e) => setEdad(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <label htmlFor="perdida_perdida" className="form-label">Fecha Perdida:</label>
                        <div className="input-group">
                          <input
                            id="perdida_perdida"
                            name="perdida_perdida"
                            className="form-control"
                            type="date"
                            value={fechaPerdida}
                            onChange={(e) => setFechaPerdida(e.target.value)}
                          />
                          <span id="fechaPerdidaSelected"></span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 mb-3">
                      <label htmlFor="otras_caracteristicas">Otras Características</label>
                      <textarea
                        className="form-control"
                        id="caracteristicas"
                        rows="2"
                        name="otras_caracteristicas"
                        value={otrasCaracteristicas}
                        onChange={(e) => setOtrasCaracteristicas(e.target.value)}
                      ></textarea>
                    </div>
                  </fieldset>
                </div>
              </div>

              <div className="col-12">
                <button type="submit" className="btn btn-primary botonRegistrar">
                  Registrar mascota perdida
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RegistrarMascotaPerdidaPage;