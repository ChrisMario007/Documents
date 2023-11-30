const apiConfigForm = document.querySelector('.api-config-form');
const successMessage = document.querySelector('.success-message');

apiConfigForm.addEventListener('submit', function(event) {
    event.preventDefault();
// form validation 

    successMessage.classList.remove('hidden');
    apiConfigForm.reset();

    
});
// Get form elements
const clientNameInput = document.querySelector('input[name="clientName"]');
const apiNameInput = document.querySelector('input[name="apiName"]');
const apiEndpointInput = document.querySelector('input[name="apiEndpoint"]');
const apiTypeSelect = document.querySelector('select[name="apiType"]');
const methodTypeSelect = document.querySelector('select[name="methodType"]');
const transactionTypeSelect = document.querySelector('select[name="transactionType"]');
const entryTypeSelect = document.querySelector('select[name="entryType"]');
const glToCreditInput = document.querySelector('input[name="glToCredit"]');
const glToDebitInput = document.querySelector('input[name="glToDebit"]');
const thirdPartyApiTypeSelect = document.querySelector('select[name="thirdPartyType"]');
const authTypeSelect = document.querySelector('select[name="authType"]');
const authBodyInput = document.querySelector('input[name="authBody"]');


// Get API-details div elements
const thirdPartyDiv = document.querySelector('.third-party-value');
const apiNameDiv = document.querySelector('.api-name-value');
const apiEndpointDiv = document.querySelector('.api-endpoint-value');
const apiTypeDiv = document.querySelector('.api-type-value');
const methodTypeDiv = document.querySelector('.method-type-value');
const transactionTypeDiv = document.querySelector('.transaction-type-value');
const entryTypeDiv = document.querySelector('.entry-type-value');
const glToCreditDiv = document.querySelector('.gl-to-credit-value');
const glToDebitDiv = document.querySelector('.gl-to-debit-value');
const thirdPartyApiTypeDiv = document.querySelector('.third-party-api-type-value');
const authTypeDiv = document.querySelector('.auth-type-value');
const authBodyDiv = document.querySelector('.auth-body-value');

// Event listeners to update API-details div in real time
clientNameInput.addEventListener('input', updateThirdParty);
apiNameInput.addEventListener('input', updateApiName);
apiEndpointInput.addEventListener('input', updateApiEndpoint);
apiTypeSelect.addEventListener('change', updateApiType);
methodTypeSelect.addEventListener('change', updateMethodType);
transactionTypeSelect.addEventListener('change', updateTransactionType);
entryTypeSelect.addEventListener('change', updateEntryType);
glToCreditInput.addEventListener('input', updateGlToCredit);
glToDebitInput.addEventListener('input', updateGlToDebit);
thirdPartyApiTypeSelect.addEventListener('change', updateThirdPartyApiType);
authTypeSelect.addEventListener('change', updateAuthType);
authBodyInput.addEventListener('input', updateAuthBody);

function updateThirdParty() {
    thirdPartyDiv.textContent = `"${clientNameInput.value}"`; //text content property
}

function updateApiName() {
    apiNameDiv.textContent = `"${apiNameInput.value}"`;
}

function updateApiEndpoint() {
    apiEndpointDiv.textContent = `"${apiEndpointInput.value}"`;
}

function updateApiType() {
    const selectedOption = apiTypeSelect.options[apiTypeSelect.selectedIndex];
    apiTypeDiv.textContent = `" ${selectedOption.value}"`;
}
function updateMethodType() {
    const selectedOption = methodTypeSelect.options[methodTypeSelect.selectedIndex];
    methodTypeDiv.textContent = `"${selectedOption.value}"`;
}

function updateTransactionType() {
    const selectedOption = transactionTypeSelect.options[transactionTypeSelect.selectedIndex];
    transactionTypeDiv.textContent = `"${selectedOption.value}"`;
}

function updateEntryType() {
    const selectedOption = entryTypeSelect.options[entryTypeSelect.selectedIndex];
    entryTypeDiv.textContent = `" ${selectedOption.value}"`;
}

function updateGlToCredit() {
    glToCreditDiv.textContent = `" ${glToCreditInput.value}"`;
}

function updateGlToDebit() {
    glToDebitDiv.textContent = `"${glToDebitInput.value}"`;
}

function updateThirdPartyApiType() {
    const selectedOption = thirdPartyApiTypeSelect.options[thirdPartyApiTypeSelect.selectedIndex];
    thirdPartyApiTypeDiv.textContent = `" ${selectedOption.value}"`;
}

function updateAuthType() {
    const selectedOption = authTypeSelect.options[authTypeSelect.selectedIndex];
    authTypeDiv.textContent = `" ${selectedOption.value}"`;
}

function updateAuthBody() {
    authBodyDiv.textContent = `" ${authBodyInput.value}"`;
}


// Wait for the DOM content to load
document.addEventListener('DOMContentLoaded', function() {
    // Get the textarea element
    const requestBodyInput = document.querySelector('textarea[name="requestBody"]');
    // Get the API-details div
    const apiDetailsDiv = document.querySelector('.API-details');

    // Add an input event listener to the textarea
    requestBodyInput.addEventListener('input', function() {
        // Get the value from the textarea
        const requestBodyValue = this.value;
        // Update the content inside the API-details div in real-time using <pre> tag
        apiDetailsDiv.querySelector('.request-body-value').textContent = `"${requestBodyValue}";`;
    });
});

