document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submitButton");

    submitButton.addEventListener("click", function (e) {
        e.preventDefault(); // Prevent the default form submission

        if (validateForm()) {
            // If the form is valid, you can perform further actions like submitting data to a server.
            // Example: sendDataToServer();
            alert("Form is valid. Data can be submitted.");
        }
    });

    // Function to validate the form before submission
    function validateForm() {
        const emailInput = document.getElementById("email");
        const titleRadios = document.querySelectorAll('input[name="title"]');
        const firstNameInput = document.getElementById("firstName");
        const lastNameInput = document.getElementById("lastName");
        const phoneInput = document.getElementById("phone");
        const passportNumberInput = document.getElementById("passportNumber");
        const dateOfBirthInput = document.getElementById("dateOfBirth");

        // Basic form validation (check if required fields are not empty)
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

        // Validation for a valid email address
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailPattern.test(emailInput.value)) {
            alert("Please enter a valid email address.");
            return false;
        }

        // Validation for a valid phone number (in the format XXX-XXX-XXXX or XXX-XXXXXXX)
        const phonePattern = /^\d{3}-\d{3}-\d{4}$|^\d{3}-\d{7}$/;
        if (!phonePattern.test(phoneInput.value)) {
            alert("Please enter a valid phone number in the format XXX-XXX-XXXX or XXX-XXXXXXX.");
            return false;
        }

        // Validation for a valid date of birth (in the format YYYY-MM-DD)
        const dateOfBirthPattern = /^\d{4}-\d{2}-\d{2}$/;
        if (!dateOfBirthPattern.test(dateOfBirthInput.value)) {
            alert("Please enter a valid date of birth in the format YYYY-MM-DD.");
            return false;
        }

        return true; // Form is valid
    }


    // Example: Changing border color on input focus
    const formElements = document.querySelectorAll(".form-control");
    formElements.forEach(element => {
        element.addEventListener("focus", function () {
            element.style.border = "1px solid #007bff"; // Change border color on focus
        });
        element.addEventListener("blur", function () {
            element.style.border = "1px solid #ccc"; // Reset border color on blur
        });
    });

    // Example: Dynamic selection options for trips
    const tripSelect = document.getElementById("tripSelect");
    const participantTypeRadios = document.querySelectorAll('input[name="participantType"]');

    participantTypeRadios.forEach(radio => {
        radio.addEventListener("change", function () {
            if (radio.value === "Cyclist") {
                // Cyclists can choose additional trips
                tripSelect.innerHTML = `
                        <option value="Stage Race">Stage Race</option>
                        <option value="Mt. Everest Challenge Marathon (4 day trip)">Mt. Everest Challenge Marathon (4 day trip)</option>
                        <option value="Mt. Everest Bike Rally">Mt. Everest Bike Rally</option>
                        <option value="Custom Trip">Custom Trip</option>`;
            } else {
                // Others have standard trip options
                tripSelect.innerHTML = `
                        <option value="Stage Race">Stage Race</option>
                        <option value="Mt. Everest Challenge Marathon (4 day trip)">Mt. Everest Challenge Marathon (4 day trip)</option>
                        <option value="Mt. Everest Bike Rally">Mt. Everest Bike Rally</option>`;
            }
        });
    });

    // Additional JavaScript functionality can be added based on your project requirements.
});