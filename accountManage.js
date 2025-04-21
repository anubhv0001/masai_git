function createBankAccount(initialBalance) {
    let balance = initialBalance;
  
    return {
      deposit: function (amount) {
        if (amount > 0) {
          balance += amount;
          console.log(`Deposited ₹${amount}.`);
        } else {
          console.log("Deposit amount must be positive.");
        }
      },
  
      withdraw: function (amount) {
        if (amount > balance) {
          console.log("Insufficient funds.");
        } else if (amount <= 0) {
          console.log("Withdrawal amount must be positive.");
        } else {
          balance -= amount;
          console.log(`Withdrew ₹${amount}.`);
        }
      },
  
      getBalance: function () {
        console.log(`Current Balance: ₹${balance}`);
        return balance;
      }
    };
  }
  const myAccount = createBankAccount(1000);

myAccount.getBalance();
myAccount.deposit(500);  
myAccount.withdraw(200); 
myAccount.getBalance();   


