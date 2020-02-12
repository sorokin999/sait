var php_url = "php/add.php";

$("#regis").on("click",function(event){
    event.preventDefault();
    var form_user = new FormData();
    form_user.append('name',$("#namee").val());
    form_user.append('sur',$("#surnamee").val());
    add_user(form_user,php_url);
})


function add_user(ajax_form,url){
    $.ajax({
        url:url,
        type:"POST",
        dataType:"text",
        data:ajax_form,
        cache:false,
        contentType:false,
        processData:false,
        success: function (response){
            Swal.fire(response);
        }
    })
}