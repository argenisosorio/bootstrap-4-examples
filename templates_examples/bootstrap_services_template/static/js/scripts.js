$(document).ready(function(){
  /*
  |--------------------------------------------
  | Función que permite la nevegación suave 
  | entre secciones por medio de enlaces ancla.
  |--------------------------------------------
  */
  $('a[href^="#"]').click(function() {
    var destino = $(this.hash);
    if (destino.length == 0) {
      destino = $('a[name="' + this.hash.substr(1) + '"]');
    }
    if (destino.length == 0) {
      destino = $('html');
    }
    $('html, body').animate({ scrollTop: destino.offset().top }, 500);
    return false;
  });
});