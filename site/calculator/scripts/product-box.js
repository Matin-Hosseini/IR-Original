const conditionModal = new bootstrap.Modal("#condition-modal");
const conditionDetailModal = new bootstrap.Modal("#condition-detail-modal");

const conditionDetailBtn = document.querySelectorAll(
  ".condition-detail-list button"
);

const conditionDetailModalBackbtn = document.querySelector(
  ".condition-detail-modal_back"
);

conditionDetailBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    conditionModal.hide();
    conditionDetailModal.show();
  });
});

conditionDetailModalBackbtn.addEventListener("click", () => {
  conditionDetailModal.hide();
  conditionModal.show();
});
