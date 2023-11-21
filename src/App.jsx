import { useState } from "react";
import { faker } from "@faker-js/faker";
import { saveAs } from "file-saver";
import { wrap } from "comlink";
import Worker from "./workers/pdf.worker?worker";

function App() {
  const [data, setData] = useState([]);
  const [numRows, setNumRows] = useState(0);

  const generateFakeData = () => {
    const fakeData = [];
    for (let i = 0; i < numRows; i++) {
      fakeData.push({
        sInvNo: i,
        invoiceDate: faker.date.anytime().toString(),
        pcs: faker.number.int({ min: 1000, max: 100000 }),
        invAmount: faker.number.int({ min: 1000, max: 100000 }),
        transport: faker.company.name(),
        lrNo: faker.number.int({ min: 0, max: 100 }),
        lrDate: faker.date.anytime().toString(),
      });
    }
    setData(fakeData);
  };

  const generatePdf = async () => {
    const pdfWorker = wrap(new Worker());
    const blob = await pdfWorker.renderPDFInWorker({ data });
    saveAs(blob, "PDF");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <label>
        Number of Rows:
        <input
          type="number"
          value={numRows}
          defaultValue={0}
          onChange={(e) => setNumRows(parseInt(e.target.value))}
        />
      </label>
      {console.log("data ", data)}
      <button onClick={generateFakeData}>Generate Fake Data</button>

      <button onClick={generatePdf}>Generate PDF based on the Fake Data</button>
      {/* <RenderedPDFViewer
        style={{ backgroundColor: 'grey', width: '500px', height: '760px' }}
        data={data}
      /> */}
    </div>
  );
}

export default App;
