import React from "react";

import "./PageContainer.css";

export const PageContainer: React.FC = ({ children }) => {
  return <div className="page_container">{children}</div>;
};
