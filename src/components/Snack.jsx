export default function Snack(props) {
  return (
    <div className={`apple fruit ${props.munched === true ? 'munched' : ''}`}
      style={{top: props.top + 'px'}}>
    </div>
  )

}

