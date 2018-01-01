$(document).ready(function() {
  /* Funcion para redireccionar la vista al formulario */    
  $('.btn-sign').click(function() {
    window.location.href = '../views/register.html';   
  });
  
  /* Función que retorna a la vista splash */
  $('.logo').click(function() {
    window.location.href = '../index.html';
  });
});
  
