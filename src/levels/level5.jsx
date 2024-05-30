import Sheep from "../components/Sheep";
import Snack from "../components/Snack";

import Poo from "../components/Poo";
import Hornet from "../components/Hornet";
import Snake from "../components/Snake";

export default function Level5(props) {

  return (
    <div className={`level level5`}>
      <Snack top="12" munched={props.munched} />


      <Hornet top="50" pos="left" />
      <Hornet top="50" pos="right" />
      <Snake top="250" pos="left" />
      <Poo top="300" pos="right" />


      <Sheep left="140" top="440" hit={props.sheepHit} />
    </div>
  );
}


