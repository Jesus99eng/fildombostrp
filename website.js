var containerProductos = document.getElementById("containerProductos");
var BtnFiltroCatWomen = document.getElementById("BtnFiltroCatWomen");
var BtnFiltroCatMens = document.getElementById("BtnFiltroCatMens");
var BtnFiltroCatElectronics = document.getElementById("BtnFiltroCatElectronics");
var BtnFiltroCatje = document.getElementById("BtnFiltroCatje");
var checkboxmayor50 = document.getElementById("checkboxmayor50");
var checkboxmenor50 = document.getElementById("checkboxmenor50");
var InputBuscarProducto = document.getElementById("inputBuscarProducto");

BtnFiltroCatWomen.addEventListener("click", actionBtnFiltroCatWomen);
BtnFiltroCatMens.addEventListener("click", actionBtnFiltroCatMens);
BtnFiltroCatElectronics.addEventListener("click",actionBtnFiltroCatElectronics);
BtnFiltroCatje.addEventListener("click", actionBtnFiltroCatje);

var arrayFilterCheckBox = [checkboxmayor50, checkboxmenor50];





InputBuscarProducto.addEventListener("input", () => {
  let entrada = InputBuscarProducto.value;
  let encontrarProduct = Buscarinput(productosArray, entrada);
  console.log(encontrarProduct.length);

  if (encontrarProduct.length > 0) {
    renderizarProductos(encontrarProduct);
  } else {
    containerProductos.innerHTML = "<h2>No se encuentra la Categoria Buscada</h2>";
  }
});

function Buscarinput(lista, termin) {
  console.log(termin);
  if (termin == "") {
    return productosArray;
  }
  let translateMinus = termin.toLowerCase();
  return (resultado = lista.filter((item) =>item.category.toLowerCase().includes(translateMinus)));
}








//mayores a 50//
checkboxmayor50.addEventListener("change", function () {
  if (checkboxmayor50.checked) {
    let arrayMayores50 = filtrarArrayMayores50(productosArray);
    renderizarProductos(arrayMayores50);
  } else {
    validarFiltrosVacios();
  }
});

//menores a 50//
checkboxmenor50.addEventListener("change", () => {
  if (checkboxmenor50.checked) {
    let arrayMenores50 = filtrarArrayMenores50(productosArray);
    renderizarProductos(arrayMenores50);
  } else {
    validarFiltrosVacios();
  }
});

//funcion de filtrar categoria que el precio sea menores a 50//

/*function actionBtnFiltroMenor50(){
  let arrayFiltrarMayores50 = productosArray.filter( item => item.price < 50 )

renderizarProductos(arrayFiltrarMayores50)

}*/

/*function actionBtnFiltroMayor50(){
  let arrayFiltrarMayores50 = productosArray.filter( item => item.price > 50 )

renderizarProductos(arrayFiltrarMayores50)

}*/

function actionBtnFiltroCatWomen() {
  let arrayFiltrarCategoria = productosArray.filter(
    (item) => item.category === "womens cloth"
  );
  renderizarProductos(arrayFiltrarCategoria);
}

function actionBtnFiltroCatMens() {
  let arrayFiltrarCategoria = productosArray.filter(
    (item) => item.category === "mens cloth"
  );
  renderizarProductos(arrayFiltrarCategoria);
}

function actionBtnFiltroCatElectronics() {
  let arrayFiltrarCategoria = productosArray.filter(
    (item) => item.category === "electronics"
  );
  renderizarProductos(arrayFiltrarCategoria);
}

function actionBtnFiltroCatje() {
  let arrayFiltrarCategoria = productosArray.filter(
    (item) => item.category === "jewelery"
  );
  renderizarProductos(arrayFiltrarCategoria);
}

/*inputBuscarProducto.addEventListener("input", () => {
  var entrada = inputBuscarProducto.value;

  let arrayProudctoBuscado = buscarProducto(productosArray, entrada);
  if (arrayProudctoBuscado.length > 0) {
    renderizarProductos(arrayProudctoBuscado);
  }
});

*/

/*function validarFiltrosVacios() {
  let filtrosVacios = arrayFilterCheckBox.filter(item =>
      item.checked === true
  )
  if (filtrosVacios.length === 0) {
      renderizarProductos(productosArray)
  }
}*/

function generarcomponentProduct(producto) {
  return `<div class="card p-3">
               <div class="d-flex justify-content-between align-items-center ">
                   <div class="mt-2">
                      <h4 class="text-uppercase">
                          ${producto.title}
   
                      </h4>
                      <div class="mt-5">

                        <h5 class="text-uppercase mb-0">
                                 ${producto.caet}
                        </h5>
                          <h1 class="main-heading mt-0">
                                 ${producto.category}
                          </h1>
                     </div>
                   </div>
                  <div class="image">
                       <img width="200" height="200"
                       src=${producto.image} />
                  </div>
               </div>

                <div class="d-flex justify-content-between align-items-center mt-2 mb-2">
                     <div>
                        <p class="fs-6" >
                          S/ ${producto.price}
                        </p>
                     </div>

                </div>

                <div>
                  <p class="fs-6" >
                     ${producto.description}
                  </p>
                </div>

 
                <button class="btncarrito">
                   <span class="shadow"></span>
                   <span class="edge"></span>
                   <span class="front text"> Agregar al carrito</span>
                </button>
        </div>`;
}

//Renderiza todos los productor que vengan en un array
/*function renderizarProductos(array){
    containerProductos.innerHTML = ""

    // for(let i=0; i < array.length; i++){
    //     var productoHTML = generarUIProducto(array[i])
    //     containerProductos.innerHTML += productoHTML
    // }
    
    array.forEach( item => 
        containerProductos.innerHTML += generarUIProducto(item)
    )
    
    // array.map( producto =>
    //     containerProductos.innerHTML +=  generarUIProducto(producto)
    // )
}
*/

function renderizarProductos(array) {
  containerProductos.innerHTML = "";
  array.forEach(
    (item) => (containerProductos.innerHTML += generarcomponentProduct(item))
  );
}

renderizarProductos(productosArray);
