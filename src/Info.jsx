import { Link } from 'react-router-dom';

const Info = () => {

  return (
    <div className="game splash info">
      <h2 className="logo">Info</h2>

      <p>
        By <a href="https://eoinmcgrath.com">eoinmcg</a> <br />
        <a href="https://reactjam.com">for React Jam, spring 2024</a>
      </p>


      <p>
        <a href="https://www.zapsplat.com/" target="_blank">
        SFX & Music from Zapsplat.com
          </a>
      </p>
      <Link className="btn" to="/">Back</Link>
    </div>
  )

}

export default Info;
