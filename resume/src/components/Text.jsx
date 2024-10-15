import { useState } from "react";
import { PDFDocument } from "pdf-lib";

export default function Text({ setExtractedText }) {
  const [pdfFileData, setPdfFileData] = useState(null);

  async function readFileAsync(file) {
    return new Promise((resolve, reject) => {
      let reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsArrayBuffer(file);
    });
  }

  async function extractTextFromPdf(arrayBuff) {
    const pdfDoc = await PDFDocument.load(arrayBuff);
    let extractedText = "";

    const pages = pdfDoc.getPages();
    for (let page of pages) {
      extractedText += await page.getTextContent();
    }
    return extractedText;
  }

  const onFileSelected = async (e) => {
    const fileList = e.target.files;
    if (fileList?.length > 0) {
      const pdfArrayBuffer = await readFileAsync(fileList[0]);
      const extractedText = await extractTextFromPdf(pdfArrayBuffer);
      setExtractedText(extractedText);
    }
  };

  return (
    <>
      <h1>Upload Resume PDF</h1>
      <input type="file" accept=".pdf" onChange={onFileSelected} />
    </>
  );
}
