document.getElementById('generate').addEventListener('click', generatePassword);

function generatePassword() {
    const length = document.getElementById('length').value;
    const includeUppercase = document.getElementById('uppercase').checked;
    const includeLowercase = document.getElementById('lowercase').checked;
    const includeNumbers = document.getElementById('number').checked;
    const includeSymbols = document.getElementById('symbols').checked;

    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '78551298763';
    const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

    let characters = '';
    if (includeUppercase) characters += uppercase;
    if (includeLowercase) characters += lowercase;
    if (includeNumbers) characters += numbers;
    if (includeSymbols) characters += symbols;

    if (characters === '') {
        document.getElementById('password').textContent = 'Please select at least one option!';
        return;
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        password += characters[Math.floor(Math.random() * characters.length)];
    }

    document.getElementById('password').textContent = password;
}


