$(document).ready(function() {
/*Redireccion para logearse */

  $('.btn-log').click(function() {
    window.location.href = '../views/log-in.html';
});

  /* Funcion para redireccionar la vista al formulario */    
  $('.btn-sign').click(function() {
    window.location.href = '../views/sign-up.html';   
  });
  
  /* Función que retorna a la vista splash */
  $('.logo').click(function() {
    window.location.href = '../index.html';
  });
});
  
