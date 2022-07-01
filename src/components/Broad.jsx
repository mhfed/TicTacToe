import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Square from "./Square";

const Game = () => {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState("O");

  const chooseSquare = (square) => {
    setBoard(
      board.map((val, index) => {
        if (index == square && val == "") {
          return player;
        }
        return val;
      })
    );
  };

  useEffect(() => {
    if (player == "O") {
      setPlayer("X");
    } else {
      setPlayer("O");
    }
  }, [board]);
  return (
    <Board>
      {board.map((item, index) => (
        <Square
          key={index}
          val={board[index]}
          chooseSquare={() => chooseSquare(index)}
        />
      ))}
    </Board>
  );
};
const Board = styled.div`
  max-width: 610px;
  max-height: 610px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 8px;
`;
export default Game;
