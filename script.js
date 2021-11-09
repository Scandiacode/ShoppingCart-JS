
let itemsAdded = [];

function AddPotatoes() {
    let itemName = "Potatoes";
    let itemPrice = 4.50;
    let newItem = {
        name: itemName,
        price: itemPrice
    }
    itemsAdded.push(newItem);
}
function AddBananas() {
    let itemName = "Bananas";
    let itemPrice = 2.39;
    let newItem = {
        name: itemName,
        price: itemPrice
    }
    itemsAdded.push(newItem);
}
function AddResses() {
    let itemName = "Resse's";
    let itemPrice = 2.99;
    let newItem = {
        name: itemName,
        price: itemPrice
    }
    itemsAdded.push(newItem);
}
function AddFunyuns() {
    let itemName = "Funyuns";
    let itemPrice = 6.99;
    let newItem = {
        name: itemName,
        price: itemPrice
    }
    itemsAdded.push(newItem);
}
function AddCola() {
    let itemName = "Coca-Cola";
    let itemPrice = 4.99;
    let newItem = {
        name: itemName,
        price: itemPrice
    }
    itemsAdded.push(newItem);
}
function DisplayMyItems() {
    let salesTax = .06;
    let total = 0;
    console.clear();
    for (let i = 0; i < itemsAdded.length; i++) {
        let nameDisp = itemsAdded[i].name
        let priceDisp = itemsAdded[i].price
        
        total += priceDisp;
        console.log(`${nameDisp}: $${priceDisp}`);
    }
    
    console.log(`Your Total: $${total}`);
    console.log(`Grand Total with Tax: $${(total * 0.06) + total}`);
}
