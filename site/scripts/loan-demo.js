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
var vfs = {
  "Shabnam.ttf":
    "AAEAAAATAQAABAAwRkZUTYUjesUAAAE8AAAAHEdERUYmsyc3AAABWAAAANxHUE9TUt/OUAAAAjQAAC5CR1NVQlagTDMAADB4AAAH7k1BVEgS8mVqAAA4aAAAAPJPUy8ybS1iBwAAOVwAAABgY21hcOTktwgAADm8AAAFTmN2dCAKljKJAAE9JAAAAF5mcGdtORqOfAABPYQAAA1tZ2FzcAAAABAAAT0cAAAACGdseWZ8zjgzAAA/DAAAt3xoZWFkFQLz2AAA9ogAAAA2aGhlYQ9ZBvEAAPbAAAAAJGhtdHjpB4iFAAD25AAACJZsb2Nh9IzBzAAA/3wAAARWbWF4cASMD0QAAQPUAAAAIG5hbWV9jog5AAED9AAAJxNwb3N05nWvhwABKwgAABIScHJlcN+9rpYAAUr0AAAAmAAAAAEAAAAA2a/RdgAAAADRff30AAAAANn1q1oAAQAAAAwAAADEAMwAAgAeAAEAjQABAI4AkwADAJQAlwABAJgAmAADAJkAmwABAJwAoAACAKEAvwABAMAAzAADAM0A3AABAN0A3QADAN4A6QABAOoA6gACAOsBPwABAUABQAADAUEBRAACAUUBWwABAVwBXAACAV0BZQABAWYBZgACAWcBZwABAWgBagACAWsBawABAWwBdgACAXcB6wABAewB8wACAfQCAQABAgICCQADAgoCFwABAhgCGQACAhoCKQABAAQAAAACAAAAAgACAI4AkgABAJMAkwACAAEAAAAKAIgA3AAFREZMVAAgYXJhYgAyY3lybABUZ3JlawBibGF0bgBwAAQAAAAA//8ABAAAAAEABAAFABYAA0ZBUiAAFktVUiAAFlVSRCAAFgAA//8AAwACAAQABQAEAAAAAP//AAIAAAADAAQAAAAA//8AAgAAAAMABAAAAAD//wACAAAAAwAGY3BzcAAma2VybgAsa2VybgA0a2VybgA6bWFyawBAbWttawBMAAAAAQAHAAAAAgAAAAgAAAABAAAAAAABAAgAAAAEAAEAAgADAAQAAAACAAUABgAJABQAJgAuADYAPgBGAE4AVgBeAAIACQAGAFQAeACuAd4HQAd2AAUAAQABB5wABAABAAEJQgAFAAEAARHWAAQAAQABErAABgABAAEaeAAGAAEAARxAAAEAAAABHJIAAgAAAAIc2h+QAAEAHAAFAAAAAgAOAA4AAgCz/8T/xAC0/8T/xAABAAIB8gHzAAEAJgAFAAAABgAWABYAHgAeABYAFgABAOr/Tv9OAAEA6v9T/1MAAQAGAKsArADiAVEBpQGnAAEBIAAFAAAACwAgADQAWgBaAFoAWgB6AKAAtADgAQAAAwDy/37/fgDz/37/fgD0/5L/kgAGAPL/nP+cAPP/nP+cAPT/9v/2APb/7P/sAPf/nP+cAPj/0v/SAAUA8P/A/8AA8f/A/8AA9f/Y/9gA+P/A/8AA+f/A/8AABgDy/5z/nADz/5z/nAD0/9b/1gD2/9b/1gD3/5z/nAD4/9r/2gADAPf/2P/YAPj/2P/YAPn/4v/iAAcA8P+c/5wA8f/A/8AA9P/Y/9gA9f+c/5wA9v/Y/9gA+P9g/2AA+f/A/8AABQDy/2r/agDz/2r/agD0/5z/nAD2/5L/kgD3/2D/YAAFAPH/wP/AAPX/sP+wAPf/4v/iAPj/av9qAPn/wP/AAAIAAgDYANgAAADwAPkAAQABBVIABQAAAAYAFgAWAW4CwAAWBAYAOQCb/07/TgCc/13/XQCd/13/XQCe/+L/4gCh/13/XQCi/07/TgCj/07/TgCk/07/TgCl/07/TgCp/07/TgCq/07/TgCr/+L/4gCs/+L/4gCt/07/TgCu/07/TgCv/07/TgCw/07/TgCx/07/TgCy/07/TgC1/07/TgC2/07/TgC4/3H/cQC5/8T/xAC6/07/TgC8/07/TgC9/+L/4gDf/07/TgDi/9j/2ADl/0z/TADm/0z/TAFO/4j/iAFS/0z/TAFU/0z/TAFW/0z/TAFY/0z/TAGC/07/TgGI/8T/xAGO/07/TgGS/07/TgGW/07/TgGa/07/TgGe/07/TgGq/07/TgGu/07/TgGy/07/TgG2/07/TgG6/07/TgG+/07/TgHC/07/TgHG/07/TgHK/07/TgHO/07/TgHS/0z/TAHW/3H/cQHa/07/TgHi/07/TgHy/3H/cQA4AJv/iP+IAJz/gf+BAJ3/gf+BAJ7/4v/iAKH/gf+BAKL/jP+MAKP/U/9TAKT/jP+MAKX/jP+MAKn/U/9TAKr/U/9TAKv/4v/iAKz/4v/iAK3/U/9TAK7/U/9TAK//U/9TALD/U/9TALH/U/9TALL/U/9TALX/U/9TALb/jP+MALj/mP+YALn/xv/GALr/U/9TALz/U/9TAL3/4v/iAN//jP+MAOX/TP9MAOb/TP9MAU7/iP+IAVL/TP9MAVT/TP9MAVb/TP9MAVj/TP9MAYL/jP+MAYj/xP/EAY7/jP+MAZL/jP+MAZb/U/9TAZr/U/9TAZ7/U/9TAar/U/9TAa7/U/9TAbL/U/9TAbb/U/9TAbr/U/9TAb7/U/9TAcL/U/9TAcb/U/9TAcr/jP+MAc7/jP+MAdL/TP9MAdb/mP+YAdr/U/9TAeL/U/9TAfL/mP+YADYAm/+I/4gAnP+M/4wAnf+M/4wAof+M/4wAov+M/4wAo/9T/1MApP+M/4wApf+M/4wAqf9T/1MAqv9T/1MAq//i/+IArP/i/+IArf9T/1MArv9T/1MAr/9T/1MAsP9T/1MAsf9T/1MAsv9T/1MAtf9H/0cAtv+M/4wAuP+Y/5gAuf/G/8YAuv9T/1MAvP9T/1MA3/+M/4wA5f9M/0wA5v9M/0wBTv+I/4gBUv9M/0wBVP9M/0wBVv9M/0wBWP9M/0wBgv+M/4wBiP/E/8QBjv+M/4wBkv+M/4wBlv9T/1MBmv9T/1MBnv9T/1MBqv9T/1MBrv9T/1MBsv9T/1MBtv9T/1MBuv9T/1MBvv9T/1MBwv9T/1MBxv9T/1MByv+M/4wBzv+M/4wB0v9M/0wB1v+Y/5gB2v9T/1MB4v9T/1MB8v+Y/5gANwCb/07/TgCc/13/XQCd/13/XQCh/13/XQCi/07/TgCj/07/TgCk/07/TgCl/07/TgCp/07/TgCq/07/TgCr/+L/4gCs/+L/4gCt/07/TgCu/07/TgCv/07/TgCw/07/TgCx/07/TgCy/07/TgC1/07/TgC2/07/TgC4/3H/cQC5/8T/xAC6/07/TgC8/07/TgDf/07/TgDi/9j/2ADl/0z/TADm/0z/TAFO/4j/iAFS/0z/TAFU/0z/TAFW/0z/TAFY/0z/TAGC/07/TgGI/8T/xAGO/07/TgGS/07/TgGW/07/TgGa/07/TgGe/07/TgGq/07/TgGu/07/TgGy/07/TgG2/07/TgG6/07/TgG+/07/TgHC/07/TgHG/07/TgHK/07/TgHO/07/TgHS/0z/TAHW/3H/cQHa/07/TgHi/07/TgHy/3H/cQABAAYAqwCsAOIBUQGlAacAAQAmAAUAAAAGABYAFgAeAB4AFgAWAAEB3v9O/04AAQHe/4z/jAAB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ANwQJwC1AfoAABAnALUA+AAAECYAtQAAEQcAxf9f/5YACbEDAbj/lrAzKwD//wBrBFoClQXWEQcAxv9K/sEACbEAAbj+wbAzKwAAAP///+IAAAMSBd8QJwC1AfoAABAnALUA+AAAECYAtQAAEQcAxv9V/soACbEDAbj+yrAzKwD//wDXBEUCPAWrEQcAx/83/0IACbEAArj/QrAzKwAAAP///+IAAAMSBbUQJwC1AfoAABAnALUA+AAAECYAtQAAEQcAx/8t/0wACbEDArj/TLAzKwD//wBS//8C4gMrEAYAmwAA////pgAEAjwF1BEGAJwAAAARsQABsAOwMyuxAQG4/yawMysA////pgAAAjwF1BAnAMj/cv8mEQYCDQAAAAmxAAG4/yawMysA//8AGQAEAbEGshEGAJ0AAAAasQABsAOwMyuxAQG4/hewMyuxAgG4/3CwMyv//wAZAAACIwayECcAyf7A/hcRBgINAAAACbEAAbj/cLAzKwD//wBP/i0DIAVcEQYAngAAAAmxAAG4/3CwMysA//8AT/4tA7IFXBAnAMn/gvzCEQYB5QAAAAmxAAG4/3CwMysA//8AE/24AasFNhEGAJ8AAAAJsQABuPcIsDMrAP//ADv9uAIjBTUQJwDK/uL/jhEGAYUAAAAJsQABuPcIsDMrAP//AFD+QQVTBNkRBgCgAAAACbEAAbj/cLAzKwD//wBQ/j0F9APfECYB5wAAEAcAyQA/+0X////iAAACUgUjECcAyf9Q/IkRBgIPAAAACbEAAbj/cLAzKwD////iAAADRQUjECcAyf9Q/IkRBgIQAAAACbEAAbj/cLAzKwD//wCCAAEBUAU2EAYAoQAAAAEAggAAAiMFNQATACFAHgABARFLAAICAGADAQAAEgBMAgAQDQkGABMCEwQHFCshIyImNRE1OwIVERQWOwEyHQEUAgourK4UphRHSCsZycIDlhQU/GlaVGcLagD//wBQ/hgHDQKrEQYAogAAAAmxAQG4/lywMysA//8AUP4YB/8CqxAnAfcDSP5cEQYB+wAAAAmxAAG4/lywMysA////4v4YAlICwxAmAg8AABEHAfcAdv5cAAmxAQG4/lywMysA////4v4YA0UCoRAmAhAAABEHAfcAdv5cAAmxAQG4/lywMysA//8AUwAAA08FUREGAKMAAAAJsQACuARe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Ca8AUAnJAFAJyQBQBU4AUAVOAFAE3ABQBRoAUAD6/+IHMgBQBZcAUAdhAFIFNgBQBRkATwWdAFADnABTA3AATwWiAFAFogBQAAABQgAAAQYAAAFHAAABIwAAAScAAAFSAAABIAAAAaAACwA0AAABWQAAAVkAAAEEBG8BLAN6AHgCqgCWBEgAlwVzAJcEogCXBMIAUAPoAHMEsQBLBLEASwQ4AG4ECQBuAwQAKgIwADcFnABZB10AUAWXAFAAAAJWAicATgddAFAFIgBQAvT/+gM4//oHMgBQBzIAUAc/AFAHPwBQBTYAUAWdAFAFHf/iA5wAUwNwAE8DcABPBaIAUAWiAFADnABTA3oAeAKqAJYESACXBXMAlwSiAJcEwgBQA+gAcwSxAEsEsQBLBDgAbgQUAAAIKQAABBQAAAgpAAACuQAAAgoAAAFcAAAEfwAAAjAAAAGiAAAA0QAAAAAAAAAAAAAAAAAAAqEARwKhAEcFKQCdA5wAAwHAAGMBvAAzAc4AMgGoAEoDFABsAxsAQAMIADIEXQBABJkAXALLAIgD+gCmBaYApgB+AAAHpwBKAVoAUgKYAGUCcgBsAmkAVARKAKMDnAAtAvYANQNcAGkEZQACBLUAXwa4AJgEogBPBIwAXgXkAHAD4gBMCC4AkAUJAG0FWwBrBRQAlgY1AFkG3QBUBtEAWwaiAFgEkQBhBb8AGQWWAKYE2QBABIMAngSyADsIRQBeAi3/rwSOAGUEegCRBBEAPAQqAIAEDAAkAlsAvQKYAGMB8QBFBKgAGAS8AC0HIwAtByMALQddAFAH4ABQAvX/zgNt/84H/ABSA5b/4QP+/+IFIgBQBU8AUAUW/+IFRf/iAzj/+gNz//oHPwBQB+QAUAOX/+IEUv/iBz8AUAfkAFADl//iBFL/4gWdAFAGNgBQBCQAUAUd/+ID3//iA5QATwL1/+EDbf/iBaIAUAXXAFAC9f+/A23/vwqOAFEMUgBkAxcAoQLz/+IDFwBdApQAUAMXAKkDFwCXAvP/4gMXAKcC8//iAxcAqwMX/+IDFwBrAvP/4gMXANcC8//iAycAUgIP/6cCBP+nAcsAGQIEABkDcABPA5QATwHLABMCBAA7BaIAUAXXAFACpf/iAyf/4gHLAIICBACCB10AUAfgAFACpf/iAyf/4gOcAFMEJABQB10AUAfgAFAC9f/h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ZWphVnUgY2hhbmdlcyBhcmUgaW4gcHVibGljIGRvbWFpbi4gCgpCaXRzdHJlYW0gVmVyYSBGb250cyBDb3B5cmlnaHQKLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tCgpDb3B5cmlnaHQgKGMpIDIwMDMgYnkgQml0c3RyZWFtLCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuIEJpdHN0cmVhbSBWZXJhIGlzCmEgdHJhZGVtYXJrIG9mIEJpdHN0cmVhbSwgSW5jLgoKUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weQpvZiB0aGUgZm9udHMgYWNjb21wYW55aW5nIHRoaXMgbGljZW5zZSAoIkZvbnRzIikgYW5kIGFzc29jaWF0ZWQKZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlICJGb250IFNvZnR3YXJlIiksIHRvIHJlcHJvZHVjZSBhbmQgZGlzdHJpYnV0ZSB0aGUKRm9udCBTb2Z0d2FyZSwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbWVyZ2UsCnB1Ymxpc2gsIGRpc3RyaWJ1dGUsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgRm9udCBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdApwZXJzb25zIHRvIHdob20gdGhlIEZvbnQgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZQpmb2xsb3dpbmcgY29uZGl0aW9uczoKClRoZSBhYm92ZSBjb3B5cmlnaHQgYW5kIHRyYWRlbWFyayBub3RpY2VzIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsCmJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb2Ygb25lIG9yIG1vcmUgb2YgdGhlIEZvbnQgU29mdHdhcmUgdHlwZWZhY2VzLgoKVGhlIEZvbnQgU29mdHdhcmUgbWF5IGJlIG1vZGlmaWVkLCBhbHRlcmVkLCBvciBhZGRlZCB0bywgYW5kIGluIHBhcnRpY3VsYXIKdGhlIGRlc2lnbnMgb2YgZ2x5cGhzIG9yIGNoYXJhY3RlcnMgaW4gdGhlIEZvbnRzIG1heSBiZSBtb2RpZmllZCBhbmQKYWRkaXRpb25hbCBnbHlwaHMgb3IgY2hhcmFjdGVycyBtYXkgYmUgYWRkZWQgdG8gdGhlIEZvbnRzLCBvbmx5IGlmIHRoZSBmb250cwphcmUgcmVuYW1lZCB0byBuYW1lcyBub3QgY29udGFpbmluZyBlaXRoZXIgdGhlIHdvcmRzICJCaXRzdHJlYW0iIG9yIHRoZSB3b3JkCiJWZXJhIi4KClRoaXMgTGljZW5zZSBiZWNvbWVzIG51bGwgYW5kIHZvaWQgdG8gdGhlIGV4dGVudCBhcHBsaWNhYmxlIHRvIEZvbnRzIG9yIEZvbnQKU29mdHdhcmUgdGhhdCBoYXMgYmVlbiBtb2RpZmllZCBhbmQgaXMgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlICJCaXRzdHJlYW0KVmVyYSIgbmFtZXMuCgpUaGUgRm9udCBTb2Z0d2FyZSBtYXkgYmUgc29sZCBhcyBwYXJ0IG9mIGEgbGFyZ2VyIHNvZnR3YXJlIHBhY2thZ2UgYnV0IG5vCmNvcHkgb2Ygb25lIG9yIG1vcmUgb2YgdGhlIEZvbnQgU29mdHdhcmUgdHlwZWZhY2VzIG1heSBiZSBzb2xkIGJ5IGl0c2VsZi4KClRIRSBGT05UIFNPRlRXQVJFIElTIFBST1ZJREVEICJBUyBJUyIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MKT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBBTlkgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksCkZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQgT0YgQ09QWVJJR0hULCBQQVRFTlQsClRSQURFTUFSSywgT1IgT1RIRVIgUklHSFQuIElOIE5PIEVWRU5UIFNIQUxMIEJJVFNUUkVBTSBPUiBUSEUgR05PTUUKRk9VTkRBVElPTiBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIElOQ0xVRElORwpBTlkgR0VORVJBTCwgU1BFQ0lBTCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUywKV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRgpUSEUgVVNFIE9SIElOQUJJTElUWSBUTyBVU0UgVEhFIEZPTlQgU09GVFdBUkUgT1IgRlJPTSBPVEhFUiBERUFMSU5HUyBJTiBUSEUKRk9OVCBTT0ZUV0FSRS4KCkV4Y2VwdCBhcyBjb250YWluZWQgaW4gdGhpcyBub3RpY2UsIHRoZSBuYW1lcyBvZiBHbm9tZSwgdGhlIEdub21lCkZvdW5kYXRpb24sIGFuZCBCaXRzdHJlYW0gSW5jLiwgc2hhbGwgbm90IGJlIHVzZWQgaW4gYWR2ZXJ0aXNpbmcgb3IKb3RoZXJ3aXNlIHRvIHByb21vdGUgdGhlIHNhbGUsIHVzZSBvciBvdGhlciBkZWFsaW5ncyBpbiB0aGlzIEZvbnQgU29mdHdhcmUKd2l0aG91dCBwcmlvciB3cml0dGVuIGF1dGhvcml6YXRpb24gZnJvbSB0aGUgR25vbWUgRm91bmRhdGlvbiBvciBCaXRzdHJlYW0KSW5jLiwgcmVzcGVjdGl2ZWx5LiBGb3IgZnVydGhlciBpbmZvcm1hdGlvbiwgY29udGFjdDogZm9udHMgYXQgZ25vbWUgZG90Cm9yZy4gaHR0cDovL3NjcmlwdHMuc2lsLm9yZy9PRkxfd2ViIApodHRwOi8vZGVqYXZ1LnNvdXJjZWZvcmdlLm5ldC93aWtpL2luZGV4LnBocC9MaWNlbnNlCmh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFNoYWJuYW0gRkRNZWRpdW0gICAgICAuAEMAbwBwAHkAcgBpAGcAaAB0ACAAKABjACkAIAAyADAAMAAzACAAYgB5ACAAQgBpAHQAcwB0AHIAZQBhAG0ALAAgAEkAbgBjAC4AIABBAGwAbAAgAFIAaQBnAGgAdABzACAAUgBlAHMAZQByAHYAZQBkAC4ACgBEAGUAagBhAFYAdQAgAGMAaABhAG4AZwBlAHMAIABhAHIAZQAgAGkAbgAgAHAAdQBiAGwAaQBjACAAZABvAG0AYQBpAG4ACgBDAGgAYQBuAGcAZQBzACAAYgB5ACAAUwBhAGIAZQByACAAUgBhAHMAdABpAGsAZQByAGQAYQByACAAYQByAGUAIABpAG4AIABwAHUAYgBsAGkAYwAgAGQAbwBtAGEAaQBuAC4ACgBOAG8AbgAtAEEAcgBhAGIAaQBjACgATABhAHQAaQBuACkAIABnAGwAeQBwAGgAcwAgAGEAbgBkACAAZABhAHQAYQAgAGkAbgAgAGUAeAB0AGUAbgBkAGUAZAAgAHYAZQByAHMAaQBvAG4AIABhAHIAZQAgAGkAbQBwAG8AcgB0AGUAZAAgAGYAcgBvAG0AIABSAG8AYgBvAHQAbwAgAGYAbwBuAHQAIAB1AG4AZABlAHIAIAB0AGgAZQAgAEEAcABhAGMAaABlACAATABpAGMAZQBuAHMAZQAsACAAVgBlAHIAcwBpAG8AbgAgADIALgAwAC4AUwBoAGEAYgBuAGEAbQAgAE0AZQBkAGkAdQBtACAARgBEAE0AZQBkAGkAdQBtAC0ARgBEAFMAaABhAGIAbgBhAG0AIABNAGUAZABpAHUAbQAgAEYARABTAGgAYQBiAG4AYQBtACAATQBlAGQAaQB1AG0AIABGAEQAVgBlAHIAcwBpAG8AbgAgADUALgAwAC4AMQBTAGgAYQBiAG4AYQBtAC0ATQBlAGQAaQB1AG0ALQBGAEQARABlAGoAYQBWAHUAIABmAG8AbgB0AHMAIAB0AGUAYQBtACAALQAgAFIAZQBkAGUAcwBpAGcAbgBlAGQAIABiAHkAIABTAGEAYgBlAHIAIABSAGEAcwB0AGkAawBlAHIAZABhAHIAIAAtACAAQgBhAHMAZQBkACAAbwBuACAAVgBhAHoAaQByACAAZgBvAG4AdABDAGgAYQBuAGcAZQBzACAAdABvACAAQQByAGEAYgBpAGMAIABnAGwAeQBwAGgAcwAgAGIAeQAgAG0AZQAgAGEAcgBlACAAdQBuAGQAZQByACAAUwBJAEwAIABPAHAAZQBuACAARgBvAG4AdAAgAEwAaQBjAGUAbgBzAGUAIAAxAC4AMQAKAEcAbAB5AHAAaABzACAAYQBuAGQAIABkAGEAdABhACAAZgByAG8AbQAgAFIAbwBiAG8AdABvACAAZgBvAG4AdAAgAGEAcgBlACAAbABpAGMAZQBuAHMAZQBkACAAdQBuAGQAZQByACAAdABoAGUAIABBAHAAYQBjAGgAZQAgAEwAaQBjAGUAbgBzAGUALAAgAFYAZQByAHMAaQBvAG4AIAAyAC4AMAAuAAoACgBGAG8AbgB0AHMAIABhAHIAZQAgACgAYwApACAAQgBpAHQAcwB0AHIAZQBhAG0AIAAoAHMAZQBlACAAYgBlAGwAbwB3ACkALgAgAEQAZQBqAGEAVgB1ACAAYwBoAGEAbgBnAGUAcwAgAGEAcgBlACAAaQBuACAAcAB1AGIAbABpAGMAIABkAG8AbQBhAGkAbgAuACAACgAKAEIAaQB0AHMAdAByAGUAYQBtACAAVgBlAHIAYQAgAEYAbwBuAHQAcwAgAEMAbwBwAHkAcgBpAGcAaAB0AAoALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ACgAKAEMAbwBwAHkAcgBpAGcAaAB0ACAAKABjACkAIAAyADAAMAAzACAAYgB5ACAAQgBpAHQAcwB0AHIAZQBhAG0ALAAgAEkAbgBjAC4AIABBAGwAbAAgAFIAaQBnAGgAdABzACAAUgBlAHMAZQByAHYAZQBkAC4AIABCAGkAdABzAHQAcgBlAGEAbQAgAFYAZQByAGEAIABpAHMACgBhACAAdAByAGEAZABlAG0AYQByAGsAIABvAGYAIABCAGkAdABzAHQAcgBlAGEAbQAsACAASQBuAGMALgAKAAoAUABlAHIAbQBpAHMAcwBpAG8AbgAgAGkAcwAgAGgAZQByAGUAYgB5ACAAZwByAGEAbgB0AGUAZAAsACAAZgByAGUAZQAgAG8AZgAgAGMAaABhAHIAZwBlACwAIAB0AG8AIABhAG4AeQAgAHAAZQByAHMAbwBuACAAbwBiAHQAYQBpAG4AaQBuAGcAIABhACAAYwBvAHAAeQAKAG8AZgAgAHQAaABlACAAZgBvAG4AdABzACAAYQBjAGMAbwBtAHAAYQBuAHkAaQBuAGcAIAB0AGgAaQBzACAAbABpAGMAZQBuAHMAZQAgACgAIgBGAG8AbgB0AHMAIgApACAAYQBuAGQAIABhAHMAcwBvAGMAaQBhAHQAZQBkAAoAZABvAGMAdQBtAGUAbgB0AGEAdABpAG8AbgAgAGYAaQBsAGUAcwAgACgAdABoAGUAIAAiAEYAbwBuAHQAIABTAG8AZgB0AHcAYQByAGUAIgApACwAIAB0AG8AIAByAGUAcAByAG8AZAB1AGMAZQAgAGEAbgBkACAAZABpAHMAdAByAGkAYgB1AHQAZQAgAHQAaABlAAoARgBvAG4AdAAgAFMAbwBmAHQAdwBhAHIAZQAsACAAaQBuAGMAbAB1AGQAaQBuAGcAIAB3AGkAdABoAG8AdQB0ACAAbABpAG0AaQB0AGEAdABpAG8AbgAgAHQAaABlACAAcgBpAGcAaAB0AHMAIAB0AG8AIAB1AHMAZQAsACAAYwBvAHAAeQAsACAAbQBlAHIAZwBlACwACgBwAHUAYgBsAGkAcwBoACwAIABkAGkAcwB0AHIAaQBiAHUAdABlACwAIABhAG4AZAAvAG8AcgAgAHMAZQBsAGwAIABjAG8AcABpAGUAcwAgAG8AZgAgAHQAaABlACAARgBvAG4AdAAgAFMAbwBmAHQAdwBhAHIAZQAsACAAYQBuAGQAIAB0AG8AIABwAGUAcgBtAGkAdAAKAHAAZQByAHMAbwBuAHMAIAB0AG8AIAB3AGgAbwBtACAAdABoAGUAIABGAG8AbgB0ACAAUwBvAGYAdAB3AGEAcgBlACAAaQBzACAAZgB1AHIAbgBpAHMAaABlAGQAIAB0AG8AIABkAG8AIABzAG8ALAAgAHMAdQBiAGoAZQBjAHQAIAB0AG8AIAB0AGgAZQAKAGYAbwBsAGwAbwB3AGkAbgBnACAAYwBvAG4AZABpAHQAaQBvAG4AcwA6AAoACgBUAGgAZQAgAGEAYgBvAHYAZQAgAGMAbwBwAHkAcgBpAGcAaAB0ACAAYQBuAGQAIAB0AHIAYQBkAGUAbQBhAHIAawAgAG4AbwB0AGkAYwBlAHMAIABhAG4AZAAgAHQAaABpAHMAIABwAGUAcgBtAGkAcwBzAGkAbwBuACAAbgBvAHQAaQBjAGUAIABzAGgAYQBsAGwACgBiAGUAIABpAG4AYwBsAHUAZABlAGQAIABpAG4AIABhAGwAbAAgAGMAbwBwAGkAZQBzACAAbwBmACAAbwBuAGUAIABvAHIAIABtAG8AcgBlACAAbwBmACAAdABoAGUAIABGAG8AbgB0ACAAUwBvAGYAdAB3AGEAcgBlACAAdAB5AHAAZQBmAGEAYwBlAHMALgAKAAoAVABoAGUAIABGAG8AbgB0ACAAUwBvAGYAdAB3AGEAcgBlACAAbQBhAHkAIABiAGUAIABtAG8AZABpAGYAaQBlAGQALAAgAGEAbAB0AGUAcgBlAGQALAAgAG8AcgAgAGEAZABkAGUAZAAgAHQAbwAsACAAYQBuAGQAIABpAG4AIABwAGEAcgB0AGkAYwB1AGwAYQByAAoAdABoAGUAIABkAGUAcwBpAGcAbgBzACAAbwBmACAAZwBsAHkAcABoAHMAIABvAHIAIABjAGgAYQByAGEAYwB0AGUAcgBzACAAaQBuACAAdABoAGUAIABGAG8AbgB0AHMAIABtAGEAeQAgAGIAZQAgAG0AbwBkAGkAZgBpAGUAZAAgAGEAbgBkAAoAYQBkAGQAaQB0AGkAbwBuAGEAbAAgAGcAbAB5AHAAaABzACAAbwByACAAYwBoAGEAcgBhAGMAdABlAHIAcwAgAG0AYQB5ACAAYgBlACAAYQBkAGQAZQBkACAAdABvACAAdABoAGUAIABGAG8AbgB0AHMALAAgAG8AbgBsAHkAIABpAGYAIAB0AGgAZQAgAGYAbwBuAHQAcwAKAGEAcgBlACAAcgBlAG4AYQBtAGUAZAAgAHQAbwAgAG4AYQBtAGUAcwAgAG4AbwB0ACAAYwBvAG4AdABhAGkAbgBpAG4AZwAgAGUAaQB0AGgAZQByACAAdABoAGUAIAB3AG8AcgBkAHMAIAAiAEIAaQB0AHMAdAByAGUAYQBtACIAIABvAHIAIAB0AGgAZQAgAHcAbwByAGQACgAiAFYAZQByAGEAIgAuAAoACgBUAGgAaQBzACAATABpAGMAZQBuAHMAZQAgAGIAZQBjAG8AbQBlAHMAIABuAHUAbABsACAAYQBuAGQAIAB2AG8AaQBkACAAdABvACAAdABoAGUAIABlAHgAdABlAG4AdAAgAGEAcABwAGwAaQBjAGEAYgBsAGUAIAB0AG8AIABGAG8AbgB0AHMAIABvAHIAIABGAG8AbgB0AAoAUwBvAGYAdAB3AGEAcgBlACAAdABoAGEAdAAgAGgAYQBzACAAYgBlAGUAbgAgAG0AbwBkAGkAZgBpAGUAZAAgAGEAbgBkACAAaQBzACAAZABpAHMAdAByAGkAYgB1AHQAZQBkACAAdQBuAGQAZQByACAAdABoAGUAIAAiAEIAaQB0AHMAdAByAGUAYQBtAAoAVgBlAHIAYQAiACAAbgBhAG0AZQBzAC4ACgAKAFQAaABlACAARgBvAG4AdAAgAFMAbwBmAHQAdwBhAHIAZQAgAG0AYQB5ACAAYgBlACAAcwBvAGwAZAAgAGEAcwAgAHAAYQByAHQAIABvAGYAIABhACAAbABhAHIAZwBlAHIAIABzAG8AZgB0AHcAYQByAGUAIABwAGEAYwBrAGEAZwBlACAAYgB1AHQAIABuAG8ACgBjAG8AcAB5ACAAbwBmACAAbwBuAGUAIABvAHIAIABtAG8AcgBlACAAbwBmACAAdABoAGUAIABGAG8AbgB0ACAAUwBvAGYAdAB3AGEAcgBlACAAdAB5AHAAZQBmAGEAYwBlAHMAIABtAGEAeQAgAGIAZQAgAHMAbwBsAGQAIABiAHkAIABpAHQAcwBlAGwAZgAuAAoACgBUAEgARQAgAEYATwBOAFQAIABTAE8ARgBUAFcAQQBSAEUAIABJAFMAIABQAFIATwBWAEkARABFAEQAIAAiAEEAUwAgAEkAUwAiACwAIABXAEkAVABIAE8AVQBUACAAVwBBAFIAUgBBAE4AVABZACAATwBGACAAQQBOAFkAIABLAEkATgBEACwAIABFAFgAUABSAEUAUwBTAAoATwBSACAASQBNAFAATABJAEUARAAsACAASQBOAEMATABVAEQASQBOAEcAIABCAFUAVAAgAE4ATwBUACAATABJAE0ASQBUAEUARAAgAFQATwAgAEEATgBZACAAVwBBAFIAUgBBAE4AVABJAEUAUwAgAE8ARgAgAE0ARQBSAEMASABBAE4AVABBAEIASQBMAEkAVABZACwACgBGAEkAVABOAEUAUwBTACAARgBPAFIAIABBACAAUABBAFIAVABJAEMAVQBMAEEAUgAgAFAAVQBSAFAATwBTAEUAIABBAE4ARAAgAE4ATwBOAEkATgBGAFIASQBOAEcARQBNAEUATgBUACAATwBGACAAQwBPAFAAWQBSAEkARwBIAFQALAAgAFAAQQBUAEUATgBUACwACgBUAFIAQQBEAEUATQBBAFIASwAsACAATwBSACAATwBUAEgARQBSACAAUgBJAEcASABUAC4AIABJAE4AIABOAE8AIABFAFYARQBOAFQAIABTAEgAQQBMAEwAIABCAEkAVABTAFQAUgBFAEEATQAgAE8AUgAgAFQASABFACAARwBOAE8ATQBFAAoARgBPAFUATgBEAEEAVABJAE8ATgAgAEIARQAgAEwASQBBAEIATABFACAARgBPAFIAIABBAE4AWQAgAEMATABBAEkATQAsACAARABBAE0AQQBHAEUAUwAgAE8AUgAgAE8AVABIAEUAUgAgAEwASQBBAEIASQBMAEkAVABZACwAIABJAE4AQwBMAFUARABJAE4ARwAKAEEATgBZACAARwBFAE4ARQBSAEEATAAsACAAUwBQAEUAQwBJAEEATAAsACAASQBOAEQASQBSAEUAQwBUACwAIABJAE4AQwBJAEQARQBOAFQAQQBMACwAIABPAFIAIABDAE8ATgBTAEUAUQBVAEUATgBUAEkAQQBMACAARABBAE0AQQBHAEUAUwAsAAoAVwBIAEUAVABIAEUAUgAgAEkATgAgAEEATgAgAEEAQwBUAEkATwBOACAATwBGACAAQwBPAE4AVABSAEEAQwBUACwAIABUAE8AUgBUACAATwBSACAATwBUAEgARQBSAFcASQBTAEUALAAgAEEAUgBJAFMASQBOAEcAIABGAFIATwBNACwAIABPAFUAVAAgAE8ARgAKAFQASABFACAAVQBTAEUAIABPAFIAIABJAE4AQQBCAEkATABJAFQAWQAgAFQATwAgAFUAUwBFACAAVABIAEUAIABGAE8ATgBUACAAUwBPAEYAVABXAEEAUgBFACAATwBSACAARgBSAE8ATQAgAE8AVABIAEUAUgAgAEQARQBBAEwASQBOAEcAUwAgAEkATgAgAFQASABFAAoARgBPAE4AVAAgAFMATwBGAFQAVwBBAFIARQAuAAoACgBFAHgAYwBlAHAAdAAgAGEAcwAgAGMAbwBuAHQAYQBpAG4AZQBkACAAaQBuACAAdABoAGkAcwAgAG4AbwB0AGkAYwBlACwAIAB0AGgAZQAgAG4AYQBtAGUAcwAgAG8AZgAgAEcAbgBvAG0AZQAsACAAdABoAGUAIABHAG4AbwBtAGUACgBGAG8AdQBuAGQAYQB0AGkAbwBuACwAIABhAG4AZAAgAEIAaQB0AHMAdAByAGUAYQBtACAASQBuAGMALgAsACAAcwBoAGEAbABsACAAbgBvAHQAIABiAGUAIAB1AHMAZQBkACAAaQBuACAAYQBkAHYAZQByAHQAaQBzAGkAbgBnACAAbwByAAoAbwB0AGgAZQByAHcAaQBzAGUAIAB0AG8AIABwAHIAbwBtAG8AdABlACAAdABoAGUAIABzAGEAbABlACwAIAB1AHMAZQAgAG8AcgAgAG8AdABoAGUAcgAgAGQAZQBhAGwAaQBuAGcAcwAgAGkAbgAgAHQAaABpAHMAIABGAG8AbgB0ACAAUwBvAGYAdAB3AGEAcgBlAAoAdwBpAHQAaABvAHUAdAAgAHAAcgBpAG8AcgAgAHcAcgBpAHQAdABlAG4AIABhAHUAdABoAG8AcgBpAHoAYQB0AGkAbwBuACAAZgByAG8AbQAgAHQAaABlACAARwBuAG8AbQBlACAARgBvAHUAbgBkAGEAdABpAG8AbgAgAG8AcgAgAEIAaQB0AHMAdAByAGUAYQBtAAoASQBuAGMALgAsACAAcgBlAHMAcABlAGMAdABpAHYAZQBsAHkALgAgAEYAbwByACAAZgB1AHIAdABoAGUAcgAgAGkAbgBmAG8AcgBtAGEAdABpAG8AbgAsACAAYwBvAG4AdABhAGMAdAA6ACAAZgBvAG4AdABzACAAYQB0ACAAZwBuAG8AbQBlACAAZABvAHQACgBvAHIAZwAuACAAaAB0AHQAcAA6AC8ALwBzAGMAcgBpAHAAdABzAC4AcwBpAGwALgBvAHIAZwAvAE8ARgBMAF8AdwBlAGIAIAAKAGgAdAB0AHAAOgAvAC8AZABlAGoAYQB2AHUALgBzAG8AdQByAGMAZQBmAG8AcgBnAGUALgBuAGUAdAAvAHcAaQBrAGkALwBpAG4AZABlAHgALgBwAGgAcAAvAEwAaQBjAGUAbgBzAGUACgBoAHQAdABwADoALwAvAHcAdwB3AC4AYQBwAGEAYwBoAGUALgBvAHIAZwAvAGwAaQBjAGUAbgBzAGUAcwAvAEwASQBDAEUATgBTAEUALQAyAC4AMABTAGgAYQBiAG4AYQBtACAARgBEAE0AZQBkAGkAdQBtBicGzAZGACAGzAapACAGRQYrBicGRAAgBigGMQYnBswAIAZGBkUGJwbMBjQAIAZBBkgGRgYqACAGRQbMIAwGKAYnBjQGLwAuBicGzAZGACAGzAapACAGRQYrBicGRAAgBigGMQYnBswAIAZGBkUGJwbMBjQAIAZBBkgGRgYqACAGRQbMIAwGKAYnBjQGLwAuAAACAAAAAAAA/doAZAAAAAAAAAAAAAAAAAAAAAAAAAAAAioAAAECAQMBBAADAAQABQAGAAcACAAJAAoACwAMAA0ADgAPABAAEQASABMAFAAVABYAFwAYABkAGgAbABwAHQAeAB8AIAAhACIAIwAkACUAJgAnACgAKQAqACsALAAtAC4ALwAwADEAMgAzADQANQA2ADcAOAA5ADoAOwA8AD0APgA/AEAAQQBCAEMARABFAEYARwBIAEkASgBLAEwATQBOAE8AUABRAFIAUwBUAFUAVgBXAFgAWQBaAFsAXABdAF4AXwBgAGEBBQCjAIQAhQC9AJYA6ACGAI4AiwCdAKkApAEGAIoA2gCDAJMBBwEIAI0AlwCIAMMA3gEJAJ4AqgD1APQA9gCiAQoA2ADhAQsA2wDcAN0A4ADZAN8BDAENAQ4BDwEQAREBEgETARQBFQEWARcBGAEZARoBGwEcAR0BHgEfASABIQEiASMBJAElASYBJwEoASkBKgErASwBLQEuAS8BMAExATIBMwE0ATUBNgE3ATgBOQE6ATsBPAE9AT4BPwFAAUEBQgFDAUQBRQFGAUcBSAFJAUoBSwFMAU0BTgFPAVABUQFSAVMBVAFVAVYBVwFYAVkBWgFbAVwBXQFeAV8BYAFhAWIBYwFkAWUBZgFnAWgBaQFqAWsBbAFtAW4BbwFwAXEBcgFzAXQBdQF2AXcBeAF5AXoBewF8AX0BfgF/AYABgQGCAYMBhAGFAYYBhwGIALIBiQC2ALcAxAGKALQAtQDFAIIAwgCHAYsAqwGMAMYBjQGOAL4AvwGPALwBkAGRAPcBkgGTAZQBlQGWAZcBmACMAJ8BmQGaAZsBnAGdAJgAqACaAJkA7wClAJIAnACnAI8AlACVALkBngGfAaABoQGiAaMBpAGlAaYBpwGoAakBqgGrAawBrQGuAa8BsAGxAbIBswG0AbUBtgG3AbgBuQG6AbsBvAG9Ab4BvwHAAcEBwgHDAcQBxQHGAccByAHJAcoBywHMAc0BzgHPAdAB0QHSAdMB1AHVAdYB1wHYAdkB2gHbAdwB3QHeAd8B4AHhAeIB4wHkAeUB5gHnAegB6QHqAesB7AHtAe4B7wHwAfEB8gHzAfQB9QH2AfcB+AH5AfoB+wH8Af0B/gH/AgACAQICAgMCBAIFAgYCBwIIAgkCCgILAgwCDQIOAg8CEAIRAhICEwIUAhUCFgIXAhgCGQIaAhsCHAIdAh4CHwIgAiECIgIjAiQCJQImAicCKAIpAioCKwIsAi0CLgIvAjACMQIyAjMCNAI1AjYCNwI4AjkCOgI7AjwCPQI+Aj8CQAJBAkICQwJEAkUCRgJHAkgCSQJKAksCTAJNAk4CTwJQAlECUgJTAlQCVQJWAlcCWAJZAloCWwJcAl0CXgJfAmACYQJiAmMCZAJlAmYCZwJoAmkCagJrAmwCbQJuAm8CcAJxAnICcwJ0AnUCdgJ3AngCeQJ6AnsCfAJ9An4CfwKAAoECggKDAoQChQKGAocCiAKJB3VuaTAwMDAHdW5pMDAwRAd1bmkwMDAyB3VuaTAwQTAHdW5pMDBBRAd1bmkwMEIyB3VuaTAwQjMHdW5pMDBCOQd1bmkwMkJDB3VuaTAyQzkHdW5pMDJGMwlncmF2ZWNvbWIJYWN1dGVjb21iCXRpbGRlY29tYg1ob29rYWJvdmVjb21iB3VuaTAzMEYMZG90YmVsb3djb21iBXRvbm9zDWRpZXJlc2lzdG9ub3MHdW5pMDYwQwd1bmkwNjBEB3VuaTA2MTUHdW5pMDYxQgd1bmkwNjFGB3VuaTA2MjEHdW5pMDYyMgd1bmkwNjIzB3VuaTA2MjQHdW5pMDYyNQd1bmkwNjI2B3VuaTA2MjcHdW5pMDYyOAd1bmkwNjI5B3VuaTA2MkEHdW5pMDYyQgd1bmkwNjJDB3VuaTA2MkQHdW5pMDYyRQd1bmkwNjJGB3VuaTA2MzAHdW5pMDYzMQd1bmkwNjMyB3VuaTA2MzMHdW5pMDYzNAd1bmkwNjM1B3VuaTA2MzYHdW5pMDYzNwd1bmkwNjM4B3VuaTA2MzkHdW5pMDYzQQd1bmkwNjQwB3VuaTA2NDEHdW5pMDY0Mgd1bmkwNjQzB3VuaTA2NDQHdW5pMDY0NQd1bmkwNjQ2B3VuaTA2NDcHdW5pMDY0OAd1bmkwNjQ5B3VuaTA2NEEHdW5pMDY0Qgd1bmkwNjRDB3VuaTA2NEQHdW5pMDY0RQd1bmkwNjRGB3VuaTA2NTAHdW5pMDY1MQd1bmkwNjUyB3VuaTA2NTMHdW5pMDY1NAd1bmkwNjU1B3VuaTA2NTcHdW5pMDY1QQd1bmkwNjYwB3VuaTA2NjEHdW5pMDY2Mgd1bmkwNjYzB3VuaTA2NjQHdW5pMDY2NQd1bmkwNjY2B3VuaTA2NjcHdW5pMDY2OAd1bmkwNjY5B3VuaTA2NkEHdW5pMDY2Qgd1bmkwNjZDB3VuaTA2NkQHdW5pMDY2RQd1bmkwNjZGB3VuaTA2NzAHdW5pMDY3NAd1bmkwNjdFB3VuaTA2ODYHdW5pMDY5NQd1bmkwNjk4B3VuaTA2QTEHdW5pMDZBNAd1bmkwNkE5B3VuaTA2QUYHdW5pMDZCNQd1bmkwNkJBB3VuaTA2QkUHdW5pMDZDMAd1bmkwNkM2B3VuaTA2Q0EHdW5pMDZDQwd1bmkwNkNFB3VuaTA2RDUHdW5pMDZGMAd1bmkwNkYxB3VuaTA2RjIHdW5pMDZGMwd1bmkwNkY0B3VuaTA2RjUHdW5pMDZGNgd1bmkwNkY3B3VuaTA2RjgHdW5pMDZGOQd1bmkyMDAwB3VuaTIwMDEHdW5pMjAwMgd1bmkyMDAzB3VuaTIwMDQHdW5pMjAwNQd1bmkyMDA2B3VuaTIwMDcHdW5pMjAwOAd1bmkyMDA5B3VuaTIwMEEHdW5pMjAwQgd1bmkyMDBDB3VuaTIwMEQHdW5pMjAxMAd1bmkyMDExDXVuZGVyc2NvcmVkYmwNcXVvdGVyZXZlcnNlZA50d29kb3RlbmxlYWRlcgd1bmkyMDJGBm1pbnV0ZQZzZWNvbmQJZXhjbGFtZGJsB3VuaTIwNzQHdW5pMjA3RgRsaXJhBnBlc2V0YQRkb25nBEV1cm8HdW5pMjEwNQd1bmkyMTEzB3VuaTIxMTYJZXN0aW1hdGVkCW9uZWVpZ2h0aAx0aHJlZWVpZ2h0aHMLZml2ZWVpZ2h0aHMMc2V2ZW5laWdodGhzB3VuaUVFMDEHdW5pRUUwMgd1bmlGNkMzB3VuaUZCMDEHdW5pRkIwMgd1bmlGQjAzB3VuaUZCMDQHdW5pRkI1Ngd1bmlGQjU3B3VuaUZCNTgHdW5pRkI1OQd1bmlGQjZCB3VuaUZCNkMHdW5pRkI2RAd1bmlGQjdBB3VuaUZCN0IHdW5pRkI3Qwd1bmlGQjdEB3VuaUZCOEEHdW5pRkI4Qgd1bmlGQjhFB3VuaUZCOEYHdW5pRkI5MAd1bmlGQjkxB3VuaUZCOTIHdW5pRkI5Mwd1bmlGQjk0B3VuaUZCOTUHdW5pRkI5RQd1bmlGQjlGDHVuaUZCQTUuZmluYQd1bmlGQkFDB3VuaUZCQUQHdW5pRkJEQQd1bmlGQkU4B3VuaUZCRTkHdW5pRkJGQwd1bmlGQkZEB3VuaUZCRkUHdW5pRkJGRgd1bmlGREYyB3VuaUZERkMHdW5pRkU3MAd1bmlGRTcxB3VuaUZFNzIHdW5pRkU3Mwd1bmlGRTc0B3VuaUZFNzYHdW5pRkU3Nwd1bmlGRTc4B3VuaUZFNzkHdW5pRkU3QQd1bmlGRTdCB3VuaUZFN0MHdW5pRkU3RAd1bmlGRTdFB3VuaUZFN0YHdW5pRkU4MAd1bmlGRTgxB3VuaUZFODIHdW5pRkU4Mwd1bmlGRTg0B3VuaUZFODUHdW5pRkU4Ngd1bmlGRTg3B3VuaUZFODgHdW5pRkU4OQd1bmlGRThBB3VuaUZFOEIHdW5pRkU4Qwd1bmlGRThEB3VuaUZFOEUHdW5pRkU4Rgd1bmlGRTkwB3VuaUZFOTEHdW5pRkU5Mgd1bmlGRTkzB3VuaUZFOTQHdW5pRkU5NQd1bmlGRTk2B3VuaUZFOTcHdW5pRkU5OAd1bmlGRTk5B3VuaUZFOUEHdW5pRkU5Qgd1bmlGRTlDB3VuaUZFOUQHdW5pRkU5RQd1bmlGRTlGB3VuaUZFQTAHdW5pRkVBMQd1bmlGRUEyB3VuaUZFQTMHdW5pRkVBNAd1bmlGRUE1B3VuaUZFQTYHdW5pRkVBNwd1bmlGRUE4B3VuaUZFQTkHdW5pRkVBQQd1bmlGRUFCB3VuaUZFQUMHdW5pRkVBRAd1bmlGRUFFB3VuaUZFQUYHdW5pRkVCMAd1bmlGRUIxB3VuaUZFQjIHdW5pRkVCMwd1bmlGRUI0B3VuaUZFQjUHdW5pRkVCNgd1bmlGRUI3B3VuaUZFQjgHdW5pRkVCOQd1bmlGRUJBB3VuaUZFQkIHdW5pRkVCQwd1bmlGRUJEB3VuaUZFQkUHdW5pRkVCRgd1bmlGRUMwB3VuaUZFQzEHdW5pRkVDMgd1bmlGRUMzB3VuaUZFQzQHdW5pRkVDNQd1bmlGRUM2B3VuaUZFQzcHdW5pRkVDOAd1bmlGRUM5B3VuaUZFQ0EHdW5pRkVDQgd1bmlGRUNDB3VuaUZFQ0QHdW5pRkVDRQd1bmlGRUNGB3VuaUZFRDAHdW5pRkVEMQd1bmlGRUQyB3VuaUZFRDMHdW5pRkVENAd1bmlGRUQ1B3VuaUZFRDYHdW5pRkVENwd1bmlGRUQ4B3VuaUZFRDkHdW5pRkVEQQd1bmlGRURCB3VuaUZFREMHdW5pRkVERAd1bmlGRURFB3VuaUZFREYHdW5pRkVFMAd1bmlGRUUxB3VuaUZFRTIHdW5pRkVFMwd1bmlGRUU0B3VuaUZFRTUHdW5pRkVFNgd1bmlGRUU3B3VuaUZFRTgHdW5pRkVFOQd1bmlGRUVBB3VuaUZFRUIHdW5pRkVFQwd1bmlGRUVEB3VuaUZFRUUHdW5pRkVFRgd1bmlGRUYwB3VuaUZFRjEHdW5pRkVGMgd1bmlGRUYzB3VuaUZFRjQHdW5pRkVGNQd1bmlGRUY2B3VuaUZFRjcHdW5pRkVGOAd1bmlGRUY5B3VuaUZFRkEHdW5pRkVGQgd1bmlGRUZDB3VuaUZFRkYHdW5pRkZGQwd1bmlGRkZECmFyYWJpY19kb3QMYXJhYmljXzJkb3RzDGFyYWJpY18zZG90cw5hcmFiaWNfM2RvdHNfYQx1bmkwNjZFLmZpbmEMdW5pMDZBMS5maW5hDHVuaTA2QTEuaW5pdAx1bmkwNkExLm1lZGkMdW5pMDY2Ri5maW5hDmFyYWJpY19nYWZfYmFyDHVuaTA2RDUuZmluYQt1bmkwNjUxMDY0Qgt1bmkwNjUxMDY0Qwt1bmkwNjRCMDY1MQt1bmkwNjUxMDY0RQt1bmkwNjUxMDY0Rgt1bmkwNjRFMDY1MQt1bmkwNjU0MDY0RQt1bmkwNjU0MDY0Rgx1bmkwNkNBLmZpbmEKTmFtZU1lLjMwMgpOYW1lTWUuMzAzDE5hbWVNZS42NTU2NAxOYW1lTWUuNjU1NjUMTmFtZU1lLjY1NTQxDE5hbWVNZS42NTU0Mgx1bmkwNjk1LmZpbmEMdW5pMDZDRS5maW5hDHVuaTA2Q0UuaW5pdAx1bmkwNkNFLm1lZGkMdW5pMDZCNS5maW5hDHVuaTA2QjUuaW5pdAx1bmkwNkI1Lm1lZGkTbGFtVmFib3ZlX2FsZWYuaXNvbAxOYW1lTWUuNjU1NzQPdW5pRkJGRC5jb21wYWN0D3VuaUZFOEEuY29tcGFjdA91bmlGRUYyLmNvbXBhY3QPdW5pRkVDQy5jb21wYWN0D3VuaUZFRDAu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",
};
downloadPDFBtn.addEventListener("click", () => {
  pdfMake.vfs["Shabnam.ttf"] = vfs["Shabnam.ttf"];

  console.log(pdfMake);

  pdfMake.fonts = {
    Shabnam: {
      normal: "Shabnam.ttf", // فونت پیش‌فرض
    },
  };

  const docDefinition = {
    info: {
      title: "prices document",
      author: "john doe",
      subject: "subject of document",
      keywords: "keywords for document",
    },
    content: [
      {
        text: "هما توسعه و تجارت فروش اکسیر کاوش"
          .split(" ")
          .reverse()
          .join(" "),
        fontSize: 16,
      },
      {
        text: "قیمت ها (prices)  به روز محاسبه می شود."
          .split(" ")
          .reverse()
          .join(" "),
        fontSize: 14,
      },
      {
        layout: "lightHorizontalLines", // optional
        table: {
          widths: ["*", "*", "*", "*"],

          body: [
            ["ضامن", "تحویل", "چک", "پیش پرداخت"].reverse(),
            [
              "بدون ضامن",
              "فوری",
              "1,000,000,000 تومان".split(" ").reverse().join("  "),
              "450,000,000",
            ].reverse(),
            [{ text: "Bold value" }, "Val 2", "Val 3", "Val 4"].reverse(),
          ],
        },
      },
      {
        text: "جدول پیشرفته با استایل دلخواه".split(" ").reverse().join(" "),
        style: "header",
        alignment: "center",
      },
      {
        table: {
          widths: [100, "*", 200], // عرض ستون‌ها
          body: [
            // ردیف‌های جدول
            [
              {
                text: "ستون اول".split(" ").reverse().join(" "),
                style: "tableHeader",
                alignment: "center",
              },
              {
                text: "ستون دوم",
                style: "tableHeader",
                alignment: "center",
              },
              {
                text: "ستون سوم",
                style: "tableHeader",
                alignment: "center",
              },
            ],
            [
              {
                text: "مقدار 1",
                alignment: "right",
                fillColor: "#f0f0f0",
              },
              { text: "مقدار 2", alignment: "center" },
              {
                text: "مقدار 3",
                alignment: "left",
                fillColor: "#d1e7dd",
              },
            ],
            [
              { text: "مقدار 4", alignment: "right" },
              {
                text: "مقدار 5",
                alignment: "center",
                fillColor: "#f8d7da",
              },
              { text: "مقدار 6", alignment: "left" },
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

  // ایجاد و دانلود فایل PDF
  pdfMake.createPdf(docDefinition).download("1403-24-10");
});
