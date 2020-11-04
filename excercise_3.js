// Configura un array para que el resultado sean los valores en el orden contrario. Por ejemplo, returnReverso([1,2,3]) debe dar [3,2,1].

function returnReverso(x){
  z=[]
  while (x[0]>=0) {
    z.push(x[x.length-1])
    x.pop()
  }
  return z;
}

console.log(returnReverso([1,2,3]));