export default function Snake(props) {
  return (
    <div className={`enemy snake ${props.pos}`}
        style={{top: props.top + 'px'}}>
    </div>
  )
}
