import logo from "../../../images/Logo.png";
import { Title } from "../Title/Title";
import "./Header.css";

export const Header = () => (
  <div className="header">
    <img src={logo} alt="logo" width="55.88" height="61.75" />
    <Title size="H1" weight="ExtraBold" text="GIFFAFFINITY" />
  </div>
);

export default Header;
