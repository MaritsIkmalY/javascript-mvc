class Cookie{
    constructor(name, type, price)
    {
        this.name = name;
        this.type = type;
        this.price = price;
    }
}

class Chocolate extends Cookie{
    constructor(name, type, price, isSweet){
        super(name, type, price);
        this.isSweet = isSweet || false;
    }
}

class Strawberry extends Cookie{
    constructor(name, type, price, isSweet){
        super(name, type, price);
        this.isSweet = isSweet || false;
    }
}

class Blueberry extends Cookie{
    constructor(name, type, price, isSweet){
        super(name, type, price);
        this.isSweet = isSweet || false;
    }
}

class Oven{
    constructor(container){
        this.container = container || [];
    }

    bake(cookie_name){
        this.container.push(cookie_name);
    }

    delivery(cookie_name){
        this.container = this.container.filter(cookie => cookie.name !== cookie_name);
    }
}

let oven = new Oven();
oven.bake(new Chocolate("Brownies", "Cake", 10000, true));
oven.bake(new Strawberry("Red Velvet", "Cake", 10000, true));
console.log("Bake");
console.log(oven.container);
oven.delivery("Brownies");
console.log("Delivery");
console.log(oven.container);