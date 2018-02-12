$(document).ready(function() {
  /* Función que comprueba cuando el usuario sale del input */
  $('#input-phone').keyup(function() {
    var form = $(this).parents('#form');
    /* Guardando en una función la variable de comprobar el formulario*/
    var check = checkFields(form);
    if (check) {
      /* Habilitando el botón */ 
      $('.next').prop('disabled', false);
    } else {
      $('.next').prop('disabled', true);
    }
  });
 
  /* Función que determina los códigos postales de acuerdo a la selecci+on */
  $('.select').change(function() {
    var $selectVal = $('.select').val();
    $('.input-group-addon').empty();
    if ($selectVal === 'peru') {
      $('.input-group-addon').append('51');
    } else if ($selectVal === 'argentina') {
      $('.input-group-addon').append('54');
    } else if ($selectVal === 'bolivia') {
      $('.input-group-addon').append('591');
    } else if ($selectVal === 'brasil') {
      $('.input-group-addon').append('55');
    } else if ($selectVal === 'chile') {
      $('.input-group-addon').append('56');
    }
  });


  /* Función para comprobar si el input está llenado correctamente */
  function checkFields(obj) {
    /* Se inicializa con el input vacío */  
    var inputFull = false;
    /* Va a buscar que cada input este lleno */
    obj.find('input').each(function() {
      var $this = $(this);
      /* Condicionando que la longitud del valor del input debe ser 10 */
      if ($this.val().length === 8) {
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
    if (number <= 99) {
      number++;
    } 
    $('.code').html('LAB-' + number);
     
    
    /* Utilzando localStorage para guardar el código dado */
    localStorage.setItem('code', number);
  });

  
  /* Redireccionar a la siguiente vista */
  $('.btn-send').click(function() {
    window.location.href = '../views/verify.html';
    /* Limpiando el select y el input al volver atrás */
    $('select').change('pais');
    $('.input-phone').val('');
  });

  /* Volver a la vista anterior */
  $('.btn-log').click(function() {
    window.location.href = '../views/log-in.html';
  });
});