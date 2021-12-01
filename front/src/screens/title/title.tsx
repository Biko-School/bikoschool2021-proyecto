import "./title.css";
import Logo from "./Logo.png";

function Title() {
  return (
    <div className="title-container">
      <img className="title-logo" src={Logo} alt="logo" />
      <h1 className="title-text">GUIFAFFINITY</h1>
    </div>
  );
}

export default Title;
