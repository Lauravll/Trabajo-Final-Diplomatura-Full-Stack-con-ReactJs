var pool = require('./db'); //Llama datos BD
var md5 = require('md5'); 

async function getMascotasWithDetails() {
  try {
    var query = `
      SELECT
        m.id_mascota,
        m.nombre_mascota,
        e.id_especie,
        e.nombre AS especie,
        m.raza,
        m.ojos,
        m.pelaje_color,
        m.pelaje_tipo,
        m.tamanio,
        m.otras_caracteristicas,
        m.edad,
        m.img_id,
        c.id_contacto,
        c.nombre AS nombre_contacto,
        c.apellido AS apellido_contacto,
        c.email,
        c.telefono,
        c.esDuenio,
        u.calle,
        u.numero,
        u.id_ubicacion,
        l.id_localidad,
        l.descripcion AS localidad,
        p.id_provincia,
        p.descripcion AS provincia,
        m.fecha_perdido,
        m.fecha_registrado,
        CASE
        WHEN m.perdido = 1 THEN 'Si'
        ELSE 'No'
      END AS perdido
      FROM
        Mascotas m
        LEFT JOIN Especies e ON m.id_especie = e.id_especie
        LEFT JOIN Contactos c ON m.id_contacto = c.id_contacto
        LEFT JOIN Ubicaciones u ON c.id_ubicacion = u.id_ubicacion
        LEFT JOIN Localidades l ON u.id_localidad = l.id_localidad
        LEFT JOIN Provincias p ON u.id_provincia = p.id_provincia;
    `;
    var rows = await pool.query(query);
    return rows;
  } catch (error) {
    console.log(error);
  }
}

async function insertMascota(obj) {
  try {

    // Insertar datos de ubicación
    const id_ubicacion = await insertUbicacionContacto(obj);
    if (id_ubicacion != undefined) {
      obj.id_ubicacion = id_ubicacion;
    }
    //Finalizo insertar ubicacion
    
    //Inserto datos de contacto
    const id_contacto = await insertContacto(obj);
    if (id_contacto != undefined) {
      obj.id_contacto = id_contacto;
    }
    //Finalizo insertar datos de contacto

    //Tomo fecha actual 
    const currentDate = new Date(); // Obtiene la fecha y hora actual
    const formattedDate = currentDate.toISOString().slice(0, 19).replace('T', ' '); 

    //Inserto datos de la mascota
    if (obj.perdido == undefined || isNaN(obj.perdido)) {
      obj.perdido = 0;
    }

    const query = "insert into mascotas (nombre_mascota, raza, ojos, pelaje_color, pelaje_tipo, tamanio, perdido, id_especie, id_contacto, img_id, edad, fecha_registrado) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const rows = await pool.query(query, [obj.nombre_mascota, obj.raza, obj.ojos, obj.pelaje_color, obj.pelaje_tipo, obj.tamanio, parseInt(obj.perdido), parseInt(obj.id_especie), parseInt(obj.id_contacto), obj.img_id, parseInt(obj.edad), formattedDate]);
    //Finalizo insertar datos de mascota

    return rows;

  } catch (error) {
    console.log(error);
    throw error;
  };
};

async function insertUbicacionContacto(obj) {
  try {
    const query = "insert into ubicaciones (id_localidad, id_provincia, calle, numero) values (?, ?, ?, ?)";
    const rows = await pool.query(query, [parseInt(obj.id_localidad), parseInt(obj.id_provincia), obj.calle, obj.numero]);
    return rows.insertId;

  } catch (error) {
    console.log(error);
    throw error;
  };
};

async function insertContacto(obj) {
  try {
    if (obj.esDuenio == undefined || isNaN(obj.esDuenio)) {
      obj.esDuenio = 0;
    }
    const query = "insert into contactos (nombre, apellido, email, telefono, esDuenio, id_ubicacion) values (?, ?, ?, ?, ?, ?)";
    const rows = await pool.query(query, [obj.nombre, obj.apellido, obj.email, parseInt(obj.telefono), parseInt(obj.esDuenio), parseInt(obj.id_ubicacion)]);
    return rows.insertId;
  } catch (error) {
    console.log(error);
    throw error;
  };
};

