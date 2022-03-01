<?php

header('Access-Control-Allow-Headers: Access-Control-Allow-Origin, Content-Type');
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json, charset=utf-8');

//loop through and echo all numbers 1-100 but if it divides into 3 echo "Coating Damage"
$components = Array();

for($i = 1;$i<=100;$i++){
	
	
	if($i % 3 == 0 && $i % 5 == 0){ // divides by 3 and 5
		array_push($components, "Coating Damage and Lightning Strike");
	}elseif($i % 3 == 0){ //divides by 3
		array_push($components, "Coating Damage");
	}elseif($i % 5 == 0){ //divides by 5
		array_push($components, "Lightning Strike");
	}else{
		array_push($components, strval($i)); // convert nimber $i to a string
	}
}

echo json_encode($components);
?>