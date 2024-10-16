// Классы в JS:

// present()
// Этот метод возвращает значение true, если текстовое поле имеет содержимое, в противном случае — false.

// Метод super()ссылается на родительский класс.
// Вызывая super()метод в методе-конструкторе, мы вызываем метод-конструктор родителя и получаем доступ к свойствам и методам родителя.

// -------------------------------------------------------------------------------------------------------

class Car {
    constructor(name) {
      this.brand = name;
    }
    
    present() {
      return 'I have a ' + this.brand;
    }
  }

  mycar.present();

// const mycar = new Car("Ford");

// -------------------------------------------------------------------------------------------------------

// Чтобы создать наследование класса, используйте extends ключевое слово.

class Model extends Car {
    constructor(name, mod) {
      super(name);
      this.model = mod;
    }  
    show() {
        return this.present() + ', it is a ' + this.model
    }
  }
  const mycar = new Model("Ford", "Mustang");
  mycar.show();
