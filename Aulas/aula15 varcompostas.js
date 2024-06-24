/*let num = [1, 2, 3, 4, 5]
num.push(1)
num.sort()
console.log(`${num}`)
console.log(`O vetor tem ${num.length} posições`)
num.indexOf(7)

let valores = [8, 1, 7, 4, 2, 9]
for(let pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/
let valores = [8, 1, 7, 4, 2, 9]
for(let pos in valores) {
    console.log(`A posição {pos} tem o valor ${valores[pos]}`)
}