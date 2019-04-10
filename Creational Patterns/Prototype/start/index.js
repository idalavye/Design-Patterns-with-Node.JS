var Shopper = require('./Shopper');

/**
 * Burada iki farklı Shopper için instance oluşturmuşuz. Ve ikisinede neredeyse aynı fieldları atamaşız. Bu aynı şeyler için fazladan
 * kod yazmak anlamına geliyor. Buradaki gereksiz kodu azaltmak için Prototype design patternını kullanalım.
 */

var alex = new Shopper('Alex Banks');
alex.addItemToList('camping knife');
alex.addItemToList('tent');
alex.addItemToList('backpack');
alex.addItemToList('map');
alex.addItemToList('slingshot');

var eve = new Shopper('Eve Porcello');
eve.addItemToList('camping knife');
eve.addItemToList('tent');
eve.addItemToList('backpack');
eve.addItemToList('map');
eve.addItemToList('reading light');

console.log( `${alex.name}: ${alex.shoppingList}` );
console.log( `${eve.name}: ${eve.shoppingList}` );
