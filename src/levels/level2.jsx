import Sheep from "../components/Sheep";
import Snack from "../components/Snack";
import Snake from "../components/Snake";
import Poo from "../components/Poo";

export default function Level2(props) {

  return (
    <div className="level level2">
      <Snack top="12" munched={props.munched} />

      <Snake top="100" pos="left" />
      <Snake top="250" pos="right" />
      <Snake top="350" pos="left" />

      <Sheep left="140" top="440"  hit={props.sheepHit} />
    </div>
  );
}
