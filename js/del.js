
var php_url = "php/del.php"
var list_url = "php/list2.php"

function shtob_udalit(){
    $.ajax({
        url:list_url,
        type:"GET",
        dataType:"html",
        success:function(response){
            $("#table").html(response);
        }
    })
}

$("#beru").on("click",function(event){
    event.preventDefault();
    var form_user = new FormData();
    form_user.append('id',$("#table").val());
    del(form_user,php_url);
})

function del(ajax_form,url){
    $.ajax({
        url:url,
        type:"POST",
        data:ajax_form,
        dataType:'text',
        cache: false,
        contentType: false,
        processData: false,
        success: function (response){
            Swal.fire(response);
        }
    })
}