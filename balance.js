function createBankAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposit(amount) {
      if (amount > 0) {
        balance += amount;
        return balance;
      } else {
        return "Deposit amount must be positive.";
      }
    },
    withdraw(amount) {
      if (amount > balance) {
        return "Insufficient funds.";
      } else if (amount <= 0) {
        return "Withdrawal amount must be positive.";
      } else {
        balance -= amount;
        return balance;
      }
    },
    getBalance() {
      return balance;
    }
  };
}
