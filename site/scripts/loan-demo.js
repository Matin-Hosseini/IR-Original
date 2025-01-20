import { shabnamFont, logoImage } from "./utils/binary-strings.js";
import textReverser from "./utils/funcs/textReverser.js";

const conditions = {
  iphone: [
    {
      id: 1,
      title: "تحویل فوری سفته بدون ضامن",
      guaranteeType: "promissory",
      hasGuarantor: false,
      conditionMonths: 7,
      initialIncrease: 10,
      withoutPrepayment: false,
      prePayment: 35,
      delivery: 0,
    },
    {
      id: 2,
      title: "تحویل فوری سفته بدون ضامن",
      guaranteeType: "promissory",
      hasGuarantor: false,
      conditionMonths: 13,
      initialIncrease: 13,
      withoutPrepayment: false,
      prePayment: 40,
      delivery: 0,
    },
    {
      id: 3,
      title: "تحویل فوری سفته بدون ضامن",
      guaranteeType: "promissory",
      hasGuarantor: false,
      conditionMonths: 19,
      initialIncrease: 19,
      withoutPrepayment: false,
      prePayment: 45,
      delivery: 0,
    },
    {
      id: 4,
      title: "تحویل فوری چک بدون ضامن",
      guaranteeType: "check",
      hasGuarantor: false,
      conditionMonths: 7,
      initialIncrease: 7,
      withoutPrepayment: false,
      prePayment: 20,
      delivery: 0,
    },
    {
      id: 5,
      title: "تحویل فوری چک بدون ضامن",
      guaranteeType: "check",
      hasGuarantor: false,
      conditionMonths: 13,
      initialIncrease: 11,
      withoutPrepayment: false,
      prePayment: 25,
      delivery: 0,
    },
    {
      id: 6,
      title: "تحویل فوری چک بدون ضامن",
      guaranteeType: "check",
      hasGuarantor: false,
      conditionMonths: 19,
      initialIncrease: 17,
      withoutPrepayment: false,
      prePayment: 30,
      delivery: 0,
    },
    {
      id: 7,
      title: "تحویل فوری چک بدون ضامن",
      guaranteeType: "check",
      hasGuarantor: false,
      conditionMonths: 37,
      initialIncrease: 18,
      withoutPrepayment: false,
      prePayment: 40,
      delivery: 0,
    },
    {
      id: 8,
      title: "تحویل فوری چک با ضامن",
      guaranteeType: "check",
      hasGuarantor: true,
      conditionMonths: 13,
      initialIncrease: 13,
      withoutPrepayment: false,
      prePayment: 10,
      delivery: 0,
    },
    {
      id: 9,
      title: "تحویل فوری چک با ضامن",
      guaranteeType: "check",
      hasGuarantor: true,
      conditionMonths: 25,
      initialIncrease: 25,
      withoutPrepayment: false,
      prePayment: 10,
      delivery: 0,
    },
    {
      id: 10,
      title: "تحویل فوری چک با ضامن",
      guaranteeType: "check",
      hasGuarantor: true,
      conditionMonths: 37,
      initialIncrease: 30,
      withoutPrepayment: false,
      prePayment: 10,
      delivery: 0,
    },
    {
      id: 11,
      title: "تحویل 25 روزه چک بدون ضامن بدون پیش پرداخت گرید A,B",
      guaranteeType: "check",
      hasGuarantor: false,
      conditionMonths: 13,
      initialIncrease: 13,
      withoutPrepayment: true,
      prePayment: 4,
      delivery: 25,
    },
    {
      id: 12,
      title: "تحویل 25 روزه چک بدون ضامن بدون پیش پرداخت گرید A,B",
      guaranteeType: "check",
      hasGuarantor: false,
      conditionMonths: 25,
      initialIncrease: 25,
      withoutPrepayment: true,
      prePayment: 4,
      delivery: 25,
    },
    {
      id: 13,
      title: "تحویل 25 روزه چک بدون ضامن بدون پیش پرداخت گرید A,B",
      guaranteeType: "check",
      hasGuarantor: false,
      conditionMonths: 37,
      initialIncrease: 30,
      withoutPrepayment: true,
      prePayment: 4,
      delivery: 25,
    },
    {
      id: 14,
      title: "تحویل 25 روزه چک با ضامن بدون پیش پرداخت گرید C",
      guaranteeType: "check",
      hasGuarantor: true,
      conditionMonths: 13,
      initialIncrease: 13,
      withoutPrepayment: true,
      prePayment: 4,
      delivery: 25,
    },
    {
      id: 15,
      title: "تحویل 25 روزه چک با ضامن بدون پیش پرداخت گرید C",
      guaranteeType: "check",
      hasGuarantor: true,
      conditionMonths: 25,
      initialIncrease: 25,
      withoutPrepayment: true,
      prePayment: 4,
      delivery: 25,
    },
    {
      id: 16,
      title: "تحویل 25 روزه چک با ضامن بدون پیش پرداخت گرید C",
      guaranteeType: "check",
      hasGuarantor: true,
      conditionMonths: 37,
      initialIncrease: 30,
      withoutPrepayment: true,
      prePayment: 4,
      delivery: 25,
    },
  ],
  samsung: [
    {
      id: 1,
      title: "تحویل فوری بدون ضامن",
      guaranteeType: "check",
      hasGuarantor: false,
      conditionMonths: 7,
      initialIncrease: 10,
      withoutPrepayment: false,
      prePayment: 35,
      delivery: 0,
    },
    {
      id: 2,
      title: "تحویل فوری بدون ضامن",
      guaranteeType: "check",
      hasGuarantor: false,
      conditionMonths: 13,
      initialIncrease: 13,
      withoutPrepayment: false,
      prePayment: 40,
      delivery: 0,
    },
    {
      id: 3,
      title: "تحویل فوری بدون ضامن",
      guaranteeType: "check",
      hasGuarantor: false,
      conditionMonths: 19,
      initialIncrease: 19,
      withoutPrepayment: false,
      prePayment: 45,
      delivery: 0,
    },
    {
      id: 4,
      title: "تحویل فوری بدون ضامن",
      guaranteeType: "check",
      hasGuarantor: false,
      conditionMonths: 37,
      initialIncrease: 15,
      withoutPrepayment: false,
      prePayment: 50,
      delivery: 0,
    },
    {
      id: 5,
      title: "تحویل فوری  با چک صیادی با ضامن",
      guaranteeType: "check",
      hasGuarantor: true,
      conditionMonths: 13,
      initialIncrease: 13,
      withoutPrepayment: false,
      prePayment: 30,
      delivery: 0,
    },
    {
      id: 6,
      title: "تحویل فوری با چک صیادی به همراه ضامن",
      guaranteeType: "check",
      hasGuarantor: true,
      conditionMonths: 25,
      initialIncrease: 25,
      withoutPrepayment: false,
      prePayment: 30,
      delivery: 0,
    },
    {
      id: 7,
      title: "تحویل فوری با چک صیادی به همراه ضامن",
      guaranteeType: "check",
      hasGuarantor: true,
      conditionMonths: 37,
      initialIncrease: 30,
      withoutPrepayment: false,
      prePayment: 30,
      delivery: 0,
    },
    {
      id: 8,
      title: "تحویل 25 روزه با چک صیادی به همراه ضامن بدون پیش پرداخت",
      guaranteeType: "check",
      hasGuarantor: true,
      conditionMonths: 13,
      initialIncrease: 13,
      withoutPrepayment: true,
      prePayment: 4,
      delivery: 25,
    },
    {
      id: 9,
      title: "تحویل 25 روزه با چک صیادی به همراه ضامن بدون پیش پرداخت",
      guaranteeType: "check",
      hasGuarantor: true,
      conditionMonths: 25,
      initialIncrease: 25,
      withoutPrepayment: true,
      prePayment: 4,
      delivery: 25,
    },
    {
      id: 10,
      title: "تحویل 25 روزه با چک صیادی به همراه ضامن بدون پیش پرداخت",
      guaranteeType: "check",
      hasGuarantor: true,
      conditionMonths: 37,
      initialIncrease: 30,
      withoutPrepayment: true,
      prePayment: 4,
      delivery: 25,
    },
  ],
  automobile: [
    {
      id: 1,
      title: "تحویل فوری",
      guaranteeType: "check",
      hasGuarantor: false,
      conditionMonths: 19,
      initialIncrease: 5,
      withoutPrepayment: false,
      prePayment: 70,
      delivery: 0,
      description: "72 ساعت پس از تایید وام و واریز",
    },
    {
      id: 2,
      title: "تحویل فوری",
      guaranteeType: "check",
      hasGuarantor: false,
      conditionMonths: 37,
      initialIncrease: 5,
      withoutPrepayment: false,
      prePayment: 70,
      delivery: 0,
      description: "72 ساعت پس از تایید وام و واریز",
    },
    {
      id: 3,
      title: "تحویل 21 روزه",
      guaranteeType: "check",
      hasGuarantor: false,
      conditionMonths: 37,
      initialIncrease: 5,
      withoutPrepayment: false,
      prePayment: 42,
      delivery: 21,
      description: "21 روز پس از تایید وام و واریز",
    },
    {
      id: 4,
      title: "تحویل 3 ماهه",
      guaranteeType: "check",
      hasGuarantor: false,
      conditionMonths: 37,
      initialIncrease: 5,
      withoutPrepayment: false,
      prePayment: 30,
      delivery: 90,
      description:
        "مبلغ پیش پرداخت در چهار قسط مساوی دریافت می شود:یک چهارم زمان امضا قرارداد/یک چهارم چک یک ماهه/یک چهارم چک دو ماهه/یک چهارم چک سه ماهه ",
    },
    {
      id: 5,
      title: "تحویل فوری",
      guaranteeType: "check",
      hasGuarantor: false,
      conditionMonths: 37,
      initialIncrease: 5,
      withoutPrepayment: false,
      prePayment: 35,
      delivery: 60,
      description:
        "مبلغ پیش پرداخت در سه قسط مساوی دریافت می شود:یک سوم زمان امضا قرارداد/یک سوم چک یک ماهه/یک سوم چک دو ماهه",
    },
  ],
};

