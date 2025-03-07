document.addEventListener("DOMContentLoaded", function () {
    const numberDisplay = document.getElementById("number");
    const textInput = document.getElementById("text-input");
    const sendBtn = document.getElementById("send-btn");
    const colorPicker = document.getElementById("color-picker");
    const increaseBtn = document.getElementById("increase");
    const decreaseBtn = document.getElementById("decrease");

    let number = 0;

    increaseBtn.addEventListener("click", () => {
        numberDisplay.textContent = ++number;
    });

    decreaseBtn.addEventListener("click", () => {
        numberDisplay.textContent = --number;
    });

    sendBtn.addEventListener("click", () => {
        let value = parseInt(textInput.value);
        if (!isNaN(value)) {
            number = value;
            numberDisplay.textContent = number;
        }
    });

    colorPicker.addEventListener("change", () => {
        numberDisplay.style.color = colorPicker.value;
    });
});

