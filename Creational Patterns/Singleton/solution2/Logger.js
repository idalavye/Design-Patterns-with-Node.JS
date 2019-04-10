class Logger {
  constructor() {
    this.logs = [];
  }

  get count() {
    return this.logs.length;
  }

  log(message) {
    const timestamp = new Date().toISOString();
    this.logs.push({ message, timestamp });
    console.log(`${timestamp} - ${message}`);
  }
}

/**
 * Bu module bir yerden import edildiğinde ilk defa çalıştırılmışsa bunun için bir tane instance yaratılır ve cache de kaydedilir.
 * Yani Node.js otomatik olarak import edilen yerlere aynı instance ı gönderir. Hepsi için ayrı ayrı bir instance oluşturmaz. Bir önceki kullanmış
 * olduğumuz yöntem geleneksel OOP
 * dillerinde kullanılan bir yöntemdir. Ve kodu yazan kişiye getInstance() ile bunun bir singleton olduğunu söyleyebilirdik. İki yöntem
 * arasında çok bir fark yoktur. Sadece Node.js de kod kalabalığını azaltan built-in bir yöntem mevcuttur.
 */
module.exports = new Logger();
