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
    alert("شرایط یافت نشد");
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
  const { jsPDF } = window.jspdf;

  const pdf = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
    lang: "fa",
  });

  pdf.addFileToVFS("Vazir.ttf", vazirFont);
  pdf.addFont("Vazir.ttf", "Vazir", "normal");
  pdf.setFont("Vazir", "normal");

  const tableHeaders = [
    "ضمانت",
    "ضامن",
    "مدت اقساط",
    "مبلغ پیش پرداخت",
    "مبلغ قسط",
    "مبلغ چک/سفته ضمانت",
    "تحویل",
  ].reverse();

  const neatTableRows = allTableRows.map((row) =>
    [
      row.guaranteeTypeTitle,
      row.hasGuarantorTitle,
      row.conditionMonths,
      `${row.prePaymentPrice.toLocaleString()} تومان`,
      `${row.monthlyPayment.toLocaleString()} تومان`,
      `تومان ${row.guaranteePrice.toLocaleString()} `,
      `${row.guaranteePrice.toLocaleString()} تومان`,
    ].reverse()
  );

  console.log(neatTableRows);

  const tableRows = neatTableRows;

  const reverseText = (text) => text.split("").reverse().join("");
  const text = reverseText("تومان 9,567,562");

  // تنظیم متن
  pdf.text(text, 100, 50, { align: "right" });
  // pdf.autoTable({
  //   head: [tableHeaders],
  //   body: tableRows,

  //   margin: { top: 10, left: 10, right: 10, bottom: 10 },
  //   styles: {
  //     font: "Vazir",
  //     halign: "center",
  //     valign: "middle",
  //     fontSize: 8,
  //     cellPadding: { top: 3, bottom: 3 },
  //     whiteSpace: "nowrap",
  //     dir: "rtl",
  //   },
  //   theme: "grid",
  //   headStyles: {
  //     fontSize: 8,
  //     textColor: [255, 255, 255],
  //     fillColor: [25, 25, 25],
  //     halign: "center",
  //     valign: "middle",
  //   },
  //   bodyStyles: {
  //     halign: "center",
  //     cellPadding: { top: 2, bottom: 2 },
  //     dir: "rtl",
  //   },
  // });

  // ذخیره فایل PDF
  pdf.save("جدول.pdf");
});
