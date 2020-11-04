// Dado un array, mueve todos los valores un espacio de derecha a izquierda eliminando el primer valor y dejando un 0 para el último valor. Por ejemplo, moverAdelante([1,2,3]) debiera dar como resultado [2,3,0].

function moverAdelante(x){
  var z=[]
  for (i=1;i<x.length;i++){
    z.push(x[i])
  }
  z.push(0)
  return z;
}

console.log(moverAdelante([1,2,3]));