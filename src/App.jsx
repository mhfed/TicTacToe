import { useState } from "react";
import styles from "./App.module.css";
import styled from "styled-components";
import Game from "./components/Broad";

function App() {
  return (
    <div className={styles.App}>
      <Game></Game>
    </div>
  );
}

export default App;
