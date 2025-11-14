function verDetalles(titulo, descripcion, imagen) {
  document.getElementById("detalleTitulo").innerText = titulo;
  document.getElementById("detalleDescripcion").innerText = descripcion;
  document.getElementById("detalleImagen").src = imagen;

  const modal = new bootstrap.Modal(document.getElementById("detalleModal"));
  modal.show();
}
