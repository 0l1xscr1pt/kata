<?php
function booleanToString($boolean) {
  $string = "";
  if ($boolean === true)
    $string = "true";
  else
    $string = "false";
  return $string;
}
?>