function createBankAccount(initialBalance) {
    let balance = initialBalance;
  
    return {
      deposit: function(amount) {
        if (amount > 0) {
          balance += amount;
          return balance;
        } else {
          return "Invalid deposit amount";
        }
      },
      withdraw: function(amount) {
        if (amount <= 0) {
          return "Invalid withdrawal amount";
        }
        if (amount > balance) {
          return "Insufficient funds";
        }
        balance -= amount;
        return balance;
      },
      getBalance: function() {
        return balance;
      }
    };
  }
  