"use client";
// CertificatePage.js
import React, { useRef, forwardRef } from "react";
import CertificateComponent from "./component";
import { useSearchParams } from "next/navigation";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function CertificatePage() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const date = searchParams.get("date");

  const downloadCertificate = () => {
    html2canvas(certRef.current, {
      windowWidth: certRef.current.scrollWidth,
      windowHeight: certRef.current.scrollHeight,
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("l", "mm", "a4"); // set PDF to A4 size in landscape orientation
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("certificate.pdf");
    });
  };

  const certRef = useRef();

  return (
    <div className="container mx-auto mt-10 text-center min-h-screen">
      <div className="p-4">
        <CertificateComponent fullName={name} date={date} ref={certRef} />

        <button
          onClick={downloadCertificate}
          className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 mt-4 inline-block"
        >
          Download Certificate
        </button>
      </div>
    </div>
  );
}

export default CertificatePage;
