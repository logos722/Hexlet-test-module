let students = {
  name: 'David',
  class: "VI",
  rollno: 12,
}

let eblo = {
  title: 'Bill Gates',
  author: 'The Road Ahead',
  readingStatus: true

}

const user = {
  name: 'Jhon',
  sayHi() {
    console.log(`Hello ${this.name}!`)
  }
}

var library = [ 
  {
      title: 'Bill Gates',
      author: 'The Road Ahead',
      readingStatus: true
  },
  {
      title: 'Steve Jobs',
      author: 'Walter Isaacson',
      readingStatus: true
  },
  {
      title: 'Mockingjay: The Final Book of The Hunger Games',
      author: 'Suzanne Collins',
      readingStatus: false
  }];

function getProperties(obj) {
  const result = []
  for (let key in obj) {
    result.push(obj[key])
  }
  return result;
}



function getObjLength(obj) {
  let result = 0
  for (let key in obj) {
    result += 1
  }
  return result;
}

function readingStatus(library) {

  for (let key of library) {
    let book = `'${key.title}' ${key.author}.`
    if (key.readingStatus) {
      console.log(`Уже прочитал ${book}`)
    } else {
      console.log(`You still need to read ${book}`);
    }
  }

}

function deleteRolno(obj) {
  return delete(obj.rollno)
}

let message = "Привет!";
let phrase = message;

function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let calculator = {
  read() {
    this.a = +prompt('Введите первое число', 0);
    this.b = +prompt('Введите второе число', 0);
  },

  sum() {
    return alert(`Сумма равна ${this.a + this.b}`)
  },

  mul() {
    return alert(`Произведение равно ${this.a * this.b}`)
  }
};


function Accumulator(startingValue) {
  this.value = startingValue;  
  this.read = function() {
    let sum = +prompt('Введите значение', 1)
    return this.value += sum;
  }
}

let ladder = {
  step: 0,
  up() {
    this.step += 1;
    return this;
  },
  down() {
     this.step -= 1;
    return this;
  },
  showStep: function() { // показывает текущую ступеньку
    console.log(this.step);
    return this;
  }
};

let testUser = {
  name: "John",
  money: 1000,

  // для хинта равного "string"
  toString() {
    return `{name: "${this.name}"}`;
  },

  // для хинта равного "number" или "default"
  valueOf() {
    return this.money;
  }

};


const factorial = (n) => {
  if (n === 0) {
    return 1;
  }
  else {
    return n * factorial(n - 1);
  }
}

function firstLetterUp(str) {
  let retusult = str.slice(1)
  let eblo = str[0].toUpperCase() 
  return eblo +retusult;
}


function checkSpam(str) {
  const newStr = str.toLowerCase()
  if (newStr.includes('viagra') || newStr.includes('xxx')) {
    return true
  }
  return false;
}

function truncate(str, maxlength) {
  let result = str.slice(0, maxlength - 1)

  if (str.length > maxlength) {
    return result + "…"
  }

  return result
}

function extractCurrencyValue(str) {
  return Number(str.slice(1))
}

const styles = ['Джаз', 'Блюз']

function srednya(arr) {
  const average = Math.floor(arr.length / 2);
  return arr[average] = 'Классика'
}

function sumInput() {
  let numbers = [];

  while (true) {
    let value = prompt('Enter a number', 0);

    if (value === "" || value === null || !isFinite(value)) break;

    numbers.push(+value)
  }

  return numbers.reduce((acc, curentValue) => {
    acc += curentValue
    return acc
  }, 0)
}

const array = ['eblo']

console.log(array[0][1])

function camelize(arr) {
  const redactedArray = arr.split('-')
  console.log(redactedArray)
  const result = redactedArray.map((nedead, index) => index == 0 ? nedead : nedead[0].toUpperCase() + nedead.slice(1))
  console.log(result)
  return result.join('')
}



function filterRange(arr, a, b) {
  let result = [];

  result = arr.filter(item => (a <= item && item <= b))
  return result
}

const araray = [5, 3, 8, 1]

console.log(filterRange(araray, 1, 4))