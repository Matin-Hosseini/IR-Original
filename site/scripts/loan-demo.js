import { conditions } from "./data.js";

import { shabnamFont, logoImage } from "./utils/binary-strings.js";
import textReverser, { charReverser } from "./utils/funcs/textReverser.js";
import { getDate, addDays, addMonths } from "./utils/funcs/date.js";

import {
  loanCalculation,
  separateNumberInput,
  showPaymentMonths,
  getNumberSeparatedInputValue,
  calculateGuaranteePrice,
  companyCalculation,
  showAllPayment,
  createPdfTableHeader,
  createPdfTableBody,
} from "./utils/funcs/loan-demo.js";
import { pdfTableLayout } from "./utils/constants/loan-demo.js";
import { createPrePaymentPartsTable } from "./utils/funcs/pdfTableCreation.js";
import { generateList } from "./utils/funcs/pdf/generators.js";

const productPriceElem = document.querySelector("#price-input");
const customPaymentElem = document.querySelector("#custom-prepayment");
const calculateBtn = document.querySelector("#calculate-btn");
const downloadPDFBtn = document.querySelector(".download-pdf");

const categoryRadios = document.querySelectorAll(".category-radio");

showPaymentMonths(
  conditions,
  document.querySelector(".category-radio.active").value
);

categoryRadios.forEach((category) => {
  category.addEventListener("input", (e) => {
    showPaymentMonths(conditions, e.target.value);
  });
});

separateNumberInput(productPriceElem);
separateNumberInput(customPaymentElem);

let allTableRows = [];

