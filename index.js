//  1 KATA TROLLS
// https://www.codewars.com/users/LauraGarciaCal/completed_solutions

function disemvowel(str) {
  let  textoSinVocales = '';
  for(let i = 0; i < str.length; i++){
    let minus = str[i].toLowerCase()
    if(!(minus == 'a' || minus == 'e' || minus == 'i' || minus == 'o' || minus == 'u')){
      textoSinVocales = textoSinVocales + str[i];
    }
  }
  return textoSinVocales;
}


// 2 KATA

function highAndLow(numbers) {
  if(numbers.length === 0){
    return "la lista de numeros esta vacia";
  }
  const nums = numbers.split(' ');
  let maximo = +nums[0];
  let minimo = +nums[0];
  
  for(let i = 1; i < nums.length; i++) {
    if(+nums[i] > maximo){
      maximo = +nums[i];
    }
    if(+nums[i] < minimo){
      minimo = +nums[i];
    }
  }
  return maximo + ' ' + minimo;
}
