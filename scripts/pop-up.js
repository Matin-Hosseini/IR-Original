const submitBtn = document.querySelector("#submit-btn");

const CTAForm = document.querySelector("#cta-form");

const setInputError = (input, message) => {
  input.classList.add("error");
  input.parentElement.nextElementSibling.innerHTML = message;
};
const removeInputError = (input) => {
  input.classList.remove("error");
  input.parentElement.nextElementSibling.innerHTML = "";
};

// const regex = /09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}/g;
const regex = /^(\+98|0)?9\d{9}$/g;

const validateForm = () => {
  if (!phone.value.trim()) {
    setInputError(phone, "لطفا شماره موبایل خود را وارد کنید.");
    submitBtn.setAttribute("disabled", "true");
    return false;
  } else if (!regex.test(phone.value.trim())) {
    setInputError(phone, "شماره موبایل نامعتبر می باشد.");
    submitBtn.setAttribute("disabled", "true");
    return false;
  } else {
    removeInputError(phone);
    submitBtn.removeAttribute("disabled");
    return true;
  }
};

CTAForm.addEventListener("input", () => {
  validateForm();
});

submitBtn.addEventListener("click", (e) => {
  submitBtn.innerHTML = `<div class="loader"></div>`;
  submitBtn.setAttribute("disabled", "true");

  setTimeout(() => {
    submitBtn.innerHTML = "ثبت";
    submitBtn.removeAttribute("disabled");
  }, 3000);
});

const otpInputs = document.querySelectorAll(".otp-wrapper input");
const otpWrapper = document.querySelector(".otp-wrapper");

const updateOtpInput = (element, disabledStatus) => {
  element.disabled = disabledStatus;
  if (!disabledStatus) {
    element.focus();
  } else {
    element.blur();
  }
};

let inputCount = 0;
otpInputs.forEach((input) => {
  input.addEventListener("keyup", (e) => {
    let { value } = e.target;
    value = value.replace(/[^0-9]/g, "");

    if (value.length === 1) {
      if (inputCount === 3) {
        updateOtpInput(input, true);
      }
      if (inputCount < 3 && e.key !== "Backspace") {
        updateOtpInput(input, true);
        updateOtpInput(input.nextElementSibling, false);
        inputCount += 1;
      }
    } else if (e.key === "Backspace") {
      if (inputCount === 0) return;

      updateOtpInput(input, true);
      updateOtpInput(input.previousElementSibling, false);

      input.value = "";
      input.previousElementSibling.value = "";

      inputCount -= 1;
    } else if (value.length > 1) {
      input.value = value.split("")[0];
      
      
    }
  });
});

const startOtp = () => {
  inputCount = 0;

  otpInputs.forEach((input) => {
    input.value = "";
    updateOtpInput(input, true);
  });
  updateOtpInput(otpInputs[0], false);
};

window.addEventListener("load", () => startOtp());
window.addEventListener("keyup", (e) => {
  if (e.key === "Backspace" && inputCount === 3) {
    otpInputs[3].value = "";
    updateOtpInput(otpInputs[3], false);
    inputCount = 3;
  }
});

setTimeout(() => {
  startOtp();
}, 5000);
