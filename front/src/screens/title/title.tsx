import "./title.css";
import Logo from "./Logo.png";

function Title() {
  return (
    <div className="title-container">
      <img className="title-logo" src={Logo} alt="logo" />
      <a href="." className="title-text">
        GUIFAFFINITY
      </a>
    </div>
  );
}

export default Title;
