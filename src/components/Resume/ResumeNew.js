import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AiOutlineDownload } from "react-icons/ai";
import { HiDocumentText } from "react-icons/hi";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import pdf from "../../Assets/placeholder.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/20 text-[#00d4ff] text-sm font-medium mb-4">
            <HiDocumentText className="inline mr-2" />
            My Resume
          </span>
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Professional{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#7c3aed]">
              Resume
            </span>
          </h1>
          <p className="text-[#a3a3a3] max-w-2xl mx-auto mb-8">
            Download my resume to learn more about my professional experience and qualifications.
          </p>

          {/* Download Button */}
          <motion.a
            href={pdf}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] text-white font-semibold rounded-xl shadow-lg shadow-[#00d4ff]/25 hover:shadow-[#00d4ff]/40 transition-shadow"
          >
            <AiOutlineDownload className="text-xl" />
            Download CV
          </motion.a>
        </motion.div>

        {/* Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-8"
        >
          <div className="inline-block px-6 py-3 bg-[#f43f5e]/10 border border-[#f43f5e]/20 rounded-xl">
            <p className="text-[#f43f5e] text-sm font-medium">
              This is a placeholder resume - the actual CV will be uploaded soon!
            </p>
          </div>
        </motion.div>

        {/* PDF Viewer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center"
        >
          <div className="bg-[#1a1a1a]/50 border border-white/10 rounded-2xl p-4 md:p-8 backdrop-blur-sm">
            <Document
              file={pdf}
              className="flex flex-col items-center gap-4"
            >
              <Page
                pageNumber={1}
                scale={width > 786 ? 1.5 : 0.6}
                className="shadow-2xl rounded-lg overflow-hidden"
                renderTextLayer={false}
              />
            </Document>
          </div>
        </motion.div>

        {/* Bottom Download Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.a
            href={pdf}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-white font-medium rounded-xl hover:border-[#00d4ff]/30 hover:bg-[#00d4ff]/5 transition-all"
          >
            <AiOutlineDownload className="text-lg" />
            Download CV
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

export default ResumeNew;
