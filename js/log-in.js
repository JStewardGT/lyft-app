$(document).ready(function() {
  // Obteniendo el valor del ingreso del email  
  var emailStorage = JSON.parse(localStorage.getItem('email_new_user'));
  console.log(emailStorage);
  /* Comprobando que el email sea el mismo */

  /* Comprobando que el email sea el mismo */
  function email() {
    for (var i = 0; i < emailStorage.length; i++) {
      return $('#input-email').val() === emailStorage[i];
    }
  } 


  /* Si es correcto, se habilita el botón */
  $('#input-email').keyup(function allOk() {
    var emailVal = $('#input-email').val();
   

    if (email()) {
      $('.btn-log').prop('disabled', false);
    } else {
      $('.btn-log').prop('disabled', true);
    }
  });

  $('.btn-send').click(function() {
    $('#input-email').val('');
    window.location.href = '../views/home.html';
  });

  $('.btn-back').click(function() {
    $('#input-email').val('');
    window.location.href = '../views/home.html';
  });
});  