const productPriceElem = document.querySelector("#price-input");
const customPaymentElem = document.querySelector("#custom-prepayment");
const calculateBtn = document.querySelector("#calculate-btn");
const downloadPDFBtn = document.querySelector(".download-pdf");
const paymentMonthsElem = document.querySelector(".loan-installments");
const paymentMonthBtns = document.querySelectorAll(".loan-installments button");

const prePaymentElem = document.querySelector("#prepaymentElem");
const monthlyReturnPriceElem = document.querySelector(
  "#monthlyReturnPriceElem"
);
const loanPriceElem = document.querySelector("#loanPriceElem");

const showPaymentMonths = () => {
  let allConditions = [];
  for (let i in conditions) {
    allConditions = [...allConditions, ...conditions[i]];
  }

  const months = allConditions.map((condition) => condition.conditionMonths);
  let montshWithoutDuplicate = [...new Set(months)];
  const sortedMonths = montshWithoutDuplicate.sort((a, b) => a - b);

  paymentMonthsElem.innerHTML = sortedMonths
    .map(
      (month, index) => `
        <button data-value="${month}" class="${index === 0 ? "active" : ""}">
          ${month} ماهه
        </button>
      `
    )
    .join("");
  document.querySelectorAll(".loan-installments button").forEach((btn) => {
    btn.addEventListener("click", () => {
      document
        .querySelector(".loan-installments button.active")
        .classList.remove("active");
      btn.classList.add("active");
    });
  });
};

