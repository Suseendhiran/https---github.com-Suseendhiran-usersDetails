const form = document.getElementById("form");
form.addEventListener("submit", validateForm, false);
console.log(form);
function validateForm(event) {
  let x = form;
  alert("sas", x);
  console.log("submit");

  event.preventDefault();
}
