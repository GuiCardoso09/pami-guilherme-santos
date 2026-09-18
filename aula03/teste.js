function Divide (n1, n2) {
    if (typeof(n1) == "number" && typeof(n2) == "number") {
          console.log("Passou por aqui")
   return n1/n2 
    }
 return "Valores errados, parça"
}

console.log(Divide(6, 2));