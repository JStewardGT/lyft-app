$(document).ready(function() {
  /* Evento para que al dar click en el logo, se retorne a la vista anterior */  
  $('.logo').click(function() {
    window.history.back();
  });

  $('.check').addClass('animated fadeInDown');
});