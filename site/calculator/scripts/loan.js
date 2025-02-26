const input = document.querySelector("input");
const loanPrice = document.querySelector("#loan-price");

input.addEventListener("input", (e) => {
  loanPrice.innerHTML = `${Number(e.target.value * 1000000).toLocaleString()}`;
});
