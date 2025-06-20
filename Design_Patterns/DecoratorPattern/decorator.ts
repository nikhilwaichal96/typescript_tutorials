interface Casino {
    brand:String;
    lobbySite:String;
    helpSite:String;
    language:String| String[];
    region:String;  
    username:String;
    password:String;
    login(): void;
}

interface Coffee {
  cost(): number;
  description(): string;
}

class SimpleCoffee implements Coffee {
  cost(): number {
    return 5;
  }

  description(): string {
    return 'Simple Coffee';
  }
}

class CoffeeDecorator implements Coffee {
  protected decoratedCoffee: Coffee;

  constructor(decoratedCoffee: Coffee) {
    this.decoratedCoffee = decoratedCoffee;
  }

  cost(): number {
    return this.decoratedCoffee.cost();
  }

  description(): string {
    return this.decoratedCoffee.description();
  }
}

class MilkDecorator extends CoffeeDecorator {
  cost(): number {
    return this.decoratedCoffee.cost() + 1;
  }

  description(): string {
    return this.decoratedCoffee.description() + ', with Milk';
  }
}

class SugarDecorator extends CoffeeDecorator {
  cost(): number {
    return this.decoratedCoffee.cost() + 0.5;
  }

  description(): string {
    return this.decoratedCoffee.description() + ', with Sugar';
  }
}

const myCoffee = new SimpleCoffee();
console.log(myCoffee.description()); // Output: Simple Coffee
console.log(myCoffee.cost()); // Output: 5

const milkCoffee = new MilkDecorator(myCoffee);
console.log(milkCoffee.description()); // Output: Simple Coffee, with Milk
console.log(milkCoffee.cost()); // Output: 6

const sugarMilkCoffee = new SugarDecorator(milkCoffee);
console.log(sugarMilkCoffee.description()); // Output: Simple Coffee, with Milk, with Sugar
console.log(sugarMilkCoffee.cost()); // Output: 6.5
