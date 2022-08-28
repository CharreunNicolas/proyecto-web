let contador = 0;

const cantProductos = () =>{
    const seccion = document.getElementById('section-productos');
    contador++;
    const template = `

          <img class="imagen img-fluid " src="../img/Img-Avion-producto.jpeg">
          <h5 class="card-title tituloDelProducto">Sonajero</h5>
          <h6 class="card-subtitle descripcion">Material: Hilo crochet</h6>
          <h6 class="card-subtitle descripcion">Codigo: ${contador}</h6>
          <p class="card-text precio">$450</p> 

          <div class="div-boton-verProducto">
          <button id="verProd-1" class="boton-verProducto">Ver Producto</button>
          </div>
          
          <a href="https://web.whatsapp.com/"  target="_blank" class="card-link card-link-wsp"><ion-icon id="wsp" name="logo-whatsapp"></ion-icon></a>
          <a href="contactos.html" class="card-link"><ion-icon id="email" name="mail-outline"></ion-icon></a>
          <a href="metodos.html" class="card-link"><ion-icon id="pagos" name="cart-outline"></ion-icon></a>
    `;
    const template2 = `
          <img class="imagen img-fluid" src="../img/Img-Avion-producto1.jpeg">
          <h5 class="card-title tituloDelProducto">Avion</h5>
          <h6 class="card-subtitle descripcion">Material: Lana</h6>
          <h6 class="card-subtitle descripcion">Codigo: ${contador}</h6>
          <p class="card-text precio">$600</p> 

          <div class="div-boton-verProducto">
          <button id="verProd-2" class="boton-verProducto">Ver Producto</button>
          </div>

          <a href="https://web.whatsapp.com/"  target="_blank" class="card-link card-link-wsp"><ion-icon id="wsp" name="logo-whatsapp"></ion-icon></a>
          <a href="contactos.html" class="card-link"><ion-icon id="email" name="mail-outline"></ion-icon></a>
          <a href="metodos.html" class="card-link"><ion-icon id="pagos" name="cart-outline"></ion-icon></a>
    `;
    
    const divProducto = document.createElement('div');
    divProducto.className = "card-body col-xs-6 col-sm-4 col-md-3 col-lg-2  cont-producto";
    //col-xs-6 col-sm-4 col-md-3 col-lg-2
    if(contador%2 == 0){
     
      divProducto.innerHTML = template;
    }else{
     
      divProducto.innerHTML = template2;
    }
    seccion.append(divProducto);

}

//Iterador de productos - (Dentro de la función no me deja iterar con un for)

for(let i=0; i<23; i++){
  cantProductos();
}


