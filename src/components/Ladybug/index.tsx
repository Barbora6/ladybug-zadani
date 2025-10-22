import "./style.css";

export type Direction = "up" | "right" | "down" | "left";

interface LadybugState {
  posX: number;
  posY: number;
  orientation: Direction;
}

export const Ladybug = ({ posX, posY, orientation }: LadybugState) => {
  return (
    <div
      className={`ladybug ladybug--${orientation}`}
      style={{
        top: `${posX}px`,
        left: `${posY}px`
      }}
    />
  );
};

export default Ladybug;
