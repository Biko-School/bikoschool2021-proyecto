interface TextProps {
  size: "H1" | "H2" | "H3" | "H4" | "base" | "small";
  weight: "Light" | "Normal" | "Bold" | "ExtraBold";
  text: string;
}

export const Text = ({ size, weight, text }: TextProps) => {
  return (
    <div
      style={{
        fontSize: sizeHeader(size),
        color: "white",
        marginLeft: "5px",
        fontWeight: weightHeader(weight),
      }}
    >
      {text}
    </div>
  );
};

export default Text;

const sizeHeader = (size = "") => {
  switch (size) {
    case "H1":
      return 42;
    case "H2":
      return 36;
    case "H3":
      return 26;
    case "H4":
      return 18;
    case "base":
      return 16;
    case "small":
      return 13;
    default:
      return;
  }
};

const weightHeader = (weight = "") => {
  switch (weight) {
    case "Light":
      return 300;
    case "Normal":
      return 400;
    case "Bold":
      return 700;
    case "ExtraBold":
      return 800;
    default:
      return;
  }
};
