
  function filtrarArrayMayores50(array) {
    return array.filter((item) => item.price >= 50);
  }

  function filtrarArrayMenores50(array) {
    return array.filter((item) => item.price < 50);
  }

  function buscarProducto(array, input) {
    let inputMinuscula = input.toLowerCase();
    return array.filter((item) =>
      item.title.toLowerCase().includes(inputMinuscula)
    );
  }