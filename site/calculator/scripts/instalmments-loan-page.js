import {
  separateNumberInput,
  getNumberSeparatedInputValue,
  loanCalculation,
  calculateGuaranteePrice,
} from "./utils/funcs/loan-demo.js";

const installmentInput = document.querySelector("#installment-price-input");
const installmentConditionButtons = document.querySelectorAll(
  ".installments__conditions button"
);

const installmentsCalculateBtn = document.querySelector(
  ".installments-calculate-btn"
);

const installmentsInfo = document.querySelector(".installments__info");

installmentConditionButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    installmentConditionButtons.forEach((item) =>
      item.classList.remove("active")
    );
    btn.classList.add("active");
  });
});

separateNumberInput(installmentInput);

installmentsCalculateBtn.addEventListener("click", () => {
  const price = getNumberSeparatedInputValue(installmentInput);

  if (!price) {
    Swal.fire({
      title: "خطا!",
      text: "قیمت را وارد کنید.",
      icon: "error",
      confirmButtonText: "بازگشت",
    });

    return;
  }

  const priceAfterPercentage = price + price * 0.03;

  const activeCondition = +document.querySelector(
    ".installments__conditions button.active"
  ).dataset.months;

  let incrementalPercent = 0;

  switch (activeCondition) {
    case 7:
      {
        incrementalPercent = 7;
      }
      break;
    case 13:
      {
        incrementalPercent = 13;
      }
      break;
    case 19:
      {
        incrementalPercent = 19;
      }
      break;
    case 25:
      {
        incrementalPercent = 25;
      }
      break;
    case 37:
      {
        incrementalPercent = 30;
      }
      break;
  }

  const loanPrice = Math.floor(
    priceAfterPercentage + (priceAfterPercentage * incrementalPercent) / 100
  );

  const { monthlyPayment, totalInterest, totalPayment } = loanCalculation(
    loanPrice,
    23,
    activeCondition - 1
  );

  const guaranteePrice = calculateGuaranteePrice(totalPayment, "check");

  installmentsInfo.innerHTML = `
    <div class="installments__info-item">
      <div>
        <span>مبلغ وام</span>
        <span>${loanPrice.toLocaleString()} تومان</span>
      </div>
      <div>
        <span>مبلغ قسط</span>
        <span>${monthlyPayment.toLocaleString()} تومان</span>
      </div>
      <div>
        <span>سود وام</span>
        <span>${totalInterest.toLocaleString()} تومان</span>
      </div>
        <div>
        <span>بازپرداخت وام</span>
        <span>${totalPayment.toLocaleString()} تومان</span>
      </div>
      <div>
        <span>مبلغ چک ضمانت</span>
        <span>${guaranteePrice.toLocaleString()} تومان</span>
      </div>
    </div>
  `;
});
