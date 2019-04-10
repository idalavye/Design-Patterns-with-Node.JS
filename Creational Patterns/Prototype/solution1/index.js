var Shopper = require('./Shopper');
/**
 * Shopper'ı import etmek yerine artık prototipimizi import edelim.
 */
var scout_prototype = require('./scout_prototype');


/**
 * Aşarıdaki clonelar prototipteki veriler ile oluşturulmuş birbirinden farklı iki objedir.
 */
var alex = scout_prototype.clone();
alex.name = "Alex Banks";
alex.addItemToList('slingshot');

var eve = scout_prototype.clone();
eve.name = "Eve Porcello"
eve.addItemToList('reading light');

console.log( `${alex.name}: ${alex.shoppingList}` );
console.log( `${eve.name}: ${eve.shoppingList}` );
