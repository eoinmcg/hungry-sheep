import Sheep from "../components/Sheep";
import Snake from "../components/Snake";
import Snack from "../components/Snack";
import Poo from "../components/Poo";

export default function Level3(props) {

  return (
    <div className="level level3">
      <Snack top="12" munched={props.munched} />

      <Snake top="100" pos="right" />
      <Poo top="250" pos="right" />
      <Snake top="350" pos="left" />
      <Poo top="450" pos="left" />

      <Sheep left="140" top="440"  hit={props.sheepHit} />
    </div>
  );
}
