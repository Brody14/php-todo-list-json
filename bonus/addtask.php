<?php 

$todo_string = file_get_contents('./todo.json');

$tasks = json_decode($todo_string, true);

$new_task = isset($_POST['task']) ? $_POST['task'] : null;


if(trim($new_task) && is_string($new_task)) {
    $response = [
        'text' => $new_task,
        'done' => false,
    ];
    $tasks[] = $response;
}


$new_task_string = json_encode($tasks);
file_put_contents('./todo.json', $new_task_string);

header('Content-Type: application/json');

echo $new_task_string;

?>