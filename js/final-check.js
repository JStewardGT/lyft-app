$(document).ready(function() {
  /* Evento para que al dar click en el logo, se retorne a la vista anterior */  
  $('.logo').click(function() {
    window.location.href = '../views/home.html';
  });

  $('.check').addClass('animated fadeInDown');
});