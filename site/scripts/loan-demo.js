const loanConditions = [
  {
    id: 1,
    lender: "بلوبانک",
    returnMonths: [{ id: 1, amount: 18 }],
    maxPrice: 100,
    interestRate: 23,
  },
  {
    id: 2,
    lender: "بانک ملی",
    returnMonths: [{ id: 1, amount: 36 }],
    grades: [
      {
        id: 1,
        value: "A,B",
      },
    ],
    maxPrice: 200,
    interestRate: 23,
  },
  {
    id: 3,
    lender: "بانک آینده",
    returnMonths: [
      { id: 1, amount: 12 },
      { id: 2, amount: 24 },
      { id: 3, amount: 36 },
    ],
    maxPrice: 200,
    interestRate: 23,
  },
];
/* loan calculator starts  */

const rangeInput = document.querySelector(".range-input");
const loanPrice = document.querySelector("#loan-price");
const loanMin = document.querySelector(".loan-min");
const loanMax = document.querySelector(".loan-max");
const paymentMonthBtns = document.querySelectorAll(".loan-installments button");
const monthlyReturnPriceElem = document.querySelector("#monthlyReturnPrice");
const totalReturnPriceElem = document.querySelector("#totalReturnPrice");

const calculateLoanPayment = (loanPrice, annualInterestRate, returnMonths) => {
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

const loanPaymentHandler = () => {
  const loanPrice = +rangeInput.value * 1_000_000;
  const returnMonths = +document.querySelector(
    ".loan-installments button.active"
  ).dataset.value;

  const result = calculateLoanPayment(loanPrice, 23, returnMonths);
  monthlyReturnPriceElem.innerHTML = `${result.monthlyPayment.toLocaleString()} تومان`;
  totalReturnPriceElem.innerHTML = `${result.totalPayment.toLocaleString()} تومان`;
};

rangeInput.addEventListener("input", (e) => {
  loanPrice.innerHTML = (+e.target.value * 1000000).toLocaleString();

  loanPaymentHandler();
});

const updateLoanPrice = (value) => {};

paymentMonthBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelector(".loan-installments button.active")
      .classList.remove("active");
    btn.classList.add("active");

    loanConditions.forEach((loan) => {
      loan.returnMonths.forEach((month) => {
        if (month.amount === +btn.dataset.value) {
          loanMax.innerHTML = loan.maxPrice;
          rangeInput.max = loan.maxPrice;

          console.log(loan);

          loanPaymentHandler();
        }
      });
    });
  });
});

/* loan calculator ends  */

/* select */
const select = document.querySelector(".select");
const selected = document.querySelector(".selected");
const selectMenu = document.querySelector(".select-menu");

const seleectMenuItems = document.querySelectorAll(".select-menu li");

let isSelectMenuOpen = false;

const openSelectMenu = () => {
  select.classList.add("open");
  isSelectMenuOpen = true;
};
const closeSelectMenu = () => {
  select.classList.remove("open");
  isSelectMenuOpen = false;
};
seleectMenuItems.forEach((item) => {
  item.addEventListener("click", () => {});
});

selected.addEventListener("click", () =>
  isSelectMenuOpen ? closeSelectMenu() : openSelectMenu()
);
