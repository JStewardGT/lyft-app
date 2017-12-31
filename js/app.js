$(document).ready(function() {
    
  /* Funcion para animar el logo */
  setInterval(function logo() {
    $('.logo').animate({width: '20%'}, 'slow');
    $('.logo').animate({width: '50%'}, 'siwng');
  }, 3000);
    
  setTimeout(function() {
    window.location.href = 'views/log-in.html';
  }, 5000); 
});
