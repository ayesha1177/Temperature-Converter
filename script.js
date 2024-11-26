const celsiusElem = document.querySelector("#celsius");
const degree = document.querySelector("#degree");
const convertBtn = document.querySelector("#convert-btn");
const tempType = document.querySelector("#temp-type");

window.addEventListener("load", () => {
  degree.value = "";
  celsiusElem.innerHTML = "";
});

convertBtn.addEventListener("click", () => {
  convertToCelsius();
});

function convertToCelsius() {
  // Ensure input is not empty
  if (!degree.value.trim()) {
    celsiusElem.innerHTML = "Input is required!";
    return;
  }

  // Parse input and validate
  let inputValue = parseFloat(degree.value);
  if (isNaN(inputValue)) {
    celsiusElem.innerHTML = "Please enter a valid number!";
    return;
  }

  // Perform conversion
  if (tempType.value === "fahrenheit") {
    const FahrenheitToCelsius = (inputValue - 32) * (5 / 9);
    celsiusElem.innerHTML = `${FahrenheitToCelsius.toFixed(3)} &deg;C`;
  } else if (tempType.value === "kelvin") {
    const KelvinToCelsius = inputValue - 273.15;
    celsiusElem.innerHTML = `${KelvinToCelsius.toFixed(3)} &deg;C`;
  }
}
