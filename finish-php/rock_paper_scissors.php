<?php
function rpc($player1, $player2) {
    if ($player1 === $player2)
        $result = "Draw!";
    else if ($player1 === "rock" && $player2 === "scissors")
        $result = "Player 1 won!";
    else if ($player1 === "scissors" && $player2 === "paper")
        $result = "Player 1 won!";
    else if ($player1 === "paper" && $player2 === "rock")
        $result = "Player 1 won!";
    else if ($player2 === "paper" && $player1 === "rock")
        $result = "Player 2 won!";
    else if ($player2 === "scissors" && $player1 === "paper")
        $result = "Player 2 won!";
    else if ($player2 === "rock" && $player1 === "scissors")
        $result = "Player 2 won!";
    return $result;
}
?>