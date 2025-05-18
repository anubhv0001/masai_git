function bankAccount(initialBalance = 0) {
  let balance = initialBalance;

  return {
    deposit(amount) {
      if (amount <= 0) return "Deposit amount must be positive.";
      balance += amount;
      return balance;
    },
    withdraw(amount) {
      if (amount <= 0) return "Withdrawal amount must be positive.";
      if (amount > balance) return "Insufficient funds.";
      balance -= amount;
      return balance;
    },
    getBalance() {
      return balance;
    },
    reset() {
      balance = initialBalance;
      return balance;
    }
  };
}