async function deleteMascotaById(id) {
  var query = "delete from mascotas where id_mascota = ? ";
  var rows = await pool.query(query, [id]);
  return rows;
}

async function getMascotaById(id) {
  var query = "select * from mascotas where id_mascota = ? ";
  var rows = await pool.query(query, [id]);
  return rows[0];
}

async function getMascotadByIdWithDetails(id) {
  try {
    var query = `
      SELECT
        m.id_mascota,
        m.nombre_mascota,
        e.id_especie,
        e.nombre AS especie,
        m.raza,
        m.ojos,
        m.pelaje_color,
        m.pelaje_tipo,
        m.tamanio,
        m.otras_caracteristicas,
        m.edad,
        m.img_id,
        c.id_contacto,
        c.nombre AS nombre_contacto,
        c.apellido AS apellido_contacto,
        c.email,
        c.telefono,
        c.esDuenio,
        u.calle,
        u.numero,
        u.id_ubicacion,
        l.id_localidad,
        l.descripcion AS localidad,
        p.id_provincia,
        p.descripcion AS provincia,
        m.fecha_perdido,
        m.fecha_registrado,
        CASE
        WHEN m.perdido = 1 THEN 'Si'
        ELSE 'No'
      END AS perdido
      FROM
        Mascotas m
        LEFT JOIN Especies e ON m.id_especie = e.id_especie
        LEFT JOIN Contactos c ON m.id_contacto = c.id_contacto
        LEFT JOIN Ubicaciones u ON c.id_ubicacion = u.id_ubicacion
        LEFT JOIN Localidades l ON u.id_localidad = l.id_localidad
        LEFT JOIN Provincias p ON u.id_provincia = p.id_provincia
      WHERE id_mascota = ?;
    `;
    var rows = await pool.query(query, [id]);
    return rows[0];
  } catch (error) {
    console.log(error);
  }
}

async function modifyMascotaById(obj, id) {
  try {
    if (obj.perdido == undefined || isNaN(obj.perdido)) {
      obj.perdido = 0;
    }
    var query = "update mascotas set ? where id_mascota = ? ";
    var rows = await pool.query(query, [obj, id]);
    return rows;
  } catch (error) {
    throw error;
  }
} 

async function modifyContactoById(obj, id) {
  try {
    if (obj.esDuenio == undefined || isNaN(obj.esDuenio)) {
      obj.esDuenio = 0;
    }
    var query = "update contactos set ? where id_contacto = ? ";
    var rows = await pool.query(query, [obj, id]);
    return rows;
  } catch (error) {
    throw error;
  }
} 

async function modifyUbicacionById(obj, id) {
  try {
    var query = "update ubicaciones set ? where id_ubicacion = ? ";
    var rows = await pool.query(query, [obj, id]);
    return rows;
  } catch (error) {
    throw error;
  }
} 

async function getLocalidadesByProvincia(provinciaId) {
  try {
    const query = 'select * from localidades where id_provincia = ?';
    const rows = await pool.query(query, [provinciaId]);
    return rows;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function getProvincias() {
  try {
    const query = 'select * from provincias';
    const rows = await pool.query(query);
    return rows;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function insertMascotaPart(obj) {
  try {
    const query = "INSERT INTO mascotas (nombre_mascota, raza, ojos, pelaje_color, pelaje_tipo, tamanio, edad) VALUES (?, ?, ?, ?, ?, ?, ?)";
    const rows = await pool.query(query, [obj.nombre_mascota, obj.raza, obj.ojos, obj.pelaje_color, obj.pelaje_tipo, obj.tamanio, obj.edad]);
    return rows;
  } catch (error) {
    console.log(error);
    throw error;
  }
}


module.exports = { getMascotasWithDetails, insertMascota, deleteMascotaById, getMascotaById, getMascotadByIdWithDetails, modifyMascotaById, modifyContactoById, modifyUbicacionById, getLocalidadesByProvincia, getProvincias, insertMascotaPart }