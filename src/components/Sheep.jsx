export default function Sheep(props) {
  return (
    <div className={`sheep
        ${props.hit === true ? 'hit' : ''}`}
      style={{top: props.top+'px', left: props.left+'px'}}
    >
    </div>
  );
}

