import { createElement } from "react";

export const renderPDF = async (props) => {
  console.log("helloo ", props);
  const { pdf } = await import("@react-pdf/renderer");
  const { PDF } = await import("./PDF");

  return pdf(createElement(PDF, props)).toBlob();
};
