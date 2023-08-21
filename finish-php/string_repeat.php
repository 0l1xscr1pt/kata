<?php
function repeatString($number, $string) {
    $newString = "";

    for ($i = 0; $i < $number; $i++)
        $newString .= $string;
    return $newString;
}
?>