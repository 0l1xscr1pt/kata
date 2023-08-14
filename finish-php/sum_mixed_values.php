<?php
function length($list) {
    $i = 0;

    while (isset($list[$i])) {
        $i++;
    }
    return $i;
}

function sum_mix($number) {
    $i = 0;
    $result = 0;
    $length = length($number);

    while ($i < $length) {
        $result += $number[$i];
        $i++;
    }
    return $result;
}
?>