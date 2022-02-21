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
  array.length = 6;

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


/*<div class="carrusel-item">
          <img
            class="carrusel-item__img"
            src="img/pexels-maksim-goncharenok-4421292.jpg"
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
            <p class="carrusel-item__details--title">Titulo Descriptivo</p>
            <p class="carrusel-item__details--subtitle">2019 16+ 114 minutos</p>
          </div>
        </div>*/