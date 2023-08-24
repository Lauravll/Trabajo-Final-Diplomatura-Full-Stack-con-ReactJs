var express = require('express');
var router = express.Router();
var mascotasModel = require('./../models/mascotasModel');
var cloudinary = require('cloudinary').v2;
var nodemailer = require('nodemailer');

router.get('/mascotas', async function (req, res, next) {
  let mascotas = await mascotasModel.getMascotasWithDetails();

  mascotas = mascotas.map(mascota => {
    if (mascota.img_id) {
      const imagen = cloudinary.url(mascota.img_id, {
        width: 900,
        height: 400,
        crop: "fit"
      });
      return {
        ...mascota,
        imagen
      }
    } else {
      return {
        ...mascota,
        imagen: ""
      }
    }
  });
  res.json(mascotas);
});

router.post('/contacto', async (req, res) => {
  const mail = {
    to: "laura.vll@hotmail.com",
    subject: "Contacto web",
    html: `${req.body.nombre_contacto} se contactó a través de la web y quiere más información
        a este correo: ${req.body.email} <br> Además, hizo el siguiente comentario:
        ${req.body.mensaje}. <br> Su teléfono es ${req.body.telefono}`
  }

  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  await transport.sendMail(mail)

  res.status(201).json({
    error: false,
    message: "Mensaje enviado"
  })

})

router.post('/agregarFromReact', async (req, res) => {
  try {
    const nuevaMascota = req.body;
    await mascotasModel.insertMascotaPart(nuevaMascota);
    res.status(200).json({ message: 'Mascota agregada exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al agregar la mascota' });
  }
});

module.exports = router;