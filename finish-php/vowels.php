<?php
function lengthTo($list) {
    $i = 0;
    while (isset($list[$i]))
        $i++;
    return $i;
}

function getCount($string) {
    $validLetters = "aeiouy";
    $count = 0;
    $i = 0;

    while ($i < lengthTo($string)) {
        $j = 0;
        while ($j < lengthTo($validLetters)) {
            if ($string[$i] === $validLetters[$j])
                $count++;
            $j++;
        }
        $i++;
    }
    return $count;
}