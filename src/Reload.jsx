import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Reload = () => {

  const navigate = useNavigate();

  const replay = () => {
    navigate('/play');
  }

  useEffect(() => {
    replay();
  })


  return (
    <div className="game info">
    </div>
  )

}

export default Reload;
