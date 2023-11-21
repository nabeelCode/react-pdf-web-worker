import { expose } from "comlink";
import "./workerShim";
let log = console.info;

const renderPDFInWorker = async (props) => {
  try {
    const { renderPDF } = await import("../renderPDF");
    return URL.createObjectURL(await renderPDF(props));
  } catch (error) {
    log(error);
    throw error;
  }
};

expose({ renderPDFInWorker: renderPDFInWorker });
