const PDFDocument = require("pdfkit");
const fs = require("fs");

const doc = new PDFDocument();
doc.pipe(fs.createWriteStream("example.pdf"));

doc.font("Vazir.ttf").text("این یک متن فارسی است.", 100, 100);
doc.end();