const currentDate = getDate(Date.now());

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

  let loanMonths = 0;

  switch (targetCondition.conditionMonths) {
    case 40:
      {
        loanMonths = 40;
      }
      break;
    case 50:
      {
        loanMonths = 50;
      }
      break;
    case 60:
      {
        loanMonths = 60;
      }
      break;
    default: {
      loanMonths = targetCondition.conditionMonths;
    }
  }

  const { monthlyPayment, totalPayment } = loanCalculation(
    loanPrice,
    targetCondition.bankInterest,
    loanMonths
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

    let loanMonths = 0;

    switch (condition.conditionMonths) {
      case 40:
        {
          loanMonths = 40;
        }
        break;
      case 50:
        {
          loanMonths = 50;
        }
        break;
      case 60:
        {
          loanMonths = 60;
        }
        break;
      default: {
        loanMonths = targetCondition.conditionMonths - 1;
      }
    }

    const { monthlyPayment, totalPayment } = loanCalculation(
      loanPrice,
      condition.bankInterest,
      loanMonths
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

calculateBtn.addEventListener("click", priceCalculationHandler);

//conditions table logic

const createDataTable = (title, header, rows) => {
  if (rows && rows.length) {
    return [
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
        layout: pdfTableLayout,
      },
    ];
  }
};

const createTableRow = (data) => {
  const conditionTypeValue = document.querySelector(
    ".condition-types input[type='radio']:checked"
  ).value;

  let prepaymentPartsCounts = [];
  data.forEach((item) => {
    if (item.prepaymentParts) {
      prepaymentPartsCounts.push(item.prepaymentParts.length);
    }
  });

  const maxPrepaymentPartsCount = Math.max(...prepaymentPartsCounts);

  const createMultipleValues = (amount, value) => {
    return Array.from({ length: amount }, () => value);
  };

  const fillArray = (data, defaultValue, size) => {
    return Array.from({ length: size }, (_, i) =>
      data[i] !== undefined ? data[i] : defaultValue
    );
  };

  const generateDefaultValue = () => {
    return {
      text: "=======",
      style: "tableContent",
    };
  };

  const createprepaymentPartsValues = (condition) => {
    const { prePaymentPrice } = condition;

    if (condition.prepaymentParts) {
      const prepaymentPartColumn = condition.prepaymentParts.map((item) => {
        const prepaymentPartPrice = (prePaymentPrice * item.percent) / 100;

        const { year, month, day } = getDate(addDays(Date.now(), item.days));

        return {
          text: ` تومان  ${Math.ceil(
            prepaymentPartPrice
          ).toLocaleString()}  \n ${charReverser(`${year}/${month}/${day}`)}`,
          style: "tableContent",
          fontSize: 7,
        };
      });

      const generatedArray = fillArray(
        prepaymentPartColumn,
        generateDefaultValue(),
        maxPrepaymentPartsCount
      );

      return generatedArray;
    }

    return createMultipleValues(
      maxPrepaymentPartsCount,
      generateDefaultValue()
    );
  };

  if (!!data.length) {
    if (conditionTypeValue === "automobile") {
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
          ...createprepaymentPartsValues(row),
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

const createPDF = () => {
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

  const createTableHeader = () => {
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

  if (conditionType === "خودرو") {
    const checkWithoutGuarantorCars = allTableRows.filter(
      (item) => !item.hasGuarantor && item.guaranteeType === "check"
    );
    const checkWithGuarantorCars = allTableRows.filter(
      (item) => item.hasGuarantor && item.guaranteeType === "check"
    );

    const generatePrimaryTable = (conditions) => {
      const withoutPrePaymentsConditions = conditions.filter(
        (condition) => !condition.prePayments
      );

      withoutPrePaymentsConditions.sort(
        (a, b) => a.conditionMonths - b.conditionMonths
      );

      return {
        table: {
          widths: [40, "*", "*", "*", 40],
          body: [
            [
              createPdfTableHeader("مدت اقساط"),
              createPdfTableHeader("پیش پرداخت"),
              createPdfTableHeader("مبلغ قسط"),
              createPdfTableHeader("مبلغ چک ضمانت"),
              createPdfTableHeader("تحویل"),
            ].reverse(),
            ...withoutPrePaymentsConditions.map((condition) => {
              return [
                createPdfTableBody(`${condition.conditionMonths} ماهه`),
                createPdfTableBody(
                  `${condition.prePaymentPrice.toLocaleString()} تومان`
                ),
                createPdfTableBody(
                  `${condition.monthlyPayment.toLocaleString()} تومان`
                ),
                createPdfTableBody(
                  `${condition.guaranteePrice.toLocaleString()} تومان`
                ),
                createPdfTableBody(condition.deliveryTitle),
              ].reverse();
            }),
          ],
        },
        pageBreak: "avoid",
        layout: pdfTableLayout,
        margin: [0, 0, 0, 5],
      };
    };

    const checkWithoutGuarantorTable = checkWithoutGuarantorCars.map((item) =>
      createPrePaymentPartsTable(item)
    );
    const checkWithGuarantorTable = checkWithGuarantorCars.map((item) =>
      createPrePaymentPartsTable(item)
    );

    const conditionTypeTitle = document.querySelector(
      ".condition-types input[type='radio']:checked"
    ).nextElementSibling.innerHTML;

    const docDefinition = {
      pageOrientation: "portrait",
      info: {
        title: "لیست جدول اقساط ایران اورجینال",
      },
      pageMargins: [30, 15, 30, 15],
      content: [
        {
          image: logoImage,
          alignment: "center",
          width: 70,
          height: 50,
          margin: [0, 0, 0, 5],
        },
        {
          text: textReverser("ایران اورجینال"),
          fontSize: 10,
          alignment: "center",
        },
        {
          text: textReverser(
            `شرایط خرید اقساطی ${conditionTypeTitle} به شرح زیر می باشد.`
          ),
          fontSize: 10,
          alignment: "right",
          margin: [0, 10, 0, 10],
        },
        {
          text: textReverser(
            `قیمت نقد کالا: ${getNumberSeparatedInputValue(
              productPriceElem
            ).toLocaleString()} تومان`
          ),
          fontSize: 10,
        },
        {
          text: textReverser(`شرایط خرید با چک بدون ضامن`),
          alignment: "center",
          fontSize: 15,
          color: "#16a34a",
          margin: [0, 10, 0, 10],
        },
        generatePrimaryTable(checkWithoutGuarantorCars),
        ...checkWithoutGuarantorTable,

        {
          text: textReverser(`شرایط خرید با چک با ضامن`),
          alignment: "center",
          fontSize: 15,
          color: "#dc2626",
          margin: [0, 10, 0, 10],
        },
        generatePrimaryTable(checkWithGuarantorCars),
        ...checkWithGuarantorTable,

        ...generateList({
          title: "توضیحات",
          list: [
            "تحویل های ذکر شده پس از تایید تسهیلات می باشد.",
            "همزمان با تحویل خودرو، قیمت به روز محاسبه می شود.",
            "در صورتی که قیمت کالا افزایش داشته باشد باقی مانده نقدی دریافت می شود",
            "در صورتی که خریدار نتواند باقی مانده مبلغ افزایشی را پرداخت کند میتواند خودرو خود را تا قیمت قرارداد تغییر دهد.",
            "تحویل خودرو منوط به تسویه ی اقساط سررسید شده و وصول چک های پیش پرداخت می باشد.",
          ],
        }),

        {
          text: [
            {
              text: textReverser("مراجعه کنید."),
              fontSize: 8,
            },
            {
              text: "www.iroriginal.com",
              link: "https://iroriginal.com",
              color: "#4338ca",
            },
            {
              text: textReverser("برای کسب اطلاعات بیشتر میتوانید به"),
              fontSize: 8,
            },
          ],
        },
        {
          text: `${charReverser(
            `${currentDate.year}/${currentDate.month}/${currentDate.day}`
          )}  ${currentDate.dayWeek}`,
          style: "header",
          alignment: "left",
          margin: [0, 10, 0, 5],
          fontsize: 10,
        },
      ],
      pageBreakBefore: function (
        currentNode,
        followingNodesOnPage,
        nodesOnNextPage,
        previousNodesOnPage
      ) {
        return (
          currentNode.headlineLevel === 1 && followingNodesOnPage.length === 0
        );
      },
      defaultStyle: {
        alignment: "right",
        font: "Shabnam",
        color: "#000",
      },
      styles: {
        tableHeader: {
          fontSize: 7,
          alignment: "center",
          fillColor: "#dbeafe",
          color: "#000",
          margin: [0, 3, 0, 3],
        },
        tableContent: {
          fontSize: 6,
          alignment: "center",
          margin: [0, 1, 0, 1],
        },
      },
    };
    pdfMake
      .createPdf(docDefinition)
      .download(
        ` لیست شرایط اقساطی ${conditionType} ایران اورجینال ${currentDate.dayWeek} ${currentDate.day}/${currentDate.month}/${currentDate.year} `
      );

    return;
  }

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
        text: textReverser("ایران اورجینال"),
        fontSize: 10,
        alignment: "center",
      },
      {
        text: textReverser(
          `شرایط خرید محصولات ${
            document.querySelector(
              ".condition-types input[type='radio']:checked"
            ).nextElementSibling.innerHTML
          } به شرح زیر می باشد.`
        ),
        fontSize: 10,
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
      ...generateList({
        title: "توضیحات",
        list: ["تحویل های ذکر شده پس از تایید تسهیلات می باشد."],
      }),
      {
        text: [
          {
            text: textReverser("مراجعه کنید."),
            fontSize: 8,
          },
          {
            text: "www.iroriginal.com",
            link: "https://iroriginal.com",
            color: "#4338ca",
          },
          {
            text: textReverser("برای کسب اطلاعات بیشتر میتوانید به"),
            fontSize: 8,
          },
        ],
      },
      {
        text: `${charReverser(
          `${currentDate.year}/${currentDate.month}/${currentDate.day}`
        )}  ${currentDate.dayWeek}`,
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
        fillColor: "#dbeafe",
        color: "#000",
        margin: [0, 5, 0, 5],
      },
      tableContent: {
        fontSize: 7,
        alignment: "center",
        margin: [0, 1, 0, 1],
      },
    },
  };

  pdfMake
    .createPdf(docDefinition)
    .download(
      ` لیست شرایط اقساطی ${conditionType} ایران اورجینال ${currentDate.dayWeek} ${currentDate.day}/${currentDate.month}/${currentDate.year} `
    );
};

downloadPDFBtn.addEventListener("click", createPDF);
