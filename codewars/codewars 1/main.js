'use strict';

// V FUNKCIJO PRIDETA 2 STEVILKI, SESTEJ IN IZPISI V BINARY VREDNOSTI
/*
function addBinary(a, b) {
  const sum = a + b;               //SEŠTEJEMO 2 VREDNOSTI
  console.log(sum);
  const sumToBinary = sum.toString(2);  // uporabimo method .toSting(2), ki pretvori številke v binary vrednost in vrne v spremenljivko
  console.log(sumToBinary);         
  return sumToBinary;               
}

addBinary(1, 1);
*/

//Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
// 1. preveri stringa med seboj
// 2. ali se prvi string konča z istimi vrednostmi kot 2 string.
/*
function solution(str, ending) {
  const dolzina = str.length; //dobimo dolzino prvega stringa
  const dolzina2 = ending.length; //dobimo dolzino drugega stringa
  const rezultat = str.substring(dolzina - dolzina2, dolzina); //substring = vrne crke v stringu substring(zacetna pozicija, koncna pozicija )
  const rezultat2 = ending.substring(dolzina2[0], dolzina2); // isto substring ki vrne celtoni string
  console.log(dolzina, dolzina2);
  console.log(rezultat, rezultat2);
  if (rezultat === rezultat2) {
    return true;
  } else return false;
}

const shraniVrednost = solution('Jan Muzga', 'zga');
console.log(shraniVrednost);
*/

//The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once
// in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
//1. Kako convertati string v nov string
function duplicateEncode(word) {
  let result = '';
  for (let i = 0; i < word.length; i++) {
    let count = 0;

    let char = word.charAt(i).toLowerCase();
    for (let j = 0; j < word.length; j++) {
      if (word.charAt(j).toLowerCase() === char) {
        count++;
      }
    }
    console.log(char);
    if (count === 1) {
      result += '(';
    } else {
      result += ')';
    }
  }
  return result;
}

console.log(duplicateEncode('din')); // "((("
console.log(duplicateEncode('recede')); // "()()()"
console.log(duplicateEncode('Success')); // ")())())"
console.log(duplicateEncode('(( @')); // "))(("
