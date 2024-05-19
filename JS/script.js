document.getElementById('addIncome').addEventListener('click', function() {
    var currentBalance = parseFloat(document.getElementById('balance').innerText.replace('$', ''));
    var income = parseFloat(prompt('Enter income amount:'));
    if (!isNaN(income)) {
        var newBalance = currentBalance + income;
        document.getElementById('balance').innerText = '$' + newBalance.toFixed(2);
    }
});

document.getElementById('addExpense').addEventListener('click', function() {
    var currentBalance = parseFloat(document.getElementById('balance').innerText.replace('$', ''));
    var expense = parseFloat(prompt('Enter expense amount:'));
    if (!isNaN(expense)) {
        var newBalance = currentBalance - expense;
        document.getElementById('balance').innerText = '$' + newBalance.toFixed(2);
    }
});
// script.js

// Mock transaction data
const transactions = [
    { recipient: "0x1234abcd", amount: 10 },
    { recipient: "0xabcd1234", amount: 5 },
    { recipient: "0xcdab4321", amount: 8 },
];

// Function to display balance
function displayBalance() {
    const balanceElement = document.getElementById('balanceAmount');
    const balance = transactions.reduce((total, transaction) => total + transaction.amount, 0);
    balanceElement.textContent = balance + ' ARU';
}

// Function to display transaction history
function displayTransactionHistory() {
    const transactionsList = document.getElementById('transactionsList');
    transactionsList.innerHTML = '';
    transactions.forEach(transaction => {
        const listItem = document.createElement('li');
        listItem.textContent = `Recipient: ${transaction.recipient}, Amount: ${transaction.amount} ARU`;
        transactionsList.appendChild(listItem);
    });
}

// Function to handle form submission for sending ARU
function sendARU(event) {
    event.preventDefault();
    const recipient = document.getElementById('recipient').value;
    const amount = parseFloat(document.getElementById('amount').value);

    // Add the new transaction to the list
    transactions.push({ recipient, amount });

    // Update UI
    displayBalance();
    displayTransactionHistory();

    // Clear the form
    document.getElementById('sendForm').reset();
}

// Initialize the wallet
function initWallet() {
    displayBalance();
    displayTransactionHistory();
    document.getElementById('sendForm').addEventListener('submit', sendARU);
}
// Call initWallet when the page is loaded
window.addEventListener('load', initWallet);

// Initialize wallet balance from local storage or set to 0 if not present
var walletBalance = localStorage.getItem('walletBalance');
if (!walletBalance) {
    walletBalance = 0;
} else {
    walletBalance = parseFloat(walletBalance);
    document.getElementById('balance').innerText = '$' + walletBalance.toFixed(2);
}

// Function to update wallet balance in UI and local storage
function updateBalance(amount) {
    walletBalance += amount;
    document.getElementById('balance').innerText = '$' + walletBalance.toFixed(2);
    localStorage.setItem('walletBalance', walletBalance);
}

document.getElementById('addIncome').addEventListener('click', function() {
    var income = parseFloat(prompt('Enter income amount:'));
    if (!isNaN(income)) {
        updateBalance(income);
    }
});

document.getElementById('addExpense').addEventListener('click', function() {
    var expense = parseFloat(prompt('Enter expense amount:'));
    if (!isNaN(expense)) {
        updateBalance(-expense); // Subtract expense from balance
    }
});


// Function to add transaction to the list
function addTransaction(type, amount, category) {
    var transactionList = document.getElementById('transactionList');
    var transactionItem = document.createElement('li');
    transactionItem.textContent = type + ': $' + amount.toFixed(2) + ' (' + category + ')';
    transactionList.appendChild(transactionItem);
}

document.getElementById('addTransaction').addEventListener('click', function() {
    var type = document.getElementById('transactionType').value;
    var amount = parseFloat(document.getElementById('transactionAmount').value);
    var category = document.getElementById('transactionCategory').value;

    if (type && !isNaN(amount) && category) {
        updateBalance(type === 'income' ? amount : -amount);
        addTransaction(type, amount, category);
    }
});
