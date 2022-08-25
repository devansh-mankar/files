function cookmaggie(maggie,water,utensil){
    console.log("your maggie will be ready in"
                + maggie*2 + "minutes"
                + "ingredients used are->"
                +maggie+"maggie"
                +water+" cups of water"
                +"using"+utensil+"utensil")       
}

cookmaggie(2,2,1)

let bread1=prompt("which bread would you like to have-:");
let veggie1=prompt("which veggie would you like to have->");
let sauce1=prompt("which sauce would you like to have-:");


function makesandwich(bread ,veggie, sauce)
{
    let sandwich=bread+" bread "+veggie+" veggie "+sauce+" sauce "+" sandwich";
    return sandwich;
}

let vegsandwich = makesandwich(bread1, veggie1, sauce1);
console.log(vegsandwich);

function namsateworld(name,lastname)
{
    console.log("Namaste " + name + "  "+ lastname);
}

namsateworld("devansh" ,"mankar");


function addition(a,b)
{
    return a+b;
}

console.log(addition(5,5))

