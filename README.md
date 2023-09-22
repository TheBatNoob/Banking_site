# MyBank Online Banking Website

Welcome to My Bank - your online banking solution. With MyBank, you can create and manage multiple bank accounts. This write-up will guide you on how to use my website and provide insights into the code implementation.

## Getting Started

1. **Create an Account**: On the left side of the webpage, you'll find a form under the "Create an Account" section. Fill in your name, initial deposit amount (greater than 0), and select your account type (Savings or Current). Click the "Create Account" button to create your account.

2. **Select an Account**: After creating an account, it will be added to the "Account List" on the right side of the webpage. You can create multiple accounts. Click the "Select" button next to the account you want to interact with; its details will appear on the right.

3. **Perform Transactions**: With your account selected, you can perform the following transactions:
   - **Deposit**: Click the "Deposit" button, enter the amount you want to deposit, and confirm. The deposit amount will be added to your account balance.
   - **Withdraw**: Click the "Withdraw" button, enter the amount you want to withdraw (must be greater than 0 and less than your balance), and confirm. The withdrawal amount will be subtracted from your account balance.
   - **Check Balance**: Click the "Check Balance" button to view your current account balance.

## Implementation Details

### Classes
- I've used a JavaScript class called `BankAccount` to represent a bank account. It has properties like `name`, `balance`, and `accountType`.

### Switch Statements
- I used a switch statement to handle user actions (deposit, withdraw, and check balance) efficiently. The `handleTransaction(action)` function takes the action as an argument and switches to the appropriate case to perform the action.

### Try-Catch-Finally Statements
- Try-catch-finally statements are used to handle exceptions gracefully. For instance, when a user attempts to withdraw more than the account balance or inputs an invalid amount, a catch block displays an error message, and a finally block clears the input field.

### Preventing Account Creation with Balance Less than 0
- I added a validation check when creating an account to ensure that the initial deposit is greater than 0. Accounts with an initial deposit less than or equal to 0 will not be created.

I hope you find My Online Bank easy to use and a convenient way to manage your finances.

Happy banking!
