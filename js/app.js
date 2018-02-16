$(document).ready(function() {
    
  /* Funcion para animar el logo */
  setInterval(function logo() {
    $('.logo').animate({width: '40%'}, 'slow');
    $('.logo').animate({width: '50%'}, 'siwng');
  }, 2000);
    
  setTimeout(function() {
    window.location.href = 'views/home.html';
  }, 5000); 
});


