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
/*
function duplicateEncode(word) {
  let result = '';
  for (let i = 0; i < word.length; i++) {
    //loopamo skozi word. String
    let count = 0; //resetiramo counter za vasko crko posebej

    let char = word.charAt(i).toLowerCase(); //shranimo v char crko iz stringa
    for (let j = 0; j < word.length; j++) {
      // loopamo skozi besedo se enkrat
      if (word.charAt(j).toLowerCase() === char) {
        // preverimo ali se crka se kje ponavlja
        count++; //prestejemo kolikokrat
      }
    }
    console.log(char);
    if (count === 1) {
      // ce je samo enkrat
      result += '('; // izpisemo v result (
    } else {
      // ce je veckrat naredimo )
      result += ')';
    }
  }
  return result;
}

console.log(duplicateEncode('din')); // "((("
console.log(duplicateEncode('recede')); // "()()()"
console.log(duplicateEncode('Success')); // ")())())"
console.log(duplicateEncode('(( @')); // "))(("
*/

//Implement a function that computes the difference between two lists. The function should remove all
//  occurrences of elements from the first list (a) that are present in the second list (b). The order of elements in the first list should be preserved in the result.
//If a = [1, 2] and b = [1], the result should be [2].

//1. narediti funkcijo ki primerja 2 arraja
//2. V rezultat napisati samo vrednosti ki so v arreju 1 in jih ni v 2 arrayu

// subproblems
// loopat cez array 1 in shraniti vrednosti
// loopat cez array 2 in shraniti vrednosti
// v rezultat moramo napisati samo vrednosti , ki so v array 1.

/*
const array1 = [1, 2, 2, 2, 3];
const array2 = [1, 2];

function arrayDiff(a, b) {
  const array3 = [];
  for (let i = 0; i < a.length; i++) {
    let isti = false;
    for (let j = 0; j < b.length; j++) {
      if (a[i] === b[j]) {
        isti = true;
        break;
      }
    }
    if (!isti) {
      array3.push(a[i]);
    }
  }
  console.log(array3);
}

arrayDiff(array1, array2);
*/

//Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained
/*
const string = '"The quick brown fox jumps over the lazy dog."';
function reverseWords(str) {
  let beseda = '';
  let rezultat = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      beseda = beseda + str[i];
    }
    if (str[i] === ' ') {
      for (let j = beseda.length - 1; j >= 0; j--) {
        rezultat = rezultat + beseda[j];
      }
      rezultat = rezultat + ' ';
      beseda = '';
    }
  }
  for (let j = beseda.length - 1; j >= 0; j--) {
    rezultat = rezultat + beseda[j];
  }
  return rezultat;
}
const test = reverseWords(string);
console.log(test);
*/
