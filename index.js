class BankAccount {
  constructor(name, initialDeposit, accountType) {
    this.name = name;
    this.balance = initialDeposit;
    this.accountType = accountType;
  }
}

let accounts = [];
let currentAccount;

function createAccount() {
  const name = document.getElementById('name').value;
  const initialDeposit = parseFloat(document.getElementById('initialDeposit').value);
  const accountType = document.getElementById('accountType').value;

  // Check if the initial deposit is greater than 0
  if (initialDeposit <=0 || isNaN(initialDeposit)) {
    showMessage('Initial deposit must be greater than 0.');
    return; // Abort account creation
  }
  const newAccount = new BankAccount(name, initialDeposit, accountType);
  accounts.push(newAccount);

  updateAccountList();
  selectAccount(accounts.length - 1);

  document.getElementById('name').value = '';
  document.getElementById('initialDeposit').value = '';
}

function updateAccountList() {
  const accountsList = document.getElementById('accounts');
  accountsList.innerHTML = '';

  accounts.forEach((account, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = `Account ${index + 1}: ${account.name}`;
    const selectButton = document.createElement('button');
    selectButton.textContent = 'Select';
    selectButton.addEventListener('click', () => selectAccount(index));
    listItem.appendChild(selectButton);
    accountsList.appendChild(listItem);
  });
}

function selectAccount(index) {
  clearMessage();

  currentAccount = accounts[index];
  document.getElementById('accountName').textContent = currentAccount.name;
  document.getElementById('balance').textContent = currentAccount.balance;
  document.getElementById('accountTypeDisplay').textContent = currentAccount.accountType;
}

function handleTransaction(action) {
  clearMessage();

  switch (action) {
    case 'deposit':
      const depositAmount = parseFloat(prompt('Enter deposit amount:'));
      if (!isNaN(depositAmount) && depositAmount > 0) {
        try {
          currentAccount.balance += depositAmount;
          document.getElementById('balance').textContent = currentAccount.balance;
          showMessage('Deposit successful.');
        } catch (error) {
          showMessage('An error occurred during the deposit.');
        } finally {
          clearInput();
        }
      } else {
        showMessage('Invalid amount for deposit.');
      }
      break;

    case 'withdraw':
      const withdrawAmount = parseFloat(prompt('Enter withdrawal amount:'));
      if (!isNaN(withdrawAmount) && withdrawAmount > 0 && withdrawAmount <= currentAccount.balance) {
        try {
          currentAccount.balance -= withdrawAmount;
          document.getElementById('balance').textContent = currentAccount.balance;
          showMessage('Withdrawal successful.');
        } catch (error) {
          showMessage('An error occurred during the withdrawal.');
        } finally {
          clearInput();
        }
      } else {
        showMessage('Invalid amount or insufficient funds for withdrawal.');
      }
      break;

    case 'checkBalance':
      showMessage(`Your balance is: $${currentAccount.balance}`);
      break;

    default:
      showMessage('Invalid action.');
  }
}

function showMessage(message) {
  document.getElementById('message-text').textContent = message;
}

function clearMessage() {
  document.getElementById('message-text').textContent = '';
}

function clearInput() {
  document.getElementById('amount').value = '';
}
