document.getElementById("case-plus").addEventListener("click", function () {
  const newValue = getValueUpdate(true, "case-field");
  itemTotal(newValue, "case-total");
});

document.getElementById("case-minus").addEventListener("click", function () {
  const newValue = getValueUpdate(false, "case-field");
  itemTotal(newValue, "case-total");
});

document.getElementById("case-delete").addEventListener("click", function (e) {
  getElementDelete(e.target);
});
