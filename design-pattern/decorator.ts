interface Coffee {
    getCost(): number
    getDescription(): string
}

class SimpleCoffee implements Coffee {
    getCost() { return 10 }
    getDescription() { return 'Simple coffee' }
}

class MilkCoffee implements Coffee{
    constructor(protected coffee: Coffee){}
    getCost(): number { return this.coffee.getCost() + 2 }
    getDescription(): string { return this.coffee.getDescription() + ', milk' }
}

class WhipCoffee implements Coffee{
    constructor(protected coffee: Coffee){}
    getCost(): number { return this.coffee.getCost() + 5 }
    getDescription(): string { return this.coffee.getDescription() + ', whip' }
}

class VanillaCoffee implements Coffee{
    constructor(protected coffee: Coffee){}
    getCost(): number { return this.coffee.getCost() + 3 }
    getDescription(): string { return this.coffee.getDescription() + ', vanilla' }
}

const someCoffee = new SimpleCoffee();
console.log(someCoffee.getCost()) // 10
console.log(someCoffee.getDescription()) // Simple Coffee

const milkCoffee = new MilkCoffee(someCoffee);
console.log(milkCoffee.getCost()) // 12
console.log(milkCoffee.getDescription()) // Simple Coffee, milk

const whipCoffee = new WhipCoffee(milkCoffee);
console.log(whipCoffee.getCost()) // 17
console.log(whipCoffee.getDescription()) // Simple Coffee, milk, whip

const vanillaCoffee = new VanillaCoffee(whipCoffee);
console.log(vanillaCoffee.getCost()) // 20
console.log(vanillaCoffee.getDescription()) // Simple Coffee, milk, whip, vanilla
