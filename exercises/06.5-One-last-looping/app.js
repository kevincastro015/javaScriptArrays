let mySampleArray = ['Esmeralda', 'Kiko', 'Ruth', 'Lebron', 'Pedro', 'Maria', 'Lou', 'Fernando', 'Cesco', 'Bart', 'Annie'];

//your code here
let nuevo =[]; //array auxiliar
 for(let i = mySampleArray.length-1; i >=0; i--) {
 console.log(mySampleArray[i])// aqui te imprime lo eslementoe de forma inversa
 nuevo.push(mySampleArray[i]); // creas un nuevo arrray
 }
//  console.log(nuevo)// cuando lo muestras ya tienes un array con los elementos de forma inversa