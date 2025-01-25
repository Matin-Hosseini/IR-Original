import { conditions } from "./data.js";

import { shabnamFont, logoImage } from "./utils/binary-strings.js";
import textReverser from "./utils/funcs/textReverser.js";
import jalaliDate from "./utils/funcs/currentDate.js";

import {
  loanCalculation,
  separateNumberInput,
  showPaymentMonths,
  getNumberSeparatedInputValue,
  calculateGuaranteePrice,
  companyCalculation,
} from "./utils/funcs/loan-demo.js";

const productPriceElem = document.querySelector("#price-input");
const customPaymentElem = document.querySelector("#custom-prepayment");
const calculateBtn = document.querySelector("#calculate-btn");
const downloadPDFBtn = document.querySelector(".download-pdf");
const paymentMonthBtns = document.querySelectorAll(".loan-installments button");

showPaymentMonths(conditions);

separateNumberInput(productPriceElem);
separateNumberInput(customPaymentElem);

let allTableRows = [];

const priceCalculationHandler = () => {
  const conditionType = document.querySelector(
    ".condition-types input[type='radio']:checked"
  ).value;

  const targetConditions = conditions[conditionType];

  const productPrice = getNumberSeparatedInputValue(productPriceElem);
  const customPrepaymentPrice = getNumberSeparatedInputValue(customPaymentElem);

  if (productPrice === 0) {
    Swal.fire({
      title: "خطا!",
      text: "قیمت کالا را وارد کنید.",
      icon: "error",
      confirmButtonText: "بازگشت",
    });
    return;
  } else if (productPrice < 1_000_000) {
    Swal.fire({
      title: "خطا!",
      text: "حداقل قیمت کالا 1 میلیون تومان می باشد.",
      icon: "error",
      confirmButtonText: "بازگشت",
    });
    return;
  } else if (customPrepaymentPrice >= productPrice) {
    Swal.fire({
      title: "خطا!",
      text: "مبلغ پیش پرداخت بیشتر یا برابر قیمت کالا نمی تواند باشد.",
      icon: "error",
      confirmButtonText: "بازگشت",
    });
    return;
  }

  const conditionMonths = +document.querySelector(
    ".loan-installments button.active"
  ).dataset.value;
  const guaranteeType = document.querySelector("#garuntee").value;
  const hasGuarantor = document.querySelector("#guarantor").checked;
  const withoutPrepayment = document.querySelector(
    "#withoutPrepaymentElem"
  ).checked;

  const targetCondition = targetConditions.find(
    (condition) =>
      conditionMonths === condition.conditionMonths &&
      guaranteeType === condition.guaranteeType &&
      hasGuarantor === condition.hasGuarantor &&
      withoutPrepayment === condition.withoutPrepayment
  );

  if (!targetCondition) {
    Swal.fire({
      title: "خطا!",
      text: "شرایط مورد نظر شما یافت نشد.",
      icon: "error",
      confirmButtonText: "بازگشت",
    });
    return;
  }

  const { loanPrice, prePayment } = companyCalculation(
    productPrice,
    targetCondition,
    customPrepaymentPrice
  );

  const { monthlyPayment, totalPayment } = loanCalculation(
    loanPrice,
    23,
    targetCondition.conditionMonths - 1
  );

  const guaranteePrice = calculateGuaranteePrice(
    totalPayment,
    targetCondition.guaranteeType
  );

  document.querySelector(".condition-name").innerHTML = `
    <h6>نام شرایط انتخابی شما:</h6>
    <p>${targetCondition.title}</p>  
  `;

  document.querySelector(".loan-details").innerHTML = `
    <div>
      <span>پیش پرداخت</span>
      <span class="price" id="prepaymentElem">${prePayment.toLocaleString()} تومان</span>
    </div>
    <div>
      <span>مبلغ وام</span>
      <span class="price" id="loanPriceElem">${loanPrice.toLocaleString()} تومان</span>
    </div>
    <div id="guaranteeElem">
      <span>
        مبلغ ${targetCondition.guaranteeType === "check" ? "چک" : "سفته"} ضمانت
      </span>
      <span class="price" id="guaranteePriceElem">${guaranteePrice.toLocaleString()} تومان</span>
    </div>
    <div>
      <span>مبلغ قسط</span>
      <span class="price" id="monthlyReturnPriceElem">${monthlyPayment.toLocaleString()} تومان</span>
    </div>
  `;

  const tableRows = targetConditions.map((condition) => {
    const { initialIncrease, loanPrice, prePayment } = companyCalculation(
      productPrice,
      condition,
      customPrepaymentPrice
    );

    const { monthlyPayment, totalPayment } = loanCalculation(
      loanPrice,
      23,
      condition.conditionMonths - 1
    );

    const guaranteePrice = calculateGuaranteePrice(
      totalPayment,
      condition.guaranteeType
    );

    //title variables
    const guaranteeTypeTitle =
      condition.guaranteeType === "check" ? "چک" : "سفته";

    const hasGuarantorTitle = condition.hasGuarantor ? "با ضامن" : "بدون ضامن";

    const deliveryTitle =
      condition.delivery === 0 ? "فوری" : `${condition.delivery} روزه`;

    return {
      ...condition,
      initialIncreasePrice: initialIncrease,
      prePaymentPrice: prePayment,
      loanPrice,
      monthlyPayment,
      guaranteePrice,
      guaranteeTypeTitle,
      hasGuarantorTitle,
      deliveryTitle,
    };
  });

  allTableRows = tableRows;

  showAllPayment(tableRows);
  downloadPDFBtn.removeAttribute("disabled");
};

paymentMonthBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelector(".loan-installments button.active")
      .classList.remove("active");
    btn.classList.add("active");
  });
});
/* loan calculator ends */

calculateBtn.addEventListener("click", priceCalculationHandler);

//condition table
const allConditionsElem = document.querySelector(".condition-table tbody");
const allConditionsTableHeader = document.querySelector(
  ".condition-table thead"
);

const showAllPayment = (rows) => {
  const hasSecondaryIncrease = rows.some((row) => row.secondaryIncrease);

  allConditionsTableHeader.innerHTML = `
    <tr>
      <th>ضمانت</th>
      <th>ضامن</th>
      <th>مدت اقساط</th>
      <th>نرخ افزایش</th>
      <th>مبلغ افزایش</th>
      <th>پیش پرداخت</th>
      <th>مبلغ پیش پرداخت</th>
      ${hasSecondaryIncrease ? "<th>درصد افزایش ثانویه</th>" : ""}
      <th>مبلغ تسهیلات</th>
      <th>مبلغ قسط</th>
      <th>مبلغ چک/سفته ضمانت</th>
      <th>تحویل</th>
    </tr>
  `;

  allConditionsElem.innerHTML = rows
    .map((row) => {
      return `
        <tr>
          <td>${row.guaranteeTypeTitle}</td>
          <td>
            <span
              class="
              ${row.hasGuarantor ? "withGuarantor" : "withoutGuarantor"}"
            >
                ${row.hasGuarantorTitle}
            </span>
          </td>
          <td>${row.conditionMonths} ماهه</td>
          <td>${row.initialIncrease}%</td>
          <td>${row.initialIncreasePrice.toLocaleString()} تومان</td>
          <td>${row.prePayment}%</td>
          <td>${row.prePaymentPrice.toLocaleString()} تومان</td>
          ${hasSecondaryIncrease ? `<td>${row.secondaryIncrease}%</td>` : ""}
          <td>${row.loanPrice.toLocaleString()} تومان</td>
          <td>${row.monthlyPayment.toLocaleString()} تومان</td>
          <td>${row.guaranteePrice.toLocaleString()} تومان</td>
          <td>${row.deliveryTitle}</td>

        </tr>
      `;
    })
    .join("");
};

const createDataTable = (title, header, rows) =>
  rows && rows.length
    ? [
        {
          text: textReverser(title),
          fontSize: 10,
          alignment: "right",
          margin: [0, 5, 0, 5],
        },
        {
          table: {
            widths: header.widths,
            body: [[...header.content].reverse(), ...rows],
          },
          layout: {
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
          },
        },
      ]
    : undefined;

