import { Link } from 'react-router-dom';

const Init = () => {

  return (
    <div className="game splash init" onClick={start}>
      <h2 className="logo">Info</h2>

      <Link className="btn" to="/">Back</Link>
    </div>
  )

}

export default Init;
