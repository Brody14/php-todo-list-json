<?php 

$todo_string = file_get_contents('./todo.json');

$tasks = json_decode($todo_string, true);


$index = isset($_POST['edit']) ? $_POST['edit']  : null;

if(isset($index)) {
    if($tasks[$index]['done'] === false){
        $tasks[$index]['done'] = true;
    }else {
        $tasks[$index]['done'] = false;
    }
}


$new_task_string = json_encode($tasks);
file_put_contents('./todo.json', $new_task_string);

header('Content-Type: application/json');

echo $new_task_string;

?>