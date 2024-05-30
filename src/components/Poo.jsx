export default function Poo(props) {
  return (
    <div className={`enemy poo ${props.pos}`}
        style={{top: props.top + 'px'}}>
    </div>
  )
}
