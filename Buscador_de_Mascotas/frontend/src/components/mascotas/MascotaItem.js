import React from "react";

function formatDate(date) {
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  return new Date(date).toLocaleDateString('es-ES', options);
}

const MascotaItem = (props) => {
  const { nombre_mascota_item, especie_item, raza_item, ojos, pelaje_tipo, pelaje_color, tamanio, fecha_perdido, provincia, localidad, nombre_contacto, apellido_contacto, telefono, email, fecha_registrado, imagen, body } = props;

  const fechaFormateada = formatDate(fecha_perdido);
  const fechaRegistradaFormateada = formatDate(fecha_registrado);

  return (
        <div className="col mascotas">
          <div className="card shadow-sm bg-dark">
        <img src={imagen} alt={imagen} className="d-block w-130" style={{ height: '250px', objectFit: 'cover' }} />

            <div className="card-body">
              <p className="card-text text-white">
                {nombre_mascota_item} es un {especie_item} de raza {raza_item}. Tiene ojos {ojos} y pelaje {pelaje_tipo} de color {pelaje_color}.
                <br />
                Es de tamaño {tamanio}.
                Se perdió el día {fechaFormateada} en {provincia}, {localidad}.
                <br />
                Si tienes información, contacta a {nombre_contacto} {apellido_contacto} al teléfono {telefono} o vía email: {email}.
              </p>
              <div className="d-flex justify-content-between align-items-center">
            <small className="text">{fechaRegistradaFormateada}</small>
              </div>
            </div>
          </div>
          <div dangerouslySetInnerHTML={{ __html: body }} />
        </div>
    )
}

export default MascotaItem;