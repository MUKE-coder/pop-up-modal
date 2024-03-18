// BTN
const modalBtn = document.querySelector("#modalBtn");
const modalBtns = document.querySelectorAll("#modalBtn");
const closeBtn = document.querySelector("#closeBtn");
const closeBtns = document.querySelectorAll("#closeBtn");
//OVERLAY
const overlay = document.querySelector(".overlay");
//MODAL
const modal = document.querySelector(".modal");
console.log(closeBtns);

//showModal

function showModal() {
  overlay.style.display = "block";
  modal.style.display = "block";
}
function hideModal() {
  overlay.style.display = "none";
  modal.style.display = "none";
}

modalBtn.addEventListener("click", showModal);
closeBtn.addEventListener("click", hideModal);

closeBtns.forEach((btn) => {
  btn.addEventListener("click", hideModal);
});
modalBtns.forEach((item) => {
  item.addEventListener("click", showModal);
});