showPaymentMonths();

/* ********* handle price input separation starts ********* */
const separateNumberInput = (input) => {
  input.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, "");

    const splittedValue = e.target.value.split(",");

    const numberedValue = Number(splittedValue.join(""));

    e.target.value = numberedValue.toLocaleString();

    if (e.target.value === "0") e.target.value = "";
  });
};

const getNumberSeparatedInputValue = (input) =>
  +input.value.trim().split(",").join("");

separateNumberInput(productPriceElem);
separateNumberInput(customPaymentElem);
/* ********* handle price input separation ends ********* */

/* loan calculator starts  */

const loanCalculation = (loanPrice, annualInterestRate, returnMonths) => {
  const monthlyInterestRate = annualInterestRate / 12 / 100;

  const monthlyPayment =
    (loanPrice *
      monthlyInterestRate *
      Math.pow(1 + monthlyInterestRate, returnMonths)) /
    (Math.pow(1 + monthlyInterestRate, returnMonths) - 1);

  const totalPayment = monthlyPayment * returnMonths;
  const totalInterest = totalPayment - loanPrice;

  return {
    monthlyPayment: Math.ceil(+monthlyPayment),
    totalPayment: Math.ceil(+totalPayment),
    totalInterest: Math.ceil(+totalInterest),
  };
};

