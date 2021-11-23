import { Text } from "../Text/Text";
import logo from "../../../images/Logo.png";

export const Header = () => (
  <div className="header">
    <img src={logo} alt="logo" width="55.88" height="61.75" />
    <Text size="H1" weight="ExtraBold" text="GIFFAFFINITY" />
  </div>
);

export default Header;
