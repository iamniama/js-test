let foo = "bar"
const obj1 = {
    name: "JC",
    email: "id@server.com"
}

const arr = [1, 'blue', true, {ISBN: 145}]

const arr2 = [5, 99, 200, 6, 32, 33]

const add = (num1, num2)=>{
    return (num1 + num2)
}


const doMath = (...args) => {
  if (args.length == 1) {
    return args[0] * args[0]
  } else {
    switch (args[0]) {
        case 'mult':
            return args[1] * args[2]
        case "add":
            return args[1] + args[2]
        case "sub":
            return args[1] - args[2]
        case "div":
            return args[1] / args[2]
        case "mod":
            return args[1] % args[2]
        default:
            return false
    
    }
  }
}

module.exports = {
    foo,
    obj1,
    arr,
    add,
    arr2,
    doMath
}