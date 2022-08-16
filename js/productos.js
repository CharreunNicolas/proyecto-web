let contador = 0;
const cantProductos = () =>{
    const seccion = document.getElementById('section-productos');
    contador++;
    const template = `
    
          <img class="imagen img-fluid" src="../img/Img-Avion-producto.jpeg">
          <h5 class="card-title tituloDelProducto">Sonajero</h5>
          <h6 class="card-subtitle descripcion">Material: Hilo crochet</h6>
          
          <label for="numero" class="mx-1 my-2">Cantidad:</label><select id="numero">
            <option value="numero" active>1</option>
            <option value="numero" >2</option>
            <option value="numero" >3</option>
            <option value="numero" >4</option>
            <option value="numero" >5</option>
            <option value="numero" >6</option>
            <option value="numero" >7</option>
            <option value="numero" >8</option>
            <option value="numero" >9</option>
            <option value="numero" >10</option>
            <option value="numero" >11</option>
            <option value="numero" >12</option>
          </select>
          <p class="card-text precio">$450</p> 
          <a href="https://web.whatsapp.com/"  target="_blank" class="card-link card-link-wsp"><ion-icon name="logo-whatsapp"></ion-icon></a>
          <a href="contactos.html" class="card-link"><ion-icon name="mail-outline"></ion-icon></a>
          <a href="metodos.html" class="card-link"><ion-icon name="cart-outline"></ion-icon></a>
    `;
    const template2 = `
          <img class="imagen img-fluid" src="../img/Img-Avion-producto1.jpeg">
          <h5 class="card-title tituloDelProducto">Avion</h5>
          <h6 class="card-subtitle descripcion">Material: Lana</h6>
          
          <label for="numero" class="mx-1 my-2">Cantidad:</label><select id="numero">
            <option value="numero" active>1</option>
            <option value="numero" >2</option>
            <option value="numero" >3</option>
            <option value="numero" >4</option>
            <option value="numero" >5</option>
            <option value="numero" >6</option>
            <option value="numero" >7</option>
            <option value="numero" >8</option>
            <option value="numero" >9</option>
            <option value="numero" >10</option>
            <option value="numero" >11</option>
            <option value="numero" >12</option>
          </select>
          <p class="card-text precio">$600</p> 
          <a href="https://web.whatsapp.com/"  target="_blank" class="card-link card-link-wsp"><ion-icon name="logo-whatsapp"></ion-icon></a>
          <a href="contactos.html" class="card-link"><ion-icon name="mail-outline"></ion-icon></a>
          <a href="metodos.html" class="card-link"><ion-icon name="cart-outline"></ion-icon></a>
    `;
    
    const divProducto = document.createElement('div');
    divProducto.className = "card-body col-xs-6 col-sm-4 col-md-3 col-lg-2 cont-producto";
    if(contador%2 == 0){
      divProducto.innerHTML = template;
    }else{
      divProducto.innerHTML = template2;
    }
    seccion.append(divProducto);

}

//Iterador de productos - (Dentro de la función no me deja iterar con un for)
for(let i=0; i<25; i++){
  cantProductos();
}
