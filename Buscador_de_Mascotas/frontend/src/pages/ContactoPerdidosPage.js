import React from "react";
import '../styles/components/pages/ContactoPerdidosPage.css';
import { useState } from "react";
import axios from 'axios';

const ContactoPerdidosPage = (props) => {

  const initialForm = {
    nombre_contacto: '',
    apellido_contacto: '',
    email: '',
    telefono: '',
    provincia: '',
    localidad: '',
    mensaje: ''
  }

  const [sending, setSending] = useState(false);
  const [msg, setMsg] = useState('');
  const [formData, setFormData] = useState(initialForm);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(oldData => ({
      ...oldData,
      [name]: value
    }));
  }

  const handleSubmit = async e => {
    e.preventDefault();
    setMsg('');
    setSending(true);
    const response = await axios.post('http://localhost:3000/api/contacto', formData);
    setSending(false);
    setMsg(response.data.message);
    if (response.data.error === false) {
      setFormData(initialForm)
    }
  }

  return (
    <main>
      <section className="py-5 container formularioRegistro">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <form action='/contacto' method='post' className="formulario row g-3" onSubmit={handleSubmit}>
              <h2>Contacto mascota perdida</h2>
              <div className="col-12">
                <label for="nombre_contacto" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="nombre_contacto" name="nombre_contacto" placeholder="Nombre" value={formData.nombre_contacto}
                  onChange={handleChange} />
              </div>
              <div className="col-12">
                <label for="apellido_contacto" className="form-label">Apellido</label>
                <input type="text" className="form-control" id="apellido_contacto" name="apellido_contacto" placeholder="Apellido" value={formData.apellido_contacto}
                  onChange={handleChange} />
              </div>
              <div className="col-md-12">
                <label for="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" name="email" placeholder="Email"  value={formData.email} onChange={handleChange} />
              </div>
              <div className="col-12">
                <label for="telefono" className="form-label">Teléfono</label>
                <input type="number" className="form-control" id="telefono" placeholder="Telefono" name="telefono" value={formData.telefono} onChange={handleChange} />
              </div>
              <div className="col-md-6">
                <label for="ciudad" className="form-label">Provincia</label>
                <input type="text" className="form-control" id="provincia" name="provincia" value={formData.provincia} onChange={handleChange} />
              </div>
              <div className="col-md-6">
                <label for="localidad" className="form-label">Localidad</label>
                <input type="text" className="form-control" id="localidad" name="localidad" value={formData.localidad} onChange={handleChange} />
              </div>
              <div className="col-md-12">
                <label for="mensaje">Ingrese Características</label>
                <textarea className="form-control" id="mensaje" rows="3" name="mensaje" value={formData.mensaje} onChange={handleChange} ></textarea>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-primary botonRegistrar" value="Enviar">Registrar mascota
                  perdida</button>
              </div>
            </form>
            {sending ? <p>Enviando...</p> : null}
            {msg ? <p>{msg}</p> : null}
          </div>
        </div>
      </section>
    </main>
    
  );
}

export default ContactoPerdidosPage;