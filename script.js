// Función para agregar un registro al Local Storage
function agregarRegistro() {
  const item = document.getElementById('item').value;
  const amount = parseFloat(document.getElementById('amount').value);

  if (item === '' || isNaN(amount)) {
    alert('Por favor, ingresa un producto/concepto y un monto válido.');
    return;
  }

  const registro = {
    item,
    amount
  };

  // Recuperar registros anteriores del Local Storage o inicializar un array vacío
  const registrosAnteriores = JSON.parse(localStorage.getItem('registros')) || [];

  // Agregar el nuevo registro al array
  registrosAnteriores.push(registro);

  // Actualizar el Local Storage con el nuevo array de registros
  localStorage.setItem('registros', JSON.stringify(registrosAnteriores));

  // Limpiar los campos de entrada
  document.getElementById('item').value = '';
  document.getElementById('amount').value = '';

  // Actualizar la lista en la interfaz
  actualizarLista(registrosAnteriores);
}

// Función para actualizar la lista de registros en la interfaz
function actualizarLista(registros) {
  const registroList = document.getElementById('registroList');
  registroList.innerHTML = '';

  registros.forEach((registro, index) => {
    const li = document.createElement('li');
    li.textContent = `${registro.item}: $${registro.amount.toFixed(2)}`;
    registroList.appendChild(li);
  });
}

// Cargar registros almacenados en el Local Storage al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  const registrosAnteriores = JSON.parse(localStorage.getItem('registros')) || [];
  actualizarLista(registrosAnteriores);
});
