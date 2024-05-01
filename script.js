// Ciąg JSON do sparsowania
const json = '{"name":"Mango","age":3,"isHappy":true}';

try {
  // Próba sparsowania ciągu JSON na obiekt JavaScript
  const parsedObject = JSON.parse(json);

  // Wydrukowanie otrzymanego obiektu w konsoli
  console.log("Otrzymany obiekt po parsowaniu:");
  console.log(parsedObject);

  // Weryfikacja, czy właściwości otrzymanego obiektu odpowiadają oryginalnemu ciągowi JSON
  console.log("Właściwości otrzymanego obiektu:");
  console.log(`name: ${parsedObject.name}`);
  console.log(`age: ${parsedObject.age}`);
  console.log(`isHappy: ${parsedObject.isHappy}`);
} catch (error) {
  // Obsługa błędu parsowania ciągu JSON
  console.error("Wystąpił błąd podczas parsowania JSON:");
  console.error(`Typ błędu: ${error.name}`);
  console.error(`Wiadomość błędu: ${error.message}`);
}
