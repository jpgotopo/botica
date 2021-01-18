console.log("correcto");
document.querySelector("#boton").addEventListener("click", traerDatos());

function traerDatos() {
  console.log("Dentro de la Función");
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "productos.json", true);
  xhttp.send();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      // console.log(this.responseText);
      let datos = JSON.parse(this.responseText);
      // console.log(datos);
      let res = document.querySelector("#res");
      res.innerHTML = "";

      for (let item of datos) {
        // console.log(item.COD)
        res.innerHTML += `
                <div class="item card  mx-4 py-4 px-6" style="width: 28rem;">
                    <img class="image img-fluid" src=${item.FOTO} class="card-img-top" alt=".product">
                    <div class="card-body">
                        <h4 class="card-title">${item.DESCRIPCION}</h4>
                        <h5>${item.PRECIO}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" id = "boton" class="btn btn-primary">Comprar</a>
                    </div>
                </div>
                
                `;
      }
    }
  };
}
