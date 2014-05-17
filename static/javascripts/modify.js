$(document).ready(
  function() {
    $('#remove').click(
      function(){
        alert('Você tem certeza que quer remover o usuário completamente?');
      }
    );
  
    $('#save').click(
      function(){
        var objects = $('form').serializeArray();
        objects.push({name: 'action', value: 'save'});
        alert('Salvo com sucesso.');
      }
    );
  
    $('#box').hover(
      function () {         
            $(this).css('cursor', 'pointer');
            $('#info').stop().animate({
            top:'-20px'
          }, 200);
      },
      function () {
          $('#info').stop().animate({
            top:'0px'
          }, 200);
        }
      );

      $('#image').click(
        function () {
            $('#photo').trigger('click');
            return false;
        }
      );
    
      $('#photo').change(
        function () {
          var input = $(this);
            if (input[0].files && input[0].files[0]) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    $('#image').attr('src', e.target.result);
                };
                reader.readAsDataURL(input[0].files[0]);
            }
        }
      );
  } 
);