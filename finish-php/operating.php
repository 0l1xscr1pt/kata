<?php
function basicOp($operation, $value1, $value2) {
    switch ($operation) {
        case '+' :
            $calcul = $value1 + $value2;
            break;

        case '-' :
            $calcul = $value1 - $value2;
            break;

        case '*' :
            $calcul = $value1 * $value2;
            break;

        case '/' :
            $calcul = $value1 / $value2;
            break;

        case '%' :
            $calcul = $value1 % $value2;
            break;

        default :
            break;
    }
    return $calcul;
}
?>