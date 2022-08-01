const carrito = document.getElementById("carrito");
const template = document.getElementById("template");
const fragment = document.createDocumentFragment();
const btnBotones = document.querySelectorAll(".card .btn");
/* oggetto dello Store */
const carritoObjeto = {};

const agregarAlCarito = (e) => {
  console.log(e.target.dataset.product);
  const producto = {
    titulo: e.target.dataset.product,
    id: e.target.dataset.product,
    cantidad: 1
  }
  if (carritoObjeto.hasOwnProperty(producto.titulo)) {
    producto.cantidad = carritoObjeto[producto.titulo].cantidad + 1;
  }
  carritoObjeto[producto.titulo] = producto;
  pintaCarito(producto);
};

const pintaCarito = (producto) => {
  carrito.textContent = "";
  Object.values(carritoObjeto).forEach((item) => {
    const clone = template.content.firstElementChild.cloneNode(true);
    clone.querySelector(".lead").textContent = item.titulo;
    clone.querySelector(".badge").textContent = item.cantidad;
    fragment.appendChild(clone);
  })
  carrito.appendChild(fragment);
};

btnBotones.forEach((btn) => btn.addEventListener("click", agregarAlCarito));