const grid = document.getElementById('grid');

function crearTarjeta(producto){
  return `
    <a class="card" href="${producto.link}" target="_blank" rel="noopener noreferrer">
      <div class="tag">NUEVO</div>
      <div class="img-wrap">
        <img src="${producto.imagen}" alt="${producto.nombre}" loading="lazy">
      </div>
      <div class="info">
        <h3>${producto.nombre}</h3>
        <span class="btn">VER PRODUCTO</span>
      </div>
    </a>
  `;
}

grid.innerHTML = productos.map(crearTarjeta).join('');
document.getElementById('contador').textContent = productos.length;