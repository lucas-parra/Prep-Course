// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  return Object.entries(objeto);

}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  
  result = {}
  for (x in string){
    if(string.slice(0, x).includes(string[x])){
      continue
    }else{
      let reString = new RegExp(string[x], "g")
      result[`${string[x]}`] = string.match(reString).length
    }
  }
  return result;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  stringUpperCase = ""
  stringLowerCase = ""
  for(char of s){
    if(char.toUpperCase() === char){
       stringUpperCase = `${stringUpperCase}${char}`
    }else{
     stringLowerCase = `${stringLowerCase}${char}`
    }
  }
  return `${stringUpperCase}${stringLowerCase}`
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

    let result = ""
    let word = ""

  for(x in str){

    if(str[x] === " "){
      result = `${result}${word} `
      word = ""
    }else{
      word = `${str[x]}${word}`
    }
  }
  
  result = `${result}${word}` // ----> cargamos a resultado la ultima palabra. ya que el bucle carga todo menos la ultima palabra.
  return result
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  numStr = numero.toString()
  let j = 0
  for(let i = numStr.length - 1; i >  numStr.length/2; i-- ){
    if(numStr[i] !== numStr[j]){
      return "No es capicua"
    }
    j++
  }
  
  return "Es capicua"
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let newString = ""

  for(char of cadena){
    if(char !== "a" && char !== "b" && char !== "c"){
      newString = `${newString}${char}`;
    }
  }

  return newString 


}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

arr.sort((a, b) => {
  return a.length - b.length 
})

return arr

}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí 
  let newArr = [];

  for(num of arreglo1){
    if(arreglo2.includes(num)){
      newArr.push(num)
    }
  } 

  return newArr
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

