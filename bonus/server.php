<?php 

$todo_string = file_get_contents('./todo.json');

header('Content-Type: application/json');

echo $todo_string;

?>