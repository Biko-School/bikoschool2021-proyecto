export type fontSizes = "H1" | "H2" | "H3" | "H4" | "Base" | "Small";
export type fontWeights = "Light" | "Normal" | "Bold" | "ExtraBold";

export const getFontSize = (size: fontSizes) => {
  const sizeMapper = {
    H1: "41.83px",
    H2: "36.41px",
    H3: "25.63px",
    H4: "18.00px",
    Base: "16.00px",
    Small: "12.64px",
  };
  return sizeMapper[size];
};

export const getFontWeight = (weight: fontWeights) => {
  const weightMapper = {
    Light: 300,
    Normal: 400,
    Bold: 700,
    ExtraBold: 800,
  };
  return weightMapper[weight];
};
