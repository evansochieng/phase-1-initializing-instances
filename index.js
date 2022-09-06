// Write your code here

// class for Breakfast
class Breakfast {
    constructor(food, drink){
        this.food = food;
        this.drink = drink;
    }
}

// class for Lunch
class Lunch {
    // declaring the fields up-front
    salad;
    soup;
    drink;
    constructor(salad, soup, drink) {
        this.salad = salad;
        this.soup = soup;
        this.drink = drink;
    }
}

// class for Dinner
class Dinner {
    // declare the fields
    salad;
    soup;
    entree;
    #dessert; //this is a private property/field

    constructor(salad, soup, entree, dessert) {
        this.salad = salad;
        this.soup = soup;
        this.entree = entree;
        this.#dessert = dessert;
    }
}

// Try creating an instance
const breakfast = new Breakfast('Biscuits', 'chocolate');
console.log(breakfast.drink);

const dinner = new Dinner('fruit salad', 'Korean soup', 'Pork chop', 'Strawberry gelato');
console.log(dinner.dessert); //this will give me unidentified