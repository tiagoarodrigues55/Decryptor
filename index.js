const matrizOriginal = [[2,3],[1, -2]]
const mensagemEncriptada = [29, 102, 49, 65, 43, 63, 51, 49, 142, 41, 63, 70, 53, 79, 5, 120, 37, 47, 9, 126, 39, 43, 38, 87, 64, 17, 123, 114, -17, 2, 0, -41, 18, 7, 8, -21, -34, -25, 28, -35, 9, -6, -1, -10, -13, 13, 1, -42, -5, 18, -23, 12, -10, -9, -12, -48]
const mensagemEmMatriz = [[29, 102, 49, 65, 43, 63, 51, 49, 142, 41, 63, 70, 53, 79, 5, 120, 37, 47, 9, 126, 39, 43, 38, 87, 64, 17, 123, 114], [-17, 2, 0, -41, 18, 7, 8, -21, -34, -25, 28, -35, 9, -6, -1, -10, -13, 13, 1, -42, -5, 18, -23, 12, -10, -9, -12, -48]]
const key = ['','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z', '.','?', '!', ' ']

const matrizInvertida = inverterMatriz(matrizOriginal)
const Repetidos = acharRepetidos(mensagemEmMatriz)
const matrizFinal = desencriptar(mensagemEmMatriz)
const mensagemFinal = criarString(matrizFinal)

console.log(mensagemFinal)




function inverterMatriz(matriz){
  const determinante =  (matriz[0][1]*matriz[1][0]) - (matriz[0][0]*matriz[1][1])
  const matrizPeloDeterminante = [[],[]]
  for(i of matriz){
    for(n of i){
      matrizPeloDeterminante[matriz.indexOf(i)][i.indexOf(n)] = n/- determinante
    }
  }
  const matrizInvertida = [[matrizPeloDeterminante[1][1], - matrizPeloDeterminante[0][1]],[- matrizPeloDeterminante[1][0], matrizPeloDeterminante[0][0]]]
  return matrizInvertida
}

function acharRepetidos(matriz){
const Repetidos = []

  let numeros = [[],[]]
  for(i of matriz){
    for(n of i){
      if(numeros[matriz.indexOf(i)].indexOf(n)=== -1){
        numeros[matriz.indexOf(i)].push(n)
      }else{
let count = 0

        for(v of Repetidos){
          if(v[0]===n){
            v.push(i.indexOf(n, [v[v.length-1]+1]))
            if(i.indexOf(n, [v[v.length-1]+1])=== -1){
              console.log(v[v.length-1]+1)
            }
            count++
          }
        }
        if(count === 0){
        Repetidos.push([n, i.indexOf(n), i.indexOf(n, [i.indexOf(n)+1])])
        }
      }
    }
  }
  return Repetidos
}
function desencriptar(mensagemEmMatriz){
  let matrizFinal = [[],[]]
  for(i of mensagemEmMatriz){
    for(n of i){
      let count = 0
      for(v of Repetidos){
        if(v[0]=== n){
         
          for(t of v){
            if(t!==n){
              matrizFinal[mensagemEmMatriz.indexOf(i)][t] = (matrizInvertida[mensagemEmMatriz.indexOf(i)][0] * mensagemEmMatriz[0][t]) + (matrizInvertida[mensagemEmMatriz.indexOf(i)][1] * mensagemEmMatriz[1][t])
            }
          }
          count ++
        }
      }
      if(count === 0){
        matrizFinal[mensagemEmMatriz.indexOf(i)][i.indexOf(n)] = (matrizInvertida[mensagemEmMatriz.indexOf(i)][0] * mensagemEmMatriz[0][i.indexOf(n)]) + (matrizInvertida[mensagemEmMatriz.indexOf(i)][1] * mensagemEmMatriz[1][i.indexOf(n)])
      }
    
    }
  }
  return matrizFinal
  }
function criarString(matriz){
  let array = []
  for(i of matriz){
    for(n of i){
      array.push(key[Math.round(n)])
    }
  }
  const string = array.toString().replace(/,/g, '')
  return string
}