let str="my name is sandhya";
let result = str.split("")
   .map(world=>world.split("").reverse().join(""))
   .join("");
console.log(result);