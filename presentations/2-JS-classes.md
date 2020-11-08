# Javascript Classes and Prototype

Classes are helpful in studying data structures, and a lot of resources online and in books on data structures will use classes, so it is worth taking time to understand it.

---

JS classes is a new ES6 syntax, but behind the scenes it is using JS prototypes. 
We will first understand prototypes, and then go into classes. 
(There are subtle differences between these which won't be important to us).

---

JS is a bit of an odd ball/a bit different to other languages in how it works (it uses 'prototype based inheritance'). The classes syntax makes it look a bit more similar to other object oriented languages.

---

Note this is a complex and confusing topic and its absolutely fine if we don't understand everything the first time round.

If it's getting too heavy, let me know and we can take a break!

--- 

## Constructor Functions

Ref: (https://javascript.info/constructor-new)
Little more advanced ref: (https://css-tricks.com/understanding-javascript-constructors/)

---

### Constructor Function: definition

Constructor functions technically are regular functions. There are two conventions though:

1. They are named with capital letter first.
2. They should be executed only with "new" operator.


---

### Constructor Function: example

```
function User(name) {
  this.name = name;
  this.isCool = true;
}

let user = new User("Jack");

console.log(user.name); // Jack
console.log(user.isCool); // true
```

---

### Constructor Function: why?

The usual object notation {...} allows you to create one object at a time. But if we want to create many objects (multiple instances) with similar properties, then constructor functions are helpful.

```
function User(name) {
  this.name = name;
  this.isCool = true;
}

let user = new User("Jack");
let user2 = new User("Max");
```

---

### Recap: mini test

- What are the two conventions for constructor functions?

---

Remark: We can also add functions inside a constructor function (note that a function inside an object is called a 'method')

```
function User(name) {
  this.name = name;
  this.isCool = true;
  this.happy = function(){
    console.log(`${this.name} is happy!`)
  }
}
let user = new User('Jack')

user.happy() // 'Jack is happy'
```

---

### Constructor Function: exercise

- make a constructor function of your choice, taking 2 arguments.
- call it using the new operator.
- check it does what you want it
to with console.log

---

### Aside: What does the 'new' operator do?

- it creates an empty object, (calls it 'this')
- executes the function body (of the constructor function). (Usually the function body will add new properties to the object this).
- then it returns the value of this

---

Example:

```
function User(name) {
  this.name = name;
  this.isCool = true;
}

let user = new User("Jack");
```

does this in the background:
```
function User(name) {
  let newUser = {}  // creates empty object (called 'this')
  
  // executes function body
  newUser.name = name;
  newUser.isCool = true;

  return newUser // return the object 'this'
}

let user = User("Jack")
```

---

### Javascript has 9 built in constructors

- Object(), Array(), String(), Number(), Boolean(), Date(), Function(), Error(), RegExp().

- Exercise: Can log these in your browser console, and see what's in the constructor. (After we cover prototypes can also look at for example Object.prototype in console to see all methods in the prototype)

- Note this means most things in javascript are objects. (Everything else is a primitive: e.g. boolean, number, string, bigint, symbol, undefined, null). Ref: (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)

---

### Understanding .this

what .this refers to depends on the context it's being used in.

Read this article (15 mins?):
(https://hackernoon.com/lets-get-this-this-once-and-for-all-f59d76438d34)

---

## Inheritance and Prototypes

Ref: ['Prototype video (with transcript)'](https://ui.dev/beginners-guide-to-javascript-prototype/)

Ref: (https://javascript.info/prototype-inheritance)

---

### Object.create()

```
const parent = {
  name: 'Stacey',
  age: 35,
  heritage: 'Irish'
}

const child = Object.create(parent)
child.name = 'Ryan'
child.age = 7

console.log(child.name) // Ryan
console.log(child.age) // 7
console.log(child.heritage) // Irish
```

'**inherits** hertiage property from parent'

---

- Using Object.create() is not the best way to do inheritance there is an in-built language feature of javascript which allows us to do this kind of inheritance. i.e. **prototype**

---

### Prototype

- Every object (including functions, which is an object) has a 'prototype' property. 

- A prototype is an object. 

- Prototype allows us to share methods across all instances of a constructor function. Put methods you want to share in here.

- The constructor's prototype property is not the prototype of the constructor itself but of all instances of the constructor.

---

### Prototype: Example

```
function Animal (name, energy) {
  this.name = name
  this.energy = energy
}

Animal.prototype.eat = function (amount) {
  console.log(`${this.name} is eating.`)
  this.energy += amount
}

Animal.prototype.sleep = function (length) {
  console.log(`${this.name} is sleeping.`)
  this.energy += length
}

Animal.prototype.play = function (length) {
  console.log(`${this.name} is playing.`)
  this.energy -= length
}

const leo = new Animal('Leo', 7)
const snoop = new Animal('Snoop', 10)
```

---

### Prototype: Exercise
**Refactor/Delete slide**

---

### Asides: 
**Refactor/Delete slide**
- __proto__

- Properties in a prototype are enumerable by default. (i.e. will be accounted if doing a for...in loop over the keys of the object). **Refactor**

- prototype only for reading properties (writing and deleting work directly with objects) **CHECK if true**


---

### Inheritance with prototype

[show and explain diagram]

Ref: (https://www.youtube.com/watch?v=3AKh0-PDsMw)

---

## Classes

Advanced Ref: https://javascript.info/class

---

Note: if you're not clear exactly how prototypes work but can use the syntax for classes, (or vice versa) that is absolutely fine for what we want to do!!

---

### Classes: Example

Class allows you to create a blueprint for an object.

```
class Animal {
  constructor(name, energy) {
    this.name = name
    this.energy = energy
  }
  eat(amount) {
    console.log(`${this.name} is eating.`)
    this.energy += amount
  }
  sleep(length) {
    console.log(`${this.name} is sleeping.`)
    this.energy += length
  }
  play(length) {
    console.log(`${this.name} is playing.`)
    this.energy -= length
  }
}

const leo = new Animal('Leo', 7)
const snoop = new Animal('Snoop', 10)
```

- Syntax Warning: don't put commas between methods in a class.
- Note class methods are non-enumarable by default (as opposed to when we create prototype methods)

---

### Activity

Watch this video (at 1.5x speed) to help consolidate what we have talked about so far.
https://ui.dev/beginners-guide-to-javascript-prototype/

---

### Classes: Exercise


---

### Aside: Classes, **static**

If you want to add a method (or variable) to a class but don't need it to be in the prototype (i.e. shared across all instances, can add it as a static method). 

```
class Animal {
  constructor(name, energy) {
    this.name = name
    this.energy = energy
  }
  eat(amount) {
    console.log(`${this.name} is eating.`)
    this.energy += amount
  }
  static nextToEat(animals) {
    const sortedByLeastEnergy = animals.sort((a,b) => {
      return a.energy - b.energy
    })

    return sortedByLeastEnergy[0].name
  }
}
```
static property Animal.nextToEat lives on the Animal class itself, and not on the prototype.

---

### Aside: class fields

Before we only had methods on classes, we can also add other properties, like so, but these are not set on the prototype (and belong only to the individual object)

class User {
  name = "John";

  sayHi() {
    alert(`Hello, ${this.name}!`);
  }
}

new User().sayHi(); // Hello, John!

---

### Inheritance with classes: extends

Advanced Ref: https://javascript.info/class-inheritance

```
class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  run(speed) {
    this.speed = speed;
    alert(`${this.name} runs with speed ${this.speed}.`);
  }
}

class Rabbit extends Animal {
  hide() {
    alert(`${this.name} hides!`);
  }
}

let rabbit = new Rabbit("White Rabbit");

rabbit.run(5); // White Rabbit runs with speed 5.
rabbit.hide(); // White Rabbit hides!
```
---

### Inheritance with classes: super

- super.method(...) to call a parent method.
- super(...) to call a parent constructor (inside our constructor only).

- note: arrow functions do not behave the same as normal functions when using super.

---

e.g. **super.method(...)**

```
class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  stop() {
    this.speed = 0;
    alert(`${this.name} stands still.`);
  }
}

class Rabbit extends Animal {
  hide() {
    alert(`${this.name} hides!`);
  }

  stop() {
    super.stop(); // call parent stop
    this.hide(); // and then hide
  }
}
```

---

e.g. **constructor super(...)**

When extending classes, you either do not declare the constructor, in which case, implicitly the following happens:

```
class Rabbit extends Animal {
  constructor(...args) {
    super(...args);
  }
}
```

Or to create a custom constructor for the extension you **have to** call super (before using this)

```
class Rabbit extends Animal {
  constructor(name, earLength) {
    super(name);
    this.earLength = earLength;
  }
}
```

---

### Classes: Exercises

Something is wrong, correct it:
```
class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Rabbit extends Animal {
  constructor(name) {
    this.name = name;
    this.created = Date.now();
  }
}

let rabbit = new Rabbit("White Rabbit"); 
// Error: this is not defined
console.log(rabbit.name);
```

---

### Classes: Exercises

https://plnkr.co/edit/3Ha7yGE4lnnhrgOq?p=preview&preview

Create a new class ExtendedClock that inherits from Clock and adds the parameter precision – the number of ms between “ticks”. Should be 1000 (1 second) by default.

Your code should be in the file 
extended-clock.js
Don’t modify the original clock.js. Extend it.

---

Solution:
```
class ExtendedClock extends Clock {
  constructor(options) {
    super(options);
    let { precision = 1000 } = options;
    this.precision = precision;
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), this.precision);
  }
};
```

---



RANDOM NOTES BELOW (NOT IN PRESENTATION)

--------------------

# Questions
- public and private
- difference between factory and constructor fucntions: [https://medium.com/javascript-scene/javascript-factory-functions-vs-constructor-functions-vs-classes-2f22ceddf33e]

-------

class is just a function

### Declaring

named class

unnamed class assigned to variable
get the name using .name by doing varName.name

named class assigned to variable

### constructor
- only one of these methods can exist in a class


### super
- can call the super method in the constructor to call the constructor of the parent class

### static methods
- a class by default does not have static methods


### Summary of class methods
.name
constructor():

