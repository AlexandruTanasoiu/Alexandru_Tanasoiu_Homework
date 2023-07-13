// Exercise 1
// 1. Creați o variabilă numită age și atribuiți-i o valoare numerică reprezentând vârsta unei persoane. 
//Utilizați o instrucțiune "if" pentru a verifica dacă persoana este eligibilă pentru a conduce. Dacă vârsta este mai mare sau egală cu 18, 
//afișați mesajul "Puteți conduce!", altfel afișați mesajul "Nu puteți conduce încă."

const age = 25;
if(age >= 18) console.log('Puteti conduce!');
else console.log('Nu puteti conduce inca!');

// Exercise 2
// 2. Creați două variabile, numar1 și numar2, și atribuiți-le valori numerice diferite. 
// Utilizați o instrucțiune "if-else" pentru a verifica care dintre cele două numere este mai mare și afișați mesajul corespunzător.

const numar1 = 23;
const numar2 = 35;

if (numar1 > numar2) console.log('Numarul 1 este mai mare');
else if(numar2 >numar1) console.log('Numarul 2 este mai mare');
else console.log('Numerele sunt egale');

// Exercise 3
// 3. Creați o variabilă temperatura și atribuiți-i o valoare numerică reprezentând temperatura în grade Celsius.
//  Utilizați o instrucțiune "if-else" pentru a verifica dacă temperatura este mai mare de 30 de grade Celsius.
//   Dacă este, afișați mesajul "Este o zi caldă!", altfel afișați mesajul "Temperatura este moderată."

const temp = 43;
if (temp > 30) console.log('Este o zi calda!');
else console.log('Temperatura este moderata!');

// Exercise 4 
// 4. Creați o variabilă numar și atribuiți-i o valoare numerică.
//  Utilizați o instrucțiune "if-else" pentru a verifica dacă numărul este pozitiv, negativ sau zero. 
//  Afișați mesajul corespunzător în funcție de rezultat.

const numar = 35;
if(numar > 0) console.log(`Numarul ${numar} este pozitiv`);
else if (numar < 0) console.log(`Numarul ${numar} este negativ`);
else console.log('Numarul este nul');

// // Exercise 5
// 5. Verificați dacă o variabilă numită variabila este definită și diferită de null.
//  Afișați mesajul "Variabila este definită" dacă este adevărat și "Variabila nu este definită" în caz contrar.

let var1 ;
if(typeof var1 != 'undefined' && var1 != 0) console.log('Variabila este definita!');
else console.log('Variabila nu este definita!');

// // Exercise 6
// 6. Verificați dacă o variabilă numită numar este mai mare decât 0 și mai mică sau egală cu 10. 
// Afișați mesajul "Numărul este cuprins între 0 și 10" dacă este adevărat și "Numărul nu este în intervalul specificat" în caz contrar.

const inputVar = 6;
if (inputVar > 0 && inputVar <= 10) console.log(`Numarul ${inputVar} este cuprins in intervalul 0 si 10.`)
else console.log(`Numarul ${inputVar} nu este cuprins in intervalul specificat!`)

// Exercise 7
// 7. Creați o variabilă nota și atribuiți-i o valoare numerică reprezentând o notă obținută la un test. 
// Utilizați o instrucțiune "if-else" pentru a afișa un mesaj corespunzător, în funcție de valoarea notei:
//     * Dacă nota este mai mare sau egală cu 90, afișați mesajul "Excelent!"
//     * Dacă nota este între 80 și 89, afișați mesajul "Foarte bine!"
//     * Dacă nota este între 70 și 79, afișați mesajul "Bine."
//     * Dacă nota este între 60 și 69, afișați mesajul "Satisfăcător."
//     * Dacă nota este mai mică de 60, afișați mesajul "Nu ați trecut."

const grade = 75;
if(grade < 60) console.log('Nu ati trecut.');
else if (grade < 70) console.log('Satisfacator.');
else if (grade < 80) console.log('Bine.');
else if (grade < 90) console.log('Foarte bine!');
else console.log('Excelent!');