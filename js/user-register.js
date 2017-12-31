$(document).ready(function() {
  /* Función que comprueba cuando el usuario sale del input */
  $('input').keyup(function() {
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


  /* Función para comprobar si todos los input están llenados correctamente e ir habilitándolos uno por uno */
  function checkCampos() {
    /* Llamando a las variables */
    var inputFull = false;
    var $inputName = $('#user-name');
    var $inputLastName = $('#user-last-name');
    var $email = $('#inputEmail3');
    var $checkbox = $('#checkbox');

    /* Validando el input del nombre */
    if ($inputName.val() !== '' && $inputName.val().length >= 3) {
      /* Si la condición se cumple, se habilita el siguiente input y se le aplica focus */
      $inputLastName.prop('disabled', false);
      $inputLastName.addClass('focus-input');
      /* Si no se cumple el siguiente input sigue desabilitado */
    } else {
      $inputLastName.prop('disabled', true);
    } if ($inputLastName.val() !== '' && $inputLastName.val().length >= 3) {
      /* Si la condición se cumple, se habilita el siguiente input y se le aplica focus */
      $email.prop('disabled', false);
      $email.addClass('focus-input');
      $('#checkbox').prop('disabled', false);

      /* Función de verificación de email */
      function verifyEmail($email) {
        // console.log(email);
        // Guardando el valor del input del email.
        var email = $(email).val();
        /* Usando una expresión regular para condicionar los caracteres que se ingresan en el input del email  */
        var caract = new RegExp(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/);
        /* Validando los caracteres ingresados en el input del email */
        if (caract.test(email) === false) {
          email.prop('disabled', false);             
        } else {
          email.prop('disabled', true);
        }
      }
    } else {
      $email.prop('disabled', true);
    }
    /* Función de comprobación del checkbox */
    $($checkbox).click(function() {
      if ($checkbox.is(':checked') === true) {
        $('.next').prop('disabled', false);
      } else {
        alert('Debe aceptar las condiciones');
        event.preventDefault();
        $('.next').prop('disabled', true);
      }
    });    
  }
});