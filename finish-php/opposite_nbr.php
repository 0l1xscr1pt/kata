<?php
function opposite($number) {
    $result = $number;
    if ($number > 0) {
        $result = $number - $number - $number;
        return $result;
    }
    else if ($number < 0)
        $result = $number * -1;
    return $result;
}
?>