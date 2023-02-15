function getValueUpdate(isIncrease, elementId) {
  const FieldElement = document.getElementById(elementId);
  const increaseValue = parseInt(FieldElement.value);

  let newValue;

  if (increaseValue < 1) {
    newValue = FieldElement.value = 1;
    return newValue;
  } else {
    if (isIncrease) {
      newValue = FieldElement.value = increaseValue + 1;
      return newValue;
    } else {
      newValue = FieldElement.value = increaseValue - 1;
      return newValue;
    }
  }
}

function itemTotal(newValue, element1) {
  let phoneTotalString = document.getElementById(element1);
  const Value = newValue * 1219;
  phoneTotalString.innerText = Value;
  const sub = subTotal();
  const tax = (sub * 0.1).toFixed(2);
  innerTextElement("tax", tax);
  const total = parseFloat(sub) + parseFloat(tax);
  innerTextElement("final-total", total);
}

function getElementDelete(element) {
  //   console.log(element.parentNode.parentNode);
  element.parentNode.parentNode.parentNode.removeChild(
    element.parentNode.parentNode
  );
}

function subTotal() {
  const phoneTotalElement = document.getElementById("phone-total").innerText;
  const phoneTotal = parseInt(phoneTotalElement);

  const caseTotalElement = document.getElementById("case-total").innerText;
  const caseTotal = parseInt(caseTotalElement);

  const subTotal = phoneTotal + caseTotal;

  innerTextElement("sub-total", subTotal);
  return subTotal;
}

function innerTextElement(elementId, subTotal) {
  const subTotalElement = document.getElementById(elementId);
  subTotalElement.innerText = subTotal;
}

document.getElementById("check-out").addEventListener("click", function () {
  alert("Order is Done!!!");
});
