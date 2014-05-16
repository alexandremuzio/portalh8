$(document).ready(
	function () {
		$("#addFormSubmit").click(
				function () {

				    var formData = $("#addForm").serializeArray();
//
				    ///////////////////////////////////////q
//
				    //$("#response").html(formData.first_name + " adicionado com sucesso.");
				    //$("#addForm").fadeOut(function () { $("#success").fadeIn(); });
//
				    ///////////////////////////////////////////	
				    //
				    //
				    $.ajax({
				    		type: "POST",
				    		url : "",
				    		data: formData,
				    		success: function (response) {
				    			if(response.success){
				    				$("#response").html(response.name + " adicionado com sucesso.");
				    				$("#addForm").fadeOut(function () { $("#success").fadeIn(); });
				    			}
				    			else{
				    			}
				    		}
				    	})
				}
			);
		}
	);

function readURL(input){
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
}