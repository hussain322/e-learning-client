import jsPDF from "jspdf";
import React from "react";

const PdfFile = ({ course }) => {
  const { title, description, img } = course;

  const pdfGenerate = () => {
    const doc = new jsPDF("landscape", "px", "a4", "false");

    doc.text(60, 60, `Title : ${title}`);
    doc.text(60, 80, `Description: ${description.slice(0, 100)}`);
    doc.text(60, 100, `${description.slice(101, 200)}`);
    doc.text(60, 120, `${description.slice(201, 300)}`);
    doc.save("course.pdf");
  };
  return (
    <div>
      <button onClick={pdfGenerate} className="btn btn-primary mr-20">
        Download Pdf
      </button>
    </div>
  );
};

export default PdfFile;
