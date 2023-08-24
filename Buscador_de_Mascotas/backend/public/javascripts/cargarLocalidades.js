$(document).ready(function () {
  const provinciaDropdown = $('#provincia');
  const localidadDropdown = $('#localidad');

  provinciaDropdown.on('change', function () {
    const selectedProvincia = $(this).val();
    localidadDropdown.empty();

    if (selectedProvincia) {
      $.get(`/admin/mascotas/cargar-localidades/${selectedProvincia}`, function (data) {
        data.forEach(function (localidad) {
          localidadDropdown.append($('<option>', {
            value: localidad.id_localidad,
            text: localidad.descripcion
          }));
        });
      });
    } else {
      localidadDropdown.append($('<option>', {
        value: '',
        text: 'Seleccione una Provincia primero',
        disabled: true,
        selected: true
      }));
    }
  });
});
