<?php

include 'connect.php';

$n = $_POST['name'];
$s = $_POST['sur'];

if (empty($n) || empty($s)){
    echo 'Проверьте данные';
}
else {
$q = mysqli_query($link,"INSERT INTO user (`name`,`surname`) VALUES ('".$n."','".$s."')");

if ($q)
    echo "Успешно!";

else
    echo mysqli_error($link);
    
}