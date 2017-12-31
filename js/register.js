$(document).ready(function() {
  /* Función que comprueba cuando el usuario sale del input */
  $('#input-phone').keyup(function() {
    var form = $(this).parents('#form');
    /* Guardando en una función la variable de comprobar el formulario*/
    var check = checkCampos(form);
    if (check) {
      /* Habilitando el botón */ 
      $('.next').prop('disabled', false);
    } else {
      $('.next').prop('disabled', true);
    }
  });


  /* Función para comprobar si el input está llenado correctamente */
  function checkCampos(obj) {
    /* Se inicializa con el input vacío */  
    var inputFull = false;
    /* Va a buscar que cada input este lleno */
    obj.find('input').each(function() {
      var $this = $(this);
      /* Condicionando que la longitud del valor del input debe ser 10 */
      if ($this.val().length === 10) {
        inputFull = true;
        return true;
      }
    });

    if (inputFull === false) {
      return false;
    } else {
      return true;
    }
  };

  /* Modal con el código */
  $('.next').click(function() {
    var number = Math.round(Math.random() * 999);  
    $('.code').html('LAB-' + number);
    /* Utilzando localStorage para guardar el código dado */
    localStorage.setItem('code', number);
  });

  
  /* Redireccionar a la siguiente vista */
  $('.btn-send').click(function() {
    window.location.href = '../views/verify.html';
  });
});