import { conditions } from "./data.js";

import { shabnamFont, logoImage } from "./utils/binary-strings.js";
import textReverser, { charReverser } from "./utils/funcs/textReverser.js";
import { getDate, addDays } from "./utils/funcs/date.js";

import {
  loanCalculation,
  separateNumberInput,
  showPaymentMonths,
  getNumberSeparatedInputValue,
  calculateGuaranteePrice,
  companyCalculation,
  showAllPayment,
} from "./utils/funcs/loan-demo.js";

const productPriceElem = document.querySelector("#price-input");
const customPaymentElem = document.querySelector("#custom-prepayment");
const calculateBtn = document.querySelector("#calculate-btn");
const downloadPDFBtn = document.querySelector(".download-pdf");

showPaymentMonths(conditions);

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

calculateBtn.addEventListener("click", priceCalculationHandler);

//conditions table logic

const createDataTable = (title, header, rows) => {
  console.log(rows);
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
        text: `${charReverser(
          `${currentDate.year}/${currentDate.month}/${currentDate.day}`
        )}  ${currentDate.dayWeek}`,
        style: "header",
        alignment: "left",
        margin: [0, 10, 0, 5],
        fontsize: 10,
      },
      // {
      //   text: textReverser(
      //     "این متن تستی جهت نمایش به منظور ناخوانایی متن در pdf به وجود آمده می باشد. در صورتی که متن وارد شده از یک حجم مشخص بیشتر باشد و لازم باشد که ادامه آن در سطربعدی نمایش داده شود باعث می شود که متن از پایین به بالا قابل خواندن باشد و متون انگلیسی نیز به همین ترتیب برعکس خواهند شد به طور مثال اطلاعات تلفن همراه iPhone 16 Pro Max 256 ZA/A Black."
      //   ),
      // },
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

  pdfMake
    .createPdf(docDefinition)
    .download(
      ` لیست شرایط اقساطی ${conditionType} ایران اورجینال ${currentDate.dayWeek} ${currentDate.day}/${currentDate.month}/${currentDate.year} `
    );
};

downloadPDFBtn.addEventListener("click", createPDF);
