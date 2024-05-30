import Sheep from "../components/Sheep";
import Snack from "../components/Snack";

import Poo from "../components/Poo";
import Hornet from "../components/Hornet";

export default function Level1(props) {

  return (
    <div className={`level level1`}>
      <Snack top="12" munched={props.munched} />

      <Poo top="100" pos="right" />
      <Poo top="350" pos="left" />

      <Sheep left="140" top="440" hit={props.sheepHit} />
    </div>
  );
}
