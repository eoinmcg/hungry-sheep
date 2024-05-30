import Sheep from "../components/Sheep";
import Snack from "../components/Snack";

import Poo from "../components/Poo";
import Hornet from "../components/Hornet";

export default function Level4(props) {

  return (
    <div className={`level level1`}>
      <Snack top="12" munched={props.munched} />

      <Hornet top="50" pos="swoop-left" />
      <Hornet top="50" pos="swoop-right" />


      <Sheep left="140" top="440" hit={props.sheepHit} />
    </div>
  );
}

