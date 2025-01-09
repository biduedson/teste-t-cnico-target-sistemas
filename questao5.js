const palavra = "javascript"
const caracteres = [...palavra]
let reverse = []

for (let i = caracteres.length - 1; i >= 0; i--) {
    reverse.push(caracteres[i])
}
console.log(reverse.join(""))