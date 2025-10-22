import { useState } from "react";
import { Ladybug } from "./components/Ladybug";
import type { Direction } from "./components/Ladybug";

const STEP_SIZE = 25;

interface LadybugState {
  posX: number;
  posY: number;
  orientation: Direction;
}

export const App = () => {
  // const [posX, setPosX] = useState<number>(100);
  // const [posY, setPosY] = useState<number>(100);
  // const [orientation, setOrientation] = useState<Direction>("right");

  const [ladybugState, setLadybugState] = useState<LadybugState>({
    posX: 100,
    posY: 100,
    orientation: "right"
  });

  const handleKeyUp = ({ code }: React.KeyboardEvent<HTMLDivElement>) => {
    if (code === "ArrowUp") {
      setLadybugState({
        ...ladybugState,
        orientation: "up",
        posX: ladybugState.posX - STEP_SIZE
      });
    } else if (code === "ArrowLeft") {
      setLadybugState({
        ...ladybugState,
        orientation: "left",
        posY: ladybugState.posY - STEP_SIZE
      });
      // setOrientation("left");
      // setPosY(posY - STEP_SIZE);
    } else if (code === "ArrowRight") {
      setLadybugState({
        ...ladybugState,
        orientation: "right",
        posY: ladybugState.posY + STEP_SIZE
      });
      // setOrientation("right");
      // setPosY(posY + STEP_SIZE);
    } else if (code === "ArrowDown") {
      setLadybugState({
        ...ladybugState,
        orientation: "down",
        posX: ladybugState.posX + STEP_SIZE
      });
      // setOrientation("down");
      // setPosX(posX + STEP_SIZE);
    }
  };

  return (
    <div tabIndex={-1} className="field" onKeyDown={handleKeyUp}>
      <header>Kliknutím kamkoliv začneš hru</header>
      <Ladybug {...ladybugState} />
      {/* <Ladybug
        posX={ladybugState.posX}
        posY={ladybugState.posY}
        orientation={ladybugState.orientation}
      /> */}
    </div>
  );
};

export default App;
