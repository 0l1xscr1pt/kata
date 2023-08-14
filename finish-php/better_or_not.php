<?php
function length($string) {
    $i = 0;

    while (isset($string[$i])) {
        $i++;
    }
    return $i;
}

function betterThanAverage($classPoints, $yourPoints) {
    $length = length($classPoints);
    $average = 0;

    for ($i = 0; $i < $length; $i++) {
        $average += $classPoints[$i];
    }
    $average /= $i;
    if ($average < $yourPoints) {
        return true;
    }
    return false;
}
?>