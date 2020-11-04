// Crea una función que cambie un array repitiendo sus valores originales (manteniendo el mismo orden). Por ejemplo, repetirValores([4,”Ulysses”, 42, false]) debiera dar [4,4, “Ulysses”, “Ulysses”, 42, 42, false, false].

function repetirValores(x){
  z=[]
  for (i=0; i<x.length; i++) {
    z.push(x[i]);
    z.push(x[i]);
  }
  return z;
}

console.log(repetirValores([4,"Ulysses", 42, false]));