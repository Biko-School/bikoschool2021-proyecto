import { Link } from "react-router-dom";

export const NavigationBar = () => {
  const memeId: string = "l0DEJovrRP58i5T1K";

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/memeSheet">Sheet</Link>
          </li>
          <li>
            <Link to={`/memeSheet/${memeId}`} key={memeId}>
              See meme with ID: {memeId}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default NavigationBar;
