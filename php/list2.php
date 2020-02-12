<?php

include 'connect.php';

$q = mysqli_query($link,"SELECT * FROM user")->fetch_all(MYSQLI_ASSOC);
$res="";
foreach ($q as $item){
    $res .= "<option>".$item['id']." : ".$item['name']." ".$item['surname']."</option>";
}

echo $res;