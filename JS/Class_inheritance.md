```js
class Animal {
    constructor(name) {
        this.name = name;
    }

    sound(){
        console.log("Animal makes a sound");
    }
}

// creating an inastance of the animal class
let dog = new Animal("name");
dog.sound(); // Output: Animal makes a sound

// Class inheritance 

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
    brak() {
        console.log("Woof! Woof!")
    }
}

// creating an inastance of the Dog class
let bulldog = new Dog("Tomy", "Bulldog");
bulldog.sound(); // Output: Animal makes a sound
bulldog.brak(); // Output: Woof! Woof!


```