const createTableRow = (data) => {
  const conditionTypeValue = document.querySelector(
    ".condition-types input[type='radio']:checked"
  ).value;

  const prepaymentCounts = data.map((row) =>
    row.prepaymentPartitions ? row.prepaymentPartitions : 0
  );

  const maxPrepaymentPartition = Math.max(...prepaymentCounts);

  if (!!data.length) {
    return data.map((row) => {
      return [
        {
          text: textReverser(`${row.conditionMonths} ماهه`),
          style: "tableContent",
        },
        {
          text: textReverser(`${row.prePaymentPrice.toLocaleString()} تومان`),
          style: "tableContent",
        },

        {
          text: textReverser(`متن تستی`),
          style: "tableContent",
        },
        {
          text: textReverser(`متن تستی`),
          style: "tableContent",
        },
        {
          text: textReverser(`متن تستی`),
          style: "tableContent",
        },
        {
          text: textReverser(`متن تستی`),
          style: "tableContent",
        },
        {
          text: textReverser(`${row.monthlyPayment.toLocaleString()} تومان`),
          style: "tableContent",
        },
        {
          text: textReverser(`${row.guaranteePrice.toLocaleString()} تومان`),
          style: "tableContent",
        },
        {
          text: textReverser(
            `${row.delivery === 0 ? "فوری" : `${row.delivery} روزه`}`
          ),
          style: "tableContent",
        },
      ].reverse();
    });
  }
};
//pdf download

