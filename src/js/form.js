// Dropdown - Menu

const dropdownSelect = document.querySelector(".contact--select");
const dropdown = document.querySelector(".dropdown");

dropdownSelect.addEventListener("click", function () {
  dropdown.classList.toggle("hidden");
  dropdown.classList.toggle("dropdown-Slidein");
});
