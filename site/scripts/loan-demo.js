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

const rangeInput = document.querySelector(".range-input");
const loanPrice = document.querySelector("#loan-price");
const loanMin = document.querySelector(".loan-min");
const loanMax = document.querySelector(".loan-max");
const paymentMonthBtns = document.querySelectorAll(".loan-installments button");
const monthlyReturnPriceElem = document.querySelector("#monthlyReturnPrice");
const totalReturnPriceElem = document.querySelector("#totalReturnPrice");
const calculateBtn = document.querySelector(".calculate");
const productPriceElem = document.querySelector(".price-input");
const prepaymentElem = document.querySelector("#prepayment");

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
    monthlyPayment: +monthlyPayment.toFixed(0),
    totalPayment: +totalPayment.toFixed(0),
    totalInterest: +totalInterest.toFixed(0),
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

          loanPaymentHandler();
        }
      });
    });
  });
});

const calculateProductPriceToLoan = (
  price,
  prepayPercentage,
  increasedPercentage
) => {
  const prepaymentPrice = (price * prepayPercentage) / 100;

  const priceToLoan = price - prepaymentPrice;

  const loanPrice = priceToLoan + (priceToLoan * increasedPercentage) / 100;

  return loanPrice;
};

calculateBtn.addEventListener("click", () => {
  const productPrice = productPriceElem.value.trim();

  const currentPayMentMonth = document.querySelector(
    ".loan-installments button.active"
  ).dataset.value;

  let loanPrice = 0;
  let prepayment = 0;

  switch (+currentPayMentMonth) {
    case 6:
      {
        const result = calculateProductPriceToLoan(+productPrice, 35, 7);
      }
      break;
    case 12:
      {
        const result = calculateProductPriceToLoan(+productPrice, 12.5, 13);
      }
      break;
    case 18:
      {
        const result = calculateProductPriceToLoan(+productPrice, 14.5, 19);
      }
      break;
    case 24:
      {
        const result = calculateProductPriceToLoan(+productPrice, 16, 25);
      }
      break;
    case 36:
      {
        const result = calculateProductPriceToLoan(+productPrice, 18, 30);
      }
      break;
    default:
      loanPrice = 0;
  }

  const { monthlyPayment, totalPayment, totalInterest } = calculateLoanPayment(
    loanPrice,
    23,
    +currentPayMentMonth
  );

  prepaymentElem.innerHTML = `${}`
  
});
