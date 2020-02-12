<?php
include 'connect.php';
$a = $_POST['id'];
$a = (int)substr($a,0,strpos($a,":")-1);

$q = mysqli_query($link,"DELETE FROM `user` WHERE id =$a" );
if ($q)
echo 'Пользователь удален';
else
echo 'Error';