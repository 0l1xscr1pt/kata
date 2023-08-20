function rps(player1, player2) {
    let result;

    if (player1 === player2)
        result = "Draw!";
    else if (player1 === "rock" && player2 === "scissors")
        result = "Player 1 won!";
    else if (player1 === "scissors" && player2 === "paper")
        result = "Player 1 won!";
    else if (player1 === "paper" && player2 === "rock")
        result = "Player 1 won!";
    else if (player1 === "scissors" && player2 === "rock")
        result = "Player 2 won!";
    else if (player1 === "paper" && player2 === "scissors")
        result = "Player 2 won!";
    else if (player1 === "rock" && player2 === "paper")
        result = "Player 2 won!";
    return result;
}