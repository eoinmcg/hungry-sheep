export default function Cloud(props) {
  return (
    <div className={`cloud ${props.size}`}
        style={{top: props.top + 'px'}}>
    </div>
  )
}
