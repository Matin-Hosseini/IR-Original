export const pdfTableLayout = {
  fillColor: function (rowIndex) {
    return rowIndex % 2 === 0 ? "#e9ecef" : null;
  },
  hLineWidth: function (i, node) {
    return 0.5;
  },
  vLineWidth: function () {
    return 0.5;
  },
  hLineColor: function () {
    return "#000";
  },
  vLineColor: function () {
    return "#000";
  },
};
