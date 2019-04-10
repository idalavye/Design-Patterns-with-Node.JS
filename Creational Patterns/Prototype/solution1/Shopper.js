class Shopper {

    constructor(name='unnamed person') {
        this._name = name;
        this._shoppingList = [];
    }

    set name(value) {
        this._name = value;
    }

    get name() {
        return this._name;
    }

    get shoppingList() {
        return this._shoppingList.join(', ');
    }

    addItemToList(item) {
        this._shoppingList.push(item);
    }

    clone(){
        /**
         * getPrototypeOf() metodu bu classın bir prototipini oluşturur. Buradaki name'in ve shopping list in getter setter metotlarının bir kopyasını oluşturur.
         * Ama instanceların içeriğini almaz.
         */
        var proto = Object.getPrototypeOf(this);
        /**
         * Bu sadece bir prototip olduğu için burdaki instance ları kopyalayıp yeni bir Shopper oluşturmalıyız.
         */
        var cloned = Object.create(proto);
        /**
         * Oluşturduğumuz clone a bu prototipteki değerleri atıyoruz. Ve bu clonu kullanabilmesi için isteyen kişiye return ediyoruz.
         */
        cloned._name = this._name;
        cloned._shoppingList = [...this._shoppingList];

        return cloned;
    }

}

module.exports = Shopper;
