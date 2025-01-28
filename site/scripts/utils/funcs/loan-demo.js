export const loanCalculation = (
  loanPrice,
  annualInterestRate,
  returnMonths
) => {
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

export const separateNumberInput = (input) => {
  input.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, "");

    const splittedValue = e.target.value.split(",");

    const numberedValue = Number(splittedValue.join(""));

    e.target.value = numberedValue.toLocaleString();

    if (e.target.value === "0") e.target.value = "";
  });
};

export const showPaymentMonths = (conditions) => {
  let allConditions = [];
  for (let i in conditions) {
    allConditions = [...allConditions, ...conditions[i]];
  }

  const months = allConditions.map((condition) => condition.conditionMonths);
  let montshWithoutDuplicate = [...new Set(months)];
  const sortedMonths = montshWithoutDuplicate.sort((a, b) => a - b);

  document.querySelector(".loan-installments").innerHTML = sortedMonths
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

export const getNumberSeparatedInputValue = (input) =>
  +input.value.trim().split(",").join("");

export const calculateGuaranteePrice = (price, guaranteeType) => {
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

export const companyCalculation = (
  productPrice,
  condition,
  customPrepayment
) => {
  const initialIncrease =
    productPrice + (productPrice * condition.initialIncrease) / 100;

  let prePayment = 0;
  let loanPrice = 0;
  let remainPrice = 0;

  if (customPrepayment) {
    prePayment = customPrepayment;
  } else {
    prePayment = (initialIncrease * condition.prePayment) / 100;
  }

  remainPrice = initialIncrease - prePayment;

  if (condition.secondaryIncrease) {
    loanPrice = remainPrice + (remainPrice * condition.secondaryIncrease) / 100;
  } else {
    loanPrice = initialIncrease - prePayment;
  }

  return { initialIncrease, loanPrice, prePayment };
};

export const showAllPayment = (rows) => {
  const allConditionsElem = document.querySelector(".condition-table tbody");
  const allConditionsTableHeader = document.querySelector(
    ".condition-table thead"
  );

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
