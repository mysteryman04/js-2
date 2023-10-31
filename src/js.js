document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submitButton");
    const overlay = document.getElementById("overlay");
    const closePopup = document.getElementById("closePopup");

    submitButton.addEventListener("click", function (e) {
        e.preventDefault();

        if (validateForm()) {
            overlay.style.display = "block";
        }
    });


    closePopup.addEventListener("click", function () {
        overlay.style.display = "none";
    });

    function validateForm() {
        const emailInput = document.getElementById("email");
        const titleRadios = document.querySelectorAll('input[name="title"]');
        const firstNameInput = document.getElementById("firstName");
        const lastNameInput = document.getElementById("lastName");
        const phoneInput = document.getElementById("phone");
        const passportNumberInput = document.getElementById("passportNumber");
        const dateOfBirthInput = document.getElementById("dateOfBirth");


        if (
            emailInput.value === "" ||
            !titleRadios.some(radio => radio.checked) ||
            firstNameInput.value === "" ||
            lastNameInput.value === "" ||
            phoneInput.value === "" ||
            passportNumberInput.value === "" ||
            dateOfBirthInput.value === ""
        ) {
            alert("Please fill in all required fields.");
            return false;
        }


        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailPattern.test(emailInput.value)) {
            alert("Please enter a valid email address.");
            return false;
        }


        const phonePattern = /^\d{3}-\d{3}-\d{4}$|^\d{3}-\d{7}$/;
        if (!phonePattern.test(phoneInput.value)) {
            alert("Please enter a valid phone number in the format XXX-XXX-XXXX or XXX-XXXXXXX.");
            return false;
        }


        const dateOfBirthPattern = /^\d{4}-\d{2}-\d{2}$/;
        if (!dateOfBirthPattern.test(dateOfBirthInput.value)) {
            alert("Please enter a valid date of birth in the format YYYY-MM-DD.");
            return false;
        }

        return true;
    }


    const formElements = document.querySelectorAll(".form-control");
    formElements.forEach(element => {
        element.addEventListener("focus", function () {
            element.style.border = "1px solid #007bff";
        });
        element.addEventListener("blur", function () {
            element.style.border = "1px solid #ccc";
        });
    });

    const tripSelect = document.getElementById("tripSelect");
    const participantTypeRadios = document.querySelectorAll('input[name="participantType"]');

    participantTypeRadios.forEach(radio => {
        radio.addEventListener("change", function () {
            if (radio.value === "Cyclist") {
                tripSelect.innerHTML = `
                        <option value="Stage Race">Stage Race</option>
                        <option value="Mt. Everest Challenge Marathon (4 day trip)">Mt. Everest Challenge Marathon (4 day trip)</option>
                        <option value="Mt. Everest Bike Rally">Mt. Everest Bike Rally</option>
                        <option value="Custom Trip">Custom Trip</option>`;
            } else {
                tripSelect.innerHTML = `
                        <option value="Stage Race">Stage Race</option>
                        <option value="Mt. Everest Challenge Marathon (4 day trip)">Mt. Everest Challenge Marathon (4 day trip)</option>
                        <option value="Mt. Everest Bike Rally">Mt. Everest Bike Rally</option>`;
            }
        });
    });

});