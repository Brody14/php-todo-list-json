<?php 

$todo_string = file_get_contents('./todo.json');

$tasks = json_decode($todo_string, true);

$new_task = isset($_POST['task']) ? $_POST['task'] : null;

$response = [
    'text' => $new_task,
    'done' => false,
];


if($new_task !== null && trim($new_task) !== '') {
    $tasks[] = $response;
}

$index = isset($_POST['edit']) ? $_POST['edit']  : null;

if(isset($index)) {
    if($tasks[$index]['done'] === false){
        $tasks[$index]['done'] = true;
    }else {
        $tasks[$index]['done'] = false;
    }
}

if(isset($_POST['delete'])) {
    unset($tasks[$_POST['delete']]);
}


$new_task_string = json_encode($tasks);
file_put_contents('./todo.json', $new_task_string);

header('Content-Type: application/json');

echo $new_task_string;

?>