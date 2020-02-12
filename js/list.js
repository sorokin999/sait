var php_url = "php/list";

function show_users(){
    $.ajax({
        url:php_url+".php",
        type:"GET",
        dataType:"html",
        success:function(response){
            $("#spisok").html(response);
        }
    })
}

