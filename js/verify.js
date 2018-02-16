$(document).ready(function() {

// Obteniendo el valor de la selección del select de la vista principal.  
  var firstCode = localStorage.getItem('code');
  console.log(firstCode);

  /* Función para reenviar código a través de un modal */
$('.re-send').click(function() {
    var secondNumber = Math.round(Math.random() * 999);  
    $('.re-code').html('LAB-' + secondNumber);
    /* Utilzando localStorage para guardar el segundo código dado */
    localStorage.setItem('secondCode', secondNumber);
  });


  // Función para verificar que el input ha sido llenado */
  $('.input-code').keyup(function() {
    var form = $(this).parents('#form');
    /* Guardando en una función la variable de comprobar el formulario*/
    var check = checkCampos(form);
    if (check) {
    /* Habilitando el botón de next en caso el input este correcto*/ 
      $('.next').prop('disabled', false);
    } else {
      $('.next').prop('disabled', true);
    }
  });


  /* Función para comprobar si el código coincide */
  function checkCampos(obj) {
    /* Se inicializa con el input vacío */  
    var inputFull = false;
    /* Va a buscar que cada input este lleno */
    obj.find('input').each(function() {
      /* Recuperando lo guardado con localStorage */  
      var secondCode = localStorage.getItem('secondCode');  
      var $this = $(this);
      /* Condicionando que el valor del input sea igual al código enviado o al reenviado, para activar el botón */
      if ($this.val() === firstCode || secondCode) {
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

  /* Redireccionar a la siguiente vista */
  $('.next').click(function() {
    window.location.href = '../views/user-register.html';
    $('.input-code').val('');
  });

  /* Volver a la vista anterior */
  $('.btn-reg').click(function() {
    window.location.href = '../views/sign-up.html';
  });
});