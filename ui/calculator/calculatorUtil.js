let val1 = 0;
let val2 = 0;
let modifier = "";
let sum = 0;

const modifierTypes = {
  divide: "/",
  multiply: "*",
  minus: "-",
  plus: "+",
};

const numberButtonsList = [
  { label: "0", function: () => updateHtmlAndStoredValues(0) },
  { label: "1", function: () => updateHtmlAndStoredValues(1) },
  { label: "2", function: () => updateHtmlAndStoredValues(2) },
  { label: "3", function: () => updateHtmlAndStoredValues(3) },
  { label: "4", function: () => updateHtmlAndStoredValues(4) },
  { label: "5", function: () => updateHtmlAndStoredValues(5) },
  { label: "6", function: () => updateHtmlAndStoredValues(6) },
  { label: "7", function: () => updateHtmlAndStoredValues(7) },
  { label: "8", function: () => updateHtmlAndStoredValues(8) },
  { label: "9", function: () => updateHtmlAndStoredValues(9) },
];

const modifierButtonList = [
  {
    label: modifierTypes.plus,
    function: () => (modifier = modifierTypes.plus),
  },
  {
    label: modifierTypes.minus,
    function: () => (modifier = modifierTypes.minus),
  },
  {
    label: modifierTypes.multiply,
    function: () => (modifier = modifierTypes.multiply),
  },
  {
    label: modifierTypes.divide,
    function: () => (modifier = modifierTypes.divide),
  },
  { label: "=", function: () => modifierMathFunc(val1, val2, modifier) },
  {
    label: "CLEAR",
    function: () => {
      sum = 0;
      val1 = "";
      val2 = "";
      modifier = "";

      updateValueDisplay("");
    },
  },
];

function insertCalcButtons(elementId, buttonList) {
  console.log("test", elementId);
  if (elementId) {
    const element = document.getElementById(elementId);
    if (element) {
      buttonList.forEach((button) => {
        const btnEle = document.createElement("button");
        btnEle.className = "number-button";
        btnEle.onclick = button.function;
        btnEle.textContent = button.label;

        element.appendChild(btnEle);
      });
    }
  }
}

insertCalcButtons("calculator-number-btns", numberButtonsList);
insertCalcButtons("calculator-modifier-btns", modifierButtonList);

const updateValueDisplay = (newValue) => {
  console.log("new value", newValue);
  const displayEle = document.getElementById("display-value");

  if (typeof newValue !== "number") {
    displayEle.innerText = "|";
    return;
  }
  displayEle.innerText = `${newValue}`;
};

const updateHtmlAndStoredValues = (newValue) => {
  if (typeof newValue !== "number") {
    console.log("new value not of type i can work with", typeof newValue);
  }

  if (!val1) {
    val1 = newValue;
    updateValueDisplay(newValue);
    return;
  }
  if (!val2) {
    val2 = newValue;
    updateValueDisplay(newValue);
    return;
  }
};

const modifierMathFunc = (val1, val2, modifier) => {
  console.log("test", val1, val2, modifier);
  if (
    typeof val1 !== "number" ||
    typeof val2 !== "number" ||
    !Object.values(modifierTypes).includes(modifier)
  ) {
    console.log("recieved an incorrect prop", val1, val2, modifier);
  }

  switch (modifier) {
    case modifierTypes.plus:
      return updateValueDisplay(val1 + val2);
    case modifierTypes.minus:
      return updateValueDisplay(val2 - val1);
    case modifierTypes.multiply:
      return updateValueDisplay(val1 * val2);
    case modifierTypes.divide:
      return updateValueDisplay(val1 / val2); // bring up with class

    default:
      break;
  }
};
updateValueDisplay();
