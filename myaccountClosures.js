/*Create a closure that represents a bank account. Implement a function createBankAccount that initializes an account with a balance
(input by the user) and returns methods to deposit, withdraw, and getBalance. Ensure that the balance cannot be accessed or modified \
directly from outside the closure.*\

deposit(amount): Increases the balance by the given amount.
withdraw(amount): Decreases the balance by the given amount, if there are sufficient funds.
getBalance(): Returns the current balance.*/


function createBankAccount(initialBalnce){
    let balance=initialBalnce;
  
    function deposit(amount){
      balance+=amount;
      console.log(`Deposited amount ${amount} New balance:${balance}`)
    }
    function withdraw(amount){
    if (amount<=balance){
      balance-=amount;
      console.log(`Withdraw amount ${amount} New balance:${balance}`)
    }
    else {
      console.log("Insufficient funds");
    }
    
    }
    function getBalance(){
      console.log(`Balance:${balance}`)
    }
    return {
      deposit,
      withdraw,
      getBalance
    };
  }
  const myAccount=createBankAccount(1000);
  myAccount.deposit(500);
  myAccount.withdraw(500);
  myAccount.getBalance();
  myAccount.withdraw(2000);
  