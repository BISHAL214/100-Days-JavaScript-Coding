let bread1 = prompt("Which Bread would you like to have :- ");
let veggies1 = prompt("What are your favourite veggies :- ");
let sauce1 = prompt("Which sauce would you like to have :- ");

function makeSandwitch(bread, veggies, sauce){
    let Sandwitch = bread + " bread " + veggies + " " + sauce + " Sandwitch is ready ";
    return Sandwitch;
}

let vegSandwitch = makeSandwitch(bread1, veggies1, sauce1);
console.log(vegSandwitch);