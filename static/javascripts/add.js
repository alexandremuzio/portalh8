$(document).ready(
	function () {
		$('#addFormSubmit').click(
			function () {
	    		var formData = $("#addForm").serialize();
//
				    ///////////////////////////////////////
//
				    //$("#response").html(formData.first_name + " adicionado com sucesso.");
				    //$("#addForm").fadeOut(function () { $("#success").fadeIn(); });
//
				    ///////////////////////////////////////////	
				    //
				    //
				$.ajax({
					type: 'POST',
					url : '',
					data: formData,
					success: function (response) {
						if(response.success){
							$('#response').html(response.name + ' adicionado com sucesso.');
							$('#addForm').fadeOut(function () { $('#success').fadeIn(); });
						}
						else{
						}
					}
				})
			}
		);
		
		$('#image').click(
			function () {
       			$('#photo').trigger('click');
    			return false;
    		}
    	);

    	$('#box').hover(
    		function () {
    			$(this).css('cursor', 'pointer')
     			$('#info').stop().animate({
    				top:'-20px'
  				}, 200);
			},
			function() {
  				$('#info').stop().animate({
    				top:'0px'
  				}, 200);
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

/*function readURL(input){
	if (input.files && input.files[0]){
        var reader = new FileReader();
        reader.onload = function (e){
            $('#image')
            .attr('src',e.target.result)
            .width(150)
            .height(150);
        };
        reader.readAsDataURL(input.files[0]);
    }
}*/