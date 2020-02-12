<?php
include 'connect.php';

$res = "<tr><td>Имя </td><td> Фамилия </td></tr></br>";

$q = mysqli_query($link,"SELECT * FROM user")->fetch_all(MYSQLI_ASSOC);

foreach ($q as $item){
    $res .= "<tr><td> ".$item['name']."</td><td> ".$item['surname']."</td></tr>";
}

echo $res;