const calculateGuaranteePrice = (price, guaranteeType) => {
  let guaranteePrice = null;

  switch (guaranteeType) {
    case "promissory":
      {
        guaranteePrice = price + (price * 50) / 100;
      }
      break;
    case "check":
      {
        guaranteePrice = price + (price * 25) / 100;
      }
      break;
    default: {
      guaranteePrice = price + (price * 25) / 100;
    }
  }

  guaranteePrice = Math.ceil(guaranteePrice);

  return guaranteePrice;
};

const companyCalculation = (productPrice, condition, customPrepayment) => {
  const initialIncrease =
    productPrice + (productPrice * condition.initialIncrease) / 100;

  let prePayment = 0;

  if (customPrepayment) {
    prePayment = customPrepayment;
  } else {
    prePayment = (initialIncrease * condition.prePayment) / 100;
  }

  const loanPrice = initialIncrease - prePayment;

  return { initialIncrease, loanPrice, prePayment };
};

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

const showAllPayment = (rows) => {
  console.log(rows);
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
          <td>${row.loanPrice.toLocaleString()} تومان</td>
          <td>${row.monthlyPayment.toLocaleString()} تومان</td>
          <td>${row.guaranteePrice.toLocaleString()} تومان</td>
          <td>${row.deliveryTitle}</td>

        </tr>
      `;
    })
    .join("");
};

//pdf download

downloadPDFBtn.addEventListener("click", () => {
  pdfMake.vfs["Shabnam.ttf"] = shabnamFont;

  pdfMake.fonts = {
    Shabnam: {
      normal: "Shabnam.ttf", // فونت پیش‌فرض
    },
  };

  const tableHeader = [
    {
      text: "ضمانت",
      alignment: "center",
      fontSize: 6,
      fillColor: "#000",
      color: "#fff",
    },
    {
      text: "ضامن",
      alignment: "center",
      fontSize: 6,
      fillColor: "#000",
      color: "#fff",
    },
    {
      text: textReverser("مدت اقساط"),
      alignment: "center",
      fontSize: 6,
      fillColor: "#000",
      color: "#fff",
    },
    {
      text: textReverser("مبلغ پیش پرداخت"),
      alignment: "center",
      fontSize: 6,
      fillColor: "#000",
      color: "#fff",
    },
    {
      text: textReverser("مبلغ قسط"),
      alignment: "center",
      fontSize: 6,
      fillColor: "#000",
      color: "#fff",
    },
    {
      text: textReverser("مبلغ چک ضمانت"),
      alignment: "center",
      fontSize: 6,
      fillColor: "#000",
      color: "#fff",
    },
    {
      text: "تحویل",
      alignment: "center",
      fontSize: 6,
      fillColor: "#000",
      color: "#fff",
    },
  ];

  const pdfTableRows = allTableRows.map((row) => {
    return [
      row.guaranteeTypeTitle,
      row.hasGuarantorTitle,
      `${row.conditionMonths} ماهه`,
      `${row.prePaymentPrice.toLocaleString()} تومان`,
      `${row.monthlyPayment.toLocaleString()} تومان`,
      `${row.guaranteePrice.toLocaleString()} تومان`,
      `${row.delivery === 0 ? "فوری" : `${row.delivery} روزه`}`,
    ];
  });

  console.log(pdfTableRows);

  const docDefinition = {
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
        width: 50,
        height: 33,
      },
      {
        text: textReverser("هما توسعه و تجارت فروش اکسیر کاوش"),
        fontSize: 10,
        alignment: "center",
      },
      {
        text: "قیمت نقد کالا: 110,000,000".split(" ").reverse().join("  "),
        fontSize: 14,
      },

      {
        text: "جدول پیشرفته با استایل دلخواه",
        style: "header",
        alignment: "center",
      },
      {
        table: {
          widths: Array(7).fill("*"),
          body: [
            [...tableHeader].reverse(),
            [
              "چک",
              "با ضامن",
              "25 ماهه",
              "195,206.375 تومان",
              "92,013 تومان",
              "2,760,374 تومان",
              "فوری",
            ],
            [
              "چک",
              "با ضامن",
              "13 ماهه",
              "176,466.563 تومان",
              "149,412 تومان",
              "2,241,180 تومان",
              "فوری",
            ],
            [
              "چک",
              "بدون ضامن",
              "37 ماهه",
              "737,099.272 تومان",
              "42,800 تومان",
              "1,925,973 تومان",
              "فوری",
            ],
            [
              "چک",
              "بدون ضامن",
              "19 ماهه",
              "548,139.501 تومان",
              "84,688 تومان",
              "1,905,474 تومان",
              "فوری",
            ],
            [
              "چک",
              "بدون ضامن",
              "13 ماهه",
              "433,358.153 تومان",
              "122,307 تومان",
              "1,834,594 تومان",
              "فوری",
            ],
            [
              "چک",
              "بدون ضامن",
              "7 ماهه",
              "334,193.314 تومان",
              "237,978 تومان",
              "1,784,834 تومان",
              "فوری",
            ],
            [
              "سفته",
              "بدون ضامن",
              "19 ماهه",
              "836,264.111 تومان",
              "67,678 تومان",
              "1,827,300 تومان",
              "فوری",
            ],
            [
              "سفته",
              "بدون ضامن",
              "13 ماهه",
              "705,866.252 تومان",
              "99,608 تومان",
              "1,792,944 تومان",
              "فوری",
            ],
            [
              "سفته",
              "بدون ضامن",
              "7 ماهه",
              "601,235.635 تومان",
              "198,779 تومان",
              "1,789,005 تومان",
              "فوری",
            ],
          ],
        },
        layout: {
          fillColor: function (rowIndex) {
            return rowIndex % 2 === 0 ? "#e9ecef" : null; // رنگ پس‌زمینه برای ردیف‌های زوج
          },
          hLineWidth: function () {
            return 0.5; // ضخامت خطوط افقی
          },
          vLineWidth: function () {
            return 0.5; // ضخامت خطوط عمودی
          },
          hLineColor: function () {
            return "#000"; // رنگ خطوط افقی
          },
          vLineColor: function () {
            return "#000"; // رنگ خطوط عمودی
          },
        },
      },
    ],
    defaultStyle: {
      alignment: "right",
      font: "Shabnam", // استفاده از فونت فارسی
      color: "#000",
    },
  };

  const docDefinition2 = {
    content: [
      {
        table: {
          headerRows: 1,
          widths: ["*", "*", "*"],
          body: [
            // هدر جدول
            [
              { text: "ستون اول", style: "header" },
              { text: "ستون دوم", style: "header" },
              { text: "ستون سوم", style: "header" },
            ],
            // داده‌های جدول
            [{ text: "داده 1", style: "tableContent" }, "داده 2", "داده 3"],
            ["داده 4", "داده 5", "داده 6"],
          ],
        },
        layout: "lightHorizontalLines", // استایل خطوط جدول
      },
    ],
    defaultStyle: {
      alignment: "right",
      font: "Shabnam", // استفاده از فونت فارسی
      color: "#000",
    },
    styles: {
      header: {
        fontSize: 6,
        alignment: "center",
      },
      tableContent: {
        fontSize: 5,
        fillColor: "red",
      },
    },
  };

  // ایجاد و دانلود فایل PDF
  pdfMake.createPdf(docDefinition2).download("1403-24-10");
});
