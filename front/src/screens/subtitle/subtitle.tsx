import "./subtitle.css";
import Arrow from "./Arrow.png";

function Subtitle() {
  return (
    <div className="subtitle-container">
      <img className="subtitle-icon" src={Arrow} alt="flecha" />
      <h2 className="subtitle-text">Los guif más trendings del momento</h2>
    </div>
  );
}

export default Subtitle;
