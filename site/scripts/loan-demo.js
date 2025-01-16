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

const productPriceElem = document.querySelector(".price-input");
const calculateBtn = document.querySelector("#calculate-btn");
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
    monthlyPayment: Math.ceil(+monthlyPayment),
    totalPayment: Math.ceil(+totalPayment),
    totalInterest: Math.ceil(+totalInterest),
  };
};

const companyCalculation = (productPrice, condition) => {
  const initialIncrease =
    productPrice + (productPrice * condition.initialIncrease) / 100;

  const prePayment = (initialIncrease * condition.prePayment) / 100;

  const loanPrice = initialIncrease - prePayment;

  return { loanPrice, prePayment };
};

const priceCalculationHandler = () => {
  const conditionType = document.querySelector(
    ".condition-types input[type='radio']:checked"
  ).value;

  const targetConditions = conditions[conditionType];

  const productPrice = +productPriceElem.value.trim().split(",").join("");
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
    targetCondition
  );

  const { monthlyPayment } = loanCalculation(
    loanPrice,
    23,
    targetCondition.conditionMonths - 1
  );

  console.log(monthlyPayment);
  showAllPayment(productPrice, targetConditions);
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

const showAllPayment = (price, conditions) => {
  allConditionsElem.innerHTML = conditions
    .map((condition) => {
      const initialIncrease = price + (price * condition.initialIncrease) / 100;

      const prePayment = (initialIncrease * condition.prePayment) / 100;

      const loanPrice = initialIncrease - prePayment;

      const { monthlyPayment, totalPayment } = loanCalculation(
        loanPrice,
        23,
        condition.conditionMonths - 1
      );

      let guaranteePrice = null;

      switch (condition.guaranteeType) {
        case "promissory":
          {
            guaranteePrice = totalPayment + (totalPayment * 50) / 100;
          }
          break;
        case "check":
          {
            guaranteePrice = totalPayment + (totalPayment * 25) / 100;
          }
          break;
        default: {
          guaranteePrice = totalPayment + (totalPayment * 25) / 100;
        }
      }

      guaranteePrice = Math.ceil(guaranteePrice);

      return `
        <tr>
          <td>${condition.guaranteeType === "check" ? "چک" : "سفته"}</td>
          <td>
            <span 
              class=" 
              ${condition.hasGuarantor ? "withGuarantor" : "withoutGuarantor"}"
            >
                ${condition.hasGuarantor ? "با ضامن" : "بدون ضامن"}
            </span>
          </td>
          <td>${condition.conditionMonths} ماهه</td>
          <td>${condition.initialIncrease}%</td>
          <td>${initialIncrease.toLocaleString()} تومان</td>
          <td>${condition.prePayment}%</td>
          <td>${prePayment.toLocaleString()} تومان</td>
          <td>${loanPrice.toLocaleString()} تومان</td>
          <td>${monthlyPayment.toLocaleString()} تومان</td> 
          <td>${guaranteePrice.toLocaleString()} تومان</td>
          <td>
            ${condition.delivery === 0 ? "فوری" : `${condition.delivery} روزه`}
          </td>

        </tr>
      `;
    })
    .join("");
};