downloadPDFBtn.addEventListener("click", () => {
  pdfMake.vfs["Shabnam.ttf"] = shabnamFont;

  pdfMake.fonts = {
    Shabnam: {
      normal: "Shabnam.ttf",
    },
  };

  const conditionType = document.querySelector(
    ".condition-types input[type='radio']:checked"
  ).nextElementSibling.innerHTML;

  const promissoryWithoutGuarantor = allTableRows.filter(
    (row) => row.guaranteeTypeTitle === "سفته" && !row.hasGuarantor
  );

  const promissoryWithoutGuarantorRows = createTableRow(
    promissoryWithoutGuarantor
  );

  const promissoryWithGuarantor = allTableRows.filter(
    (row) => row.guaranteeTypeTitle === "سفته" && row.hasGuarantor
  );

  const promissoryWithGuarantorRows = createTableRow(promissoryWithGuarantor);

  const checkWithGuarantor = allTableRows.filter(
    (row) => row.guaranteeTypeTitle === "چک" && row.hasGuarantor
  );

  const checkWithGuarantorRows = createTableRow(checkWithGuarantor);

  const checkWithoutGuarantor = allTableRows.filter(
    (row) => row.guaranteeTypeTitle === "چک" && !row.hasGuarantor
  );

  const checkWithoutGuarantorRows = createTableRow(checkWithoutGuarantor);

  const tableHeader = [
    {
      text: textReverser("مدت اقساط"),
      style: "tableHeader",
    },
    {
      text: textReverser("مبلغ پیش پرداخت"),
      style: "tableHeader",
    },
    {
      text: textReverser("مبلغ قسط"),
      style: "tableHeader",
    },
    {
      text: textReverser("مبلغ چک ضمانت"),
      style: "tableHeader",
    },
    {
      text: textReverser("تحویل"),
      style: "tableHeader",
    },
  ];

  const createTableHeader = () => {
    const conditionTypeValue = document.querySelector(
      ".condition-types input[type='radio']:checked"
    ).value;

    const countCharTitles = [
      { number: 1, title: "اول" },
      { number: 2, title: "دوم" },
      { number: 3, title: "سوم" },
      { number: 4, title: "چهارم" },
      { number: 5, title: "پنحم" },
    ];

    if (conditionTypeValue === "automobile") {
      const prepaymentCounts = allTableRows.map((row) =>
        row.prepaymentPartitions ? row.prepaymentPartitions : 0
      );

      const maxPrepaymentPartition = Math.max(...prepaymentCounts);

      const prepaymentPartitionTitles = countCharTitles
        .filter((count) => count.number <= maxPrepaymentPartition)
        .map((item) => item.title);

      return {
        widths: [
          40,
          "*",
          ...prepaymentPartitionTitles.map(() => "*"),
          "*",
          "*",
          40,
        ],
        content: [
          {
            text: textReverser("مدت اقساط"),
            style: "tableHeader",
          },
          {
            text: textReverser("مبلغ پیش پرداخت"),
            style: "tableHeader",
          },
          ...prepaymentPartitionTitles.map((title) => ({
            text: textReverser(`پیش پرداخت ${title}`),
            style: "tableHeader",
          })),
          {
            text: textReverser("مبلغ قسط"),
            style: "tableHeader",
          },
          {
            text: textReverser("مبلغ چک ضمانت"),
            style: "tableHeader",
          },
          {
            text: textReverser("تحویل"),
            style: "tableHeader",
          },
        ],
      };
    }

    return {
      widths: [40, "*", "*", "*", 40],
      content: [
        {
          text: textReverser("مدت اقساط"),
          style: "tableHeader",
        },
        {
          text: textReverser("مبلغ پیش پرداخت"),
          style: "tableHeader",
        },
        {
          text: textReverser("مبلغ قسط"),
          style: "tableHeader",
        },
        {
          text: textReverser("مبلغ چک ضمانت"),
          style: "tableHeader",
        },
        {
          text: textReverser("تحویل"),
          style: "tableHeader",
        },
      ],
    };
  };

  console.log(
    createDataTable(
      "خرید با چک بدون ضامن",
      createTableHeader(),
      checkWithoutGuarantorRows
    )
  );

  const docDefinition = {
    pageOrientation: conditionType === "خودرو" ? "landscape" : "portrait",
    info: {
      title: "لیست جدول اقساط ایران اورجینال",
      author: "ایران اورجینال",
      subject: "خرید اقساطی آیفون",
      keywords: "هما توسعه و تجارت فروش اکسیر کاوش",
    },
    content: [
      {
        image: logoImage,
        alignment: "center",
        width: 70,
        height: 50,
        margin: [0, 0, 0, 5],
      },
      {
        text: textReverser("هما توسعه و تجارت فروش اکسیر کاوش"),
        fontSize: 10,
        alignment: "center",
      },
      {
        text: textReverser(
          `جدول اقساط ${
            document.querySelector(
              ".condition-types input[type='radio']:checked"
            ).nextElementSibling.innerHTML
          }`
        ),
        fontSize: 14,
        margin: [0, 20, 0, 5],
      },
      {
        text: textReverser(
          `قیمت نقد کالا: ${getNumberSeparatedInputValue(
            productPriceElem
          ).toLocaleString()} تومان`
        ),
        fontSize: 14,
        margin: [0, 20, 0, 5],
      },
      createDataTable(
        "خرید با سفته بدون ضامن",
        createTableHeader(),
        promissoryWithoutGuarantorRows
      ),
      createDataTable(
        "خرید با سفته با ضامن",
        createTableHeader(),
        promissoryWithGuarantorRows
      ),
      createDataTable(
        "خرید با چک بدون ضامن",
        createTableHeader(),
        checkWithoutGuarantorRows
      ),
      createDataTable(
        "خرید با چک با ضامن",
        createTableHeader(),
        checkWithGuarantorRows
      ),
      {
        text: `${jalaliDate.year}/${jalaliDate.month}/${jalaliDate.day - 1}`,
        style: "header",
        alignment: "left",
        margin: [0, 10, 0, 5],
        fontsize: 10,
      },
    ],
    defaultStyle: {
      alignment: "right",
      font: "Shabnam",
      color: "#000",
    },
    styles: {
      tableHeader: {
        fontSize: 8,
        alignment: "center",
        fillColor: "#000",
        color: "#fff",
        margin: [0, 5, 0, 5],
      },
      tableContent: {
        fontSize: 7,
        alignment: "center",
        margin: [0, 3, 0, 3],
      },
    },
  };

  // ایجاد و دانلود فایل PDF
  pdfMake
    .createPdf(docDefinition)
    .download(
      `${jalaliDate.year}/${jalaliDate.month}/${
        jalaliDate.day - 1
      } لیست شرایط اقساطی ${conditionType} ایران اورجینال`
    );
});
