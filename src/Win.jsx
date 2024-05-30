import { Link } from 'react-router-dom';
import Confetti from 'react-confetti';

const Win = () => {

  window.sessionStorage.setItem('level', 0);

  return (
    <>
    <Confetti />
    <div className="game splash win">
      <h2 className="logo">Victory!</h2>

      <p>
        You're the baa-dest!
      </p>

      <Link className="btn" to="/">Back</Link>
    </div>
    </>
  )

}

export default Win;
