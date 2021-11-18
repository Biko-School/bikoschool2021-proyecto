import { Text } from "../Text/Text";
import arrow from "../../../images/Arrow.png";

export const Title = () => (
  <div className="App__SectionTitle">
    <img src={arrow} alt="logo" width="25" height="20" />
    <Text size="H3" weight="Bold" text="Los giffs más trendings del momento" />
  </div>
);