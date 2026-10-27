// ============================
// MONEYMATE EXPENSE TRACKER
// ============================

let transactions = [];


// ============================
// ADD TRANSACTION
// ============================

function addTransaction() {

    let description =
        document.getElementById("description").value;

    let amount =
        Number(document.getElementById("amount").value);

    let type =
        document.getElementById("type").value;

    if (description === "" || amount <= 0) {

        alert("Please enter a valid description and amount.");

        return;
    }

    transactions.push({
        description: description,
        amount: amount,
        type: type
    });

    document.getElementById("description").value = "";
    document.getElementById("amount").value = "";

    displayTransactions();
    calculateTotals();
}


// ============================
// DISPLAY TRANSACTIONS
// ============================

function displayTransactions() {

    let list =
        document.getElementById("transactionList");

    list.innerHTML = "";

    for (let i = 0; i < transactions.length; i++) {

        let sign =
            transactions[i].type === "income"
                ? "+"
                : "-";

        list.innerHTML += `
        <li>
            ${transactions[i].description}
            - ₦${transactions[i].amount}
            ${sign}

            <button onclick="deleteTransaction(${i})">
                Delete
            </button>
        </li>
        `;
    }
}


// ============================
// DELETE TRANSACTION
// ============================

function deleteTransaction(index) {

    transactions.splice(index, 1);

    displayTransactions();
    calculateTotals();

}


// ============================
// CALCULATE TOTALS
// ============================

function calculateTotals() {

    let income = 0;
    let expenses = 0;

    for (let i = 0; i < transactions.length; i++) {

        if (transactions[i].type === "income") {

            income += transactions[i].amount;

        }
        else {

            expenses += transactions[i].amount;

        }
    }

    let balance = income - expenses;

    document.getElementById("income").innerHTML =
        "₦" + income.toLocaleString();

    document.getElementById("expenses").innerHTML =
        "₦" + expenses.toLocaleString();

    document.getElementById("balance").innerHTML =
        "₦" + balance.toLocaleString();
}


// ============================
// SAVINGS GOAL
// ============================

function calculateSavings() {

    let goal =
        Number(document.getElementById("goal").value);

    let saved =
        Number(document.getElementById("saved").value);

    if (goal <= 0 || saved < 0) {

        alert("Please enter valid savings amounts.");

        return;
    }

    let percentage =
        (saved / goal) * 100;

    if (percentage > 100) {

        percentage = 100;
    }

    let remaining =
        goal - saved;

    if (remaining < 0) {

        remaining = 0;
    }

    document.getElementById("progressBar").style.width =
        percentage + "%";

    document.getElementById("savingResult").innerHTML =
        "🎯 " + percentage.toFixed(1) +
        "% saved | ₦" +
        remaining.toLocaleString() +
        " remaining";

}