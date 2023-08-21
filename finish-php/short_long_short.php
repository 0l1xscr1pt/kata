<?php
function lengthTo($string) {
    $i = 0;
    while (isset($string[$i])) {
        $i++;
    }
    return $i;
}

function shortLongShort($string1, $string2) {
    $i = 0;
    $stringFinal = "";
    $length1 = lengthTo($string1);
    $length2 = lengthTo($string2);

    if ($length1 < $length2) {
        $stringFinal = $string1;

        $j = 0;
        $i = $length1;
        while ($i < ($length1 + $length2)) {
            $stringFinal[$i] = $string2[$j];
            $i++;
            $j++;
        }

        $j = 0;
        while ($i < (($length1 * 2) + $length2)) {
            $stringFinal[$i] = $string1[$j];
            $i++;
            $j++;
        }
    } else {
        $stringFinal = $string2;
        
        $j = 0;
        $i = $length2;
        while ($i < ($length1 + $length2)) {
            $stringFinal[$i] = $string1[$j];
            $i++;
            $j++;
        }

        $j = 0;
        while ($j < $length2) {
            $stringFinal[$i] = $string2[$j];
            $i++;
            $j++;
        }
    }
    return $stringFinal;
}

// if $string1 = "10" and $string2 = "223" return 1022310
// if $string1 = "223" and $string2 = "10" return 1022310
?>