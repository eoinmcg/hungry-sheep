export default function Hornet(props) {
  return (
    <div className={`hornet enemy ${props.pos}`}
        style={{top: props.top + 'px'}}>
    </div>
  )
}
