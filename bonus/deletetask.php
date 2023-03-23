<?php 

$todo_string = file_get_contents('./todo.json');

$tasks = json_decode($todo_string, true);


if(isset($_POST['delete'])) {
    unset($tasks[$_POST['delete']]);
}


$new_task_string = json_encode($tasks);
file_put_contents('./todo.json', $new_task_string);

header('Content-Type: application/json');

echo $new_task_string;

?>