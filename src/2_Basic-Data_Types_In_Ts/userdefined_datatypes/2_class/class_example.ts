class BankAccount{
    accountNumber:number
    accountName:string
    accountBalance?:number

    constructor(accountNumber:number,accountName:string,accountBalance?:number){
        this.accountNumber=accountNumber;
        this.accountBalance=accountBalance;
        this.accountName=accountName
        if(accountBalance){
            this.accountBalance=accountBalance
        }
        else{
            this.accountBalance =0;
        }
       
    }

    debit(amount:number){
        if(this.accountBalance && this.accountBalance>0){
            this.accountBalance = this.accountBalance -amount
        }
        
    }
    credit(amount:number){
        if(this.accountBalance){
            this.accountBalance = this.accountBalance + amount
        }
    }
    getBalance(){
        console.log(`Hello ${this.accountName}your balance is ${this.accountBalance}`)
    }
    
}

const account1 = new BankAccount(101,"Nikhil",1000);
account1.debit(50);
account1.credit(100);
account1.getBalance();

const account2 = new BankAccount(102,"Nikhil2");
account2.credit(2000);
account2.debit(500);
account2.getBalance();