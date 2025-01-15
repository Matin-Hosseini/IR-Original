// const loanConditions = [
//   {
//     id: 1,
//     lender: "بلوبانک",
//     returnMonths: [{ id: 1, amount: 18 }],
//     maxPrice: 100,
//     interestRate: 23,
//   },
//   {
//     id: 2,
//     lender: "بانک ملی",
//     returnMonths: [{ id: 1, amount: 36 }],
//     grades: [
//       {
//         id: 1,
//         value: "A,B",
//       },
//     ],
//     maxPrice: 200,
//     interestRate: 23,
//   },
//   {
//     id: 3,
//     lender: "بانک آینده",
//     returnMonths: [
//       { id: 1, amount: 12 },
//       { id: 2, amount: 24 },
//       { id: 3, amount: 36 },
//     ],
//     maxPrice: 200,
//     interestRate: 23,
//   },
// ];

const data = [
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
];

const productPriceElem = document.querySelector(".price-input");
const calculateBtn = document.querySelector("#calculate-btn");
const paymentMonthsElem = document.querySelector(".loan-installments");
const paymentMonthBtns = document.querySelectorAll(".loan-installments button");

const prePaymentElem = document.querySelector("#prepaymentElem");
const monthlyReturnPriceElem = document.querySelector(
  "#monthlyReturnPriceElem"
);
const loanPriceElem = document.querySelector("#loanPriceElem");

const sortConditionMonths = (conditions) => {
  const months = conditions.map((condition) => condition.conditionMonths);
  let montshWithoutDuplicate = [...new Set(months)];

  const sortedMonths = montshWithoutDuplicate.sort((a, b) => a - b);

  return sortedMonths;
};

const showPaymentMonths = (months) => {
  paymentMonthsElem.innerHTML = months
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

const months = sortConditionMonths(data);
showPaymentMonths(months);

/* ********* handle price input separation starts ********* */
productPriceElem.addEventListener("input", (e) => {
  e.target.value = e.target.value.replace(/[^0-9]/g, "");

  const splittedValue = e.target.value.split(",");

  const numberedValue = Number(splittedValue.join(""));

  e.target.value = numberedValue.toLocaleString();

  if (e.target.value === "0") e.target.value = "";
});
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
    monthlyPayment: +monthlyPayment.toFixed(2),
    totalPayment: +totalPayment.toFixed(2),
    totalInterest: +totalInterest.toFixed(2),
  };
};

const companyCalculation = () => {
  const productPrice = +productPriceElem.value.trim().split(",").join("");
  const conditionMonths = +document.querySelector(
    ".loan-installments button.active"
  ).dataset.value;
  const guaranteeType = document.querySelector("#garuntee").value;
  const hasGuarantor = document.querySelector("#guarantor").checked;
  const withoutPrepayment = document.querySelector(
    "#withoutPrepaymentElem"
  ).checked;

  const targetCondition = data.find(
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

  const initialIncrease =
    productPrice + (productPrice * targetCondition.initialIncrease) / 100;

  const prePayment = (initialIncrease * targetCondition.prePayment) / 100;

  const loanPrice = initialIncrease - prePayment;

  return { loanPrice, prePayment, conditionMonths };
};

const priceCalculationHandler = () => {
  let result = companyCalculation();

  if (!result) return;

  const { loanPrice, prePayment, conditionMonths } = result;

  const { monthlyPayment } = loanCalculation(
    loanPrice,
    23,
    conditionMonths - 1
  );

  prePaymentElem.innerHTML = `${prePayment.toLocaleString()} تومان`;
  monthlyReturnPriceElem.innerHTML = `${monthlyPayment.toLocaleString()} تومان`;
  loanPriceElem.innerHTML = `${loanPrice.toLocaleString()} تومان`;
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

const allConditionsElem = document.querySelector(".condition-table tbody");

const showAllPayment = (price) => {
  allConditionsElem.innerHTML = data
    .map((item) => {
      const initialIncrease = price + (price * item.initialIncrease) / 100;

      const prePayment = (initialIncrease * item.prePayment) / 100;

      const loanPrice = initialIncrease - prePayment;

      const { monthlyPayment, totalPayment } = loanCalculation(
        loanPrice,
        23,
        item.conditionMonths - 1
      );

      const guaranteeCheckPrice = totalPayment + (totalPayment * 25) / 100;

      return `
        <tr>
          <td>${item.delivery === 0 ? "فوری" : `${item.delivery} روزه`}</td>
          <td>${price.toLocaleString()}</td>
          <td>${item.guaranteeType === "check" ? "چک" : "سفته"}</td>
          <td>
            <span 
              class=" 
              ${item.hasGuarantor ? "withGuarantor" : "withoutGuarantor"}"
            >
                ${item.hasGuarantor ? "با ضامن" : "بدون ضامن"}
            </span>
          </td>
          <td>${item.conditionMonths} ماهه</td>
          <td>${item.initialIncrease}%</td>
          <td>${initialIncrease.toLocaleString()} تومان</td>
          <td>${item.prePayment}%</td>
          <td>${prePayment.toLocaleString()} تومان</td>
          <td>${loanPrice.toLocaleString()} تومان</td>
          <td>${monthlyPayment.toLocaleString()} تومان</td> 
          <td>${guaranteeCheckPrice.toLocaleString()} تومان</td>
        </tr>
      `;
    })
    .join("");
};

showAllPayment(140_000_000);

const doc = new jsPDF();
doc.text("Hello world!", 10, 10);
doc.save("a4.pdf");
