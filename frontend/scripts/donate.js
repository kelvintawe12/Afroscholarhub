// Function to set donation amount
function setAmount(amount) {
    document.getElementById('amount').value = amount;
}

// Function to handle payment method selection
function selectPaymentMethod(method) {
    const paymentDetails = document.getElementById('paymentDetails');
    let details = '';

    switch (method) {
        case 'mobile-money':
            details = `
                <div class="payment-method">
                    <h5>Mobile Money Details</h5>
                    <p><strong>Cameroon:</strong> +237 677590328</p>
                    <p><strong>Kenya:</strong> +254 712345678</p>
                </div>
            `;
            break;
        case 'bank-transfer':
            details = `
                <div class="payment-method">
                    <h5>Bank Transfer Details</h5>
                    <p><strong>Bank Name:</strong> ABC Bank</p>
                    <p><strong>Account Number:</strong> 1234567890</p>
                    <p><strong>SWIFT Code:</strong> ABCD1234</p>
                </div>
            `;
            break;
        case 'paypal':
            details = `
                <div class="payment-method">
                    <h5>PayPal Details</h5>
                    <p><strong>PayPal Email:</strong> donations@afroscholarhub.org</p>
                </div>
            `;
            break;
        case 'other':
            details = `
                <div class="payment-method">
                    <h5>Other Payment Methods</h5>
                    <p>Please contact us for more details.</p>
                </div>
            `;
            break;
        default:
            details = '';
    }

    paymentDetails.innerHTML = details;
    alert(`You selected ${method} as your payment method.`);
}
// styling the payment method

const paymentMethods = document.querySelectorAll('.payment-method');

paymentMethods.forEach(method => {
    method.style.backgroundColor = '#f2f2f2';
    method.style.padding = '1rem';
    method.style.borderRadius = '5px';
});

paymentMethods[0].style.backgroundColor = '#fff';

// Function to handle form submission
function submitForm() {
    const amount = document.getElementById('amount').value;
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;

    alert(`Thank you for your donation of $${amount} using ${paymentMethod}.`);
}

// Styling the form
const form = document.querySelector('.donate-form');

form.style.padding = '2rem';
form.style.border = '1px solid #ccc';

// Function to toggle form visibility
function toggleForm() {
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
}

// Styling the toggle button
const toggleButton = document.querySelector('.toggle-button');

toggleButton.style.fontSize = '1.5rem';
toggleButton.style.padding = '0.5rem 1rem';

// Function to handle form reset
function resetForm() {
    document.getElementById('amount').value = '';
    document.querySelector('input[name="paymentMethod"]:checked').checked = false;
    paymentDetails.innerHTML = '';
}

// Styling the reset button
const resetButton = document.querySelector('.reset-button');

resetButton.style.fontSize = '1.5rem';
resetButton.style.padding = '0.5rem 1rem';

// Function to handle form validation
function validateForm() {
    const amount = document.getElementById('amount').value;
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked');

    if (!amount || !paymentMethod) {
        alert('Please fill out all fields.');
        return false;
    }

    return true;
}

// Styling the form validation message
const validationMessage = document.createElement('p');

validationMessage.style.color = 'red';
validationMessage.style.fontWeight = 'bold';

form.appendChild(validationMessage);

// Function to handle form validation
function validateForm() {
    const amount = document.getElementById('amount').value;
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked');

    if (!amount || !paymentMethod) {
        validationMessage.textContent = 'Please fill out all fields.';
        return false;
    }

    validationMessage.textContent = '';
    return true;
}

// Styling the form validation message  
validationMessage.style.marginTop = '1rem';

// Function to handle form submission with validation
function submitForm() {
    if (validateForm()) {
        const amount = document.getElementById('amount').value;
        const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;

        alert(`Thank you for your donation of $${amount} using ${paymentMethod}.`);
    }
}

// Styling the submit button
const submitButton = document.querySelector('.submit-button');

submitButton.style.fontSize = '1.5rem';
submitButton.style.padding = '0.5rem 1rem';

// Function to handle form submission with validation and prevent form submission
function submitForm(event) {
    event.preventDefault();

    if (validateForm()) {
        const amount = document.getElementById('amount').value;
        const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;

        alert(`Thank you for your donation of $${amount} using ${paymentMethod}.`);
    }
}

// Styling the submit button
submitButton.style.backgroundColor = '#007bff';

// Function to handle form submission with validation and prevent form submission
function submitForm(event) {
    event.preventDefault();

    if (validateForm()) {
        const amount = document.getElementById('amount').value;
        const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;

        alert(`Thank you for your donation of $${amount} using ${paymentMethod}.`);
        form.reset();
    }
}