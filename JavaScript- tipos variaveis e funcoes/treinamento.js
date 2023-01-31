const idade1 = 5;
const idade2 = 200;
const idade3 = 10;
const idade4 = 10;
const idade5 = 10;
const idade6 = 10;






// function soma(a, b, c){
//           return a * b * c;
//     }

// const soma = function (a, b, c) {return a + b + c}
const soma = (a, b, c, d, e, f) => {
    if (a > 20|| b > 20|| c> 20|| d > 20|| e > 20|| f > 20){
        return "somente numero abaixo de 20"
    } else { 
        return a + b + c +d +e +f
    }
}

console.log (soma(idade1, idade2, idade3, idade4, idade5, idade6))


