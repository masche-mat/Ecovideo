//funcion para traer los datos del json
var getData = () => {

  var result = {};
  return fetch('js/data.json')
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw Error(response.statusText);
      }
    })
    .then(function (response) {
      result.status = 'ok';
      result.data = response;
      return result;
    })
    .catch(function (error) {
      result.status = 'error';
      result.data = error;
      return result;
    });

}

//para mostrar datos de peliculas en recomendados
function showData(array) {
  let htmlContent = '';
  array.length = 20;

  for (let i = 0; i < array.length; i++) {
    let movie = array[i];
    htmlContent +=
      `
        <div class="carrusel-item">
          <img
            class="carrusel-item__img"
            src="img/wolverine.jfif"
            alt="peli.jpg"
          />
          <div class="carrusel-item__details">
            <div>
              <img
                src="https://img.icons8.com/flat-round/64/000000/play--v1.png"
                alt="play"
              />
              <img src="img/plus-icon.png" alt="plus" />
            </div>
            <p class="carrusel-item__details--title">${movie.name}</p>
            <p class="carrusel-item__details--subtitle">2019 ${movie.age}+ ${movie.duration} minutos</p>
          </div>
        </div>
      `

    document.getElementById("containerMovies").innerHTML = htmlContent;
  }
};

//para iniciar-ejecutar funciones
var resultadoJson = {};
document.addEventListener("DOMContentLoaded", function (e) {
  getData().then(function (resultObj) {
    if (resultObj.status === "ok") {
      resultadoJson = resultObj.data;
      console.log(resultadoJson);
      showData(resultadoJson);
    }
  });
});

//keyup- detecta al presinar una tecla
document.getElementById("buscador").addEventListener('keyup', function () {
  let arrFilter = resultadoJson;
  //toma el array que este en pantalla
  let texto = document.getElementById('buscador').value.toLowerCase();
  //toma el valor del usuario y lo pasa a minusculas
  let contenido = "";
  //el contenido a mostrar en pantalla
  //ciclo for que recorre el array en pantalla
  //y crea dos variables con datos del array
  for (let filtro of arrFilter) {
    let nombre = filtro.name.toLowerCase();
    let genMovie = filtro.genre.toLowerCase();
    //si la variable string nombre o descProd coincide con var texto ver funcionamiento de indexOf()..
    //guarda el filtro coincidente en variable info y agrega al contenido igual que la funcion listProduct(array)
    if ((nombre.indexOf(texto) !== -1) || (genMovie.indexOf(texto) !== -1)) {
      let info = filtro;
      contenido +=
        `
        <div class="carrusel-item">
        <img
          class="carrusel-item__img"
          src="img/wolverine.jfif"
          alt="peli.jpg"
        />
        <div class="carrusel-item__details">
          <div>
            <img
              src="https://img.icons8.com/flat-round/64/000000/play--v1.png"
              alt="play"
            />
            <img src="img/plus-icon.png" alt="plus" />
          </div>
          <p class="carrusel-item__details--title">${info.name}</p>
          <p class="carrusel-item__details--subtitle">2019 ${info.age}+ ${info.duration} minutos</p>
        </div>
      </div>`
    }
    if (contenido === "") {
      contenido += `<div class="text-center p-4">
      <h4>Lo sentimos, no hay titulos disponibles en este momento</h4>
      </div>
      
      `;
      document.getElementById("containerMovies").innerHTML = contenido;
    } else {
      document.getElementById("containerMovies").innerHTML = contenido;
    }
  }
})

