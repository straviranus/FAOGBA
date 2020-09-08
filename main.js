window.onload= function(){
    var t;


  var carousel= document.getElementById("slider-contenedor");
  carousel.addEventListener("mouseover", pintar)
  carousel.addEventListener("mouseleave", despintar)

  function pintar(){
      flecha1.style.display="block";
      flecha2.style.display="block";
  }

  function despintar(){
    flecha1.style.display="none";
    flecha2.style.display="none";
}
    
    document.slider.src="imagenes/campeonato.jpg";
    var indiceImagen= 0;
    var imagenes=[
        "imagenes/campeonato.jpg",
        "imagenes/oeste.jpg",
        "imagenes/promocionales.jpg"
    ]
    var flecha1= document.getElementById("flecha1");
    var flecha2= document.getElementById("flecha2");

flecha1.addEventListener("click", cambiarDerecha)
flecha2.addEventListener("click", cambiarIzquierda)

function cambiarDerecha(){
    if (indiceImagen<2){
        indiceImagen=indiceImagen+1;
    }
    else{
        indiceImagen=0;
    }
    document.slider.src=imagenes[indiceImagen];
    clearInterval(t);
    slider();
}

function cambiarIzquierda(){
    if (indiceImagen>0){
        indiceImagen=indiceImagen-1;
    }
    else{
        indiceImagen=2;
    }
    document.slider.src=imagenes[indiceImagen]; 
    clearInterval(t);
    slider();  
}
    
     function cambiarImagenes(){
  
if (indiceImagen<2){
    indiceImagen++;
}
else{
    indiceImagen=0;
}

        document.slider.src=imagenes[indiceImagen];  

     }
function slider(){
   t= setInterval(cambiarImagenes, 6000);
}

slider();




}