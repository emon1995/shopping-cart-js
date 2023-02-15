document.getElementById("phone-plus").addEventListener("click", function () {
  const newValue = getValueUpdate(true, "phone-field");
  itemTotal(newValue, "phone-total");
});

document.getElementById("phone-minus").addEventListener("click", function () {
  const newValue = getValueUpdate(false, "phone-field");
  itemTotal(newValue, "phone-total");
});

document.getElementById("phone-delete").addEventListener("click", function (e) {
  getElementDelete(e.target);
});
