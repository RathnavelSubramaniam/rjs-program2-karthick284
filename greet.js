

function getMessage(name, age) {
   return `Hello,my name is $(name) I am $(age) year old,`;
}

// Don't change the code below
console.log(getMessage(process.argv[2], process.argv[3]));



module.exports = getMessage;